const canvas = document.getElementById("treeCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Função para redimensionar o canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Chama a primeira vez para iniciar em tela cheia
resizeCanvas();

// Escuta quando a janela muda de tamanho e ajusta automaticamente
window.addEventListener("resize", () => {
    resizeCanvas();
    animate();
});

let camera = { x: canvas.width / 2, y: 100, zoom: 1, isDragging: false, lastMouseX: 0, lastMouseY: 0 };

class Node {
    constructor(question, options = []) {
        this.question = question;
        this.options = options;
        
        this.x = 0;
        this.y = 0;
        this.targetX = 0;
        this.targetY = 0;
        
        // --- LARGURA DOS BOTÕES E DO CARD ---
        this.btnW = 90; // Largura fixa do botão definida aqui
        const gap = 12;
        const totalBtnW = (options.length * this.btnW) + (Math.max(0, options.length - 1) * gap);
        
        // A largura do card agora garante que abrace todos os botões
        this.w = Math.max(180, totalBtnW + 40); 
        
        // --- QUEBRA DE LINHA: TEXTO PRINCIPAL ---
        ctx.font = "bold 12px sans-serif"; 
        this.lines = this.getLines(ctx, this.question, this.w - 30);
        this.h = (this.lines.length * 18) + 30; 
        
        // --- NOVO: QUEBRA DE LINHA: BOTÕES (OPÇÕES) ---
        ctx.font = "10px sans-serif";
        this.options.forEach(opt => {
            // Calcula as linhas para caber dentro do botão com uma pequena margem interna (10px)
            opt.lines = this.getLines(ctx, opt.label, this.btnW - 10);
            // Calcula a altura dinâmica do botão baseada no número de linhas (mínimo de 26px)
            opt.h = Math.max(26, (opt.lines.length * 14) + 12);
        });
        
        this.alpha = 0;
        this.lerpFactor = 0.1;
        this.subtreeWidth = 0;
    }

    getLines(ctx, text, maxWidth) {
        const words = text.split(" ");
        const lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }

    calculateSubtreeWidth() {
        const activeOptions = this.options.filter(o => o.active);
        if (activeOptions.length === 0) {
            this.subtreeWidth = this.w + 60; // Margem base de segurança aumentada
            return this.subtreeWidth;
        }

        const branchGap = 40; // Espaçamento extra entre subárvores irmãs
        let totalW = 0;
        
        activeOptions.forEach(opt => {
            totalW += opt.node.calculateSubtreeWidth();
        });
        
        // Soma o gap entre os ramos, se houver mais de um aberto
        if (activeOptions.length > 1) {
            totalW += (activeOptions.length - 1) * branchGap;
        }
        
        this.subtreeWidth = Math.max(this.w + 60, totalW);
        return this.subtreeWidth;
    }

    update(tx, ty, isVisible) {
        this.targetX = tx;
        this.targetY = ty;
        
        this.x += (this.targetX - this.x) * this.lerpFactor;
        this.y += (this.targetY - this.y) * this.lerpFactor;
        
        let targetAlpha = isVisible ? 1 : 0;
        this.alpha += (targetAlpha - this.alpha) * this.lerpFactor;

        const activeOptions = this.options.filter(o => o.active);

        this.options.forEach((opt) => {
            const child = opt.node;

            if (opt.active && isVisible && this.alpha > 0.5) {
                // --- NOVA LÓGICA DE DISTRIBUIÇÃO ---
                const branchGap = 40; // Deve ser igual ao usado no calculateSubtreeWidth
                
                // Calcula a largura total ocupada pelos ativos, incluindo o gap
                const totalWidthActive = activeOptions.reduce((acc, o) => acc + o.node.subtreeWidth, 0) + (activeOptions.length > 1 ? (activeOptions.length - 1) * branchGap : 0);
                
                let startX = this.x - totalWidthActive / 2;
                let offset = 0;
                
                for (let i = 0; i < activeOptions.length; i++) {
                    if (activeOptions[i] === opt) {
                        offset += activeOptions[i].node.subtreeWidth / 2;
                        break;
                    }
                    offset += activeOptions[i].node.subtreeWidth + branchGap;
                }
                
                let finalTargetX = startX + offset;

                // Distância Y baseada no fundo do botão específico
                const buttonBottomY = this.y + (this.h / 2) + 10 + opt.h; 
                const childTargetY = buttonBottomY + 60 + (child.h / 2); // Aumentei um pouco o respiro vertical
                
                child.update(finalTargetX, childTargetY, true);
                
            } else {
                child.update(this.x, this.y, false);
                if (!opt.active) {
                    child.options.forEach(childOpt => childOpt.active = false);
                }
            }
        });
    }

    draw() {
        if (this.alpha < 0.05) return;

        ctx.save();
        ctx.globalAlpha = this.alpha;

        // --- LINHAS SAINDO DO BOTÃO ---
        this.options.forEach((opt, i) => {
            if (opt.active && opt.node.alpha > 0.01) {
                const btnX = this.getButtonX(i);
                // A linha agora sai do Y dinâmico do botão (que pode ser maior)
                const btnYBottom = this.y + this.h / 2 + 10 + opt.h;

                ctx.beginPath();
                ctx.moveTo(btnX, btnYBottom);
                ctx.lineTo(opt.node.x, opt.node.y - opt.node.h / 2);
                ctx.strokeStyle = "#cbd5e0";
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        });

        // --- CARD PRINCIPAL ---
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(0,0,0,0.1)";
        this.roundRect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h, 8, true, true);

        ctx.shadowBlur = 0;
        ctx.fillStyle = "#2d3748";
        ctx.font = "bold 12px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const lineHeight = 18;
        const startY = this.y - ((this.lines.length - 1) * lineHeight) / 2;

        this.lines.forEach((line, index) => {
            ctx.fillText(line, this.x, startY + (index * lineHeight));
        });

        // --- BOTÕES COM ALTURA DINÂMICA E MÚLTIPLAS LINHAS ---
        this.options.forEach((opt, i) => {
            const btnXCenter = this.getButtonX(i);
            const btnX = btnXCenter - this.btnW / 2;
            const btnY = this.y + this.h / 2 + 10;

            // Retângulo do botão usando opt.h
            ctx.fillStyle = opt.active ? "#3182ce" : "#edf2f7";
            this.roundRect(btnX, btnY, this.btnW, opt.h, 4, true, false);

            // Texto do botão
            ctx.fillStyle = opt.active ? "#ffffff" : "#4a5568";
            ctx.font = "10px sans-serif";
            
            const btnLineHeight = 12;
            // Centraliza o bloco de texto dentro do botão
            const btnStartY = btnY + (opt.h / 2) - ((opt.lines.length - 1) * btnLineHeight) / 2;

            opt.lines.forEach((line, index) => {
                ctx.fillText(line, btnXCenter, btnStartY + (index * btnLineHeight));
            });
            
            // Hitbox atualizada com a altura dinâmica
            opt.hitBox = { x: btnX, y: btnY, w: this.btnW, h: opt.h };
        });

        ctx.restore();
        this.options.forEach(opt => opt.node.draw());
    }

    getButtonX(index) {
        const gap = 12;
        const totalButtonsW = (this.options.length * this.btnW) + ((this.options.length - 1) * gap);
        const startX = this.x - totalButtonsW / 2 + this.btnW / 2;
        return startX + index * (this.btnW + gap);
    }

    roundRect(x, y, w, h, r, fill, stroke) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
        if (fill) ctx.fill();
        if (stroke) { ctx.strokeStyle = "#e2e8f0"; ctx.stroke(); }
    }

    checkClick(mx, my) {
        if (this.alpha < 0.5) return;
        this.options.forEach(opt => {
            const b = opt.hitBox;
            if (b && mx > b.x && mx < b.x + b.w && my > b.y && my < b.y + b.h) {
                opt.active = !opt.active;
            }
            if (opt.active) opt.node.checkClick(mx, my);
        });
    }
}

// --- INSTÂNCIA ---
const root = new Node("Pense em um filósofo...", [
    {
        label: "Começar",
        active: false,
        node: new Node("O seu filósofo foca primariamente na metodologia e no progresso da ciência moderna?", [
            {
                // --- RAMO B (Filosofia da Ciência Contemporânea) ---
                label: "Sim",
                active: false,
                node: new Node("O seu filósofo rejeita qualquer metafísica como sendo 'sem sentido' e defende o princípio da verificação empírica estrita?", [
                    { 
                        label: "Sim", 
                        active: false, 
                        node: new Node("Positivistas Lógicos") 
                    },
                    {
                        label: "Não",
                        active: false,
                        node: new Node("O seu filósofo defende que uma teoria só é científica se puder ser refutada ou falseada?", [
                            { 
                                label: "Sim", 
                                active: false, 
                                node: new Node("Karl Popper") 
                            },
                            {
                                label: "Não",
                                active: false,
                                node: new Node("A teoria do seu filósofo é baseada na ideia de que a ciência avança através de rupturas chamadas de 'revoluções científicas' que mudam 'paradigmas'?", [
                                    { 
                                        label: "Sim", 
                                        active: false, 
                                        node: new Node("Thomas Kuhn") 
                                    },
                                    {
                                        label: "Não",
                                        active: false,
                                        node: new Node("O seu filósofo propôs que a ciência é estruturada em 'programas de pesquisa', contendo um núcleo duro protegido por um cinturão de hipóteses auxiliares?", [
                                            { label: "Sim", active: false, node: new Node("Imre Lakatos") },
                                            { label: "Não", active: false, node: new Node("Paul Feyerabend") }
                                        ])
                                    }
                                ])
                            }
                        ])
                    }
                ])
            },
            {
                // --- RAMO A (Teoria do Conhecimento Clássica/Moderna) ---
                label: "Não",
                active: false,
                node: new Node("O seu filósofo defende que a mente humana nasce como uma 'folha em branco' (tábula rasa)?", [
                    {
                        label: "Sim",
                        active: false,
                        node: new Node("O seu filósofo nega que possamos ter certeza absoluta sobre as leis da natureza, atribuindo o princípio de causa e efeito ao mero hábito?", [
                            { 
                                label: "Sim", 
                                active: false, 
                                node: new Node("David Hume") 
                            },
                            {
                                label: "Não",
                                active: false,
                                node: new Node("O seu filósofo define a sensação puramente como uma pressão mecânica dos objetos sobre os nossos órgãos dos sentidos?", [
                                    { label: "Sim", active: false, node: new Node("Thomas Hobbes") },
                                    { label: "Não", active: false, node: new Node("John Locke") }
                                ])
                            }
                        ])
                    },
                    {
                        label: "Não",
                        active: false,
                        node: new Node("O seu filósofo acredita na existência de ideias inatas (conceitos com os quais já nascemos, puramente através da razão)?", [
                            {
                                label: "Sim",
                                active: false,
                                node: new Node("O seu filósofo argumenta que aprender é, na verdade, um processo de recordar (reminiscência) de uma vida passada no mundo das ideias?", [
                                    { 
                                        label: "Sim", 
                                        active: false, 
                                        node: new Node("Platão") 
                                    },
                                    { 
                                        label: "Não", 
                                        active: false, 
                                        node: new Node("René Descartes") 
                                    }
                                ])
                            },
                            { 
                                label: "Não", 
                                active: false, 
                                node: new Node("Immanuel Kant") 
                            }
                        ])
                    }
                ])
            }
        ])
    }
]);

function animate() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(camera.x, camera.y);
    ctx.scale(camera.zoom, camera.zoom);

    root.calculateSubtreeWidth();
    root.update(0, 0, true);
    root.draw();
    requestAnimationFrame(animate);
}

canvas.addEventListener("mousedown", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left - camera.x) / camera.zoom;
    const my = (e.clientY - rect.top - camera.y) / camera.zoom;
    root.checkClick(mx, my);
    camera.isDragging = true;
    camera.lastMouseX = e.clientX; camera.lastMouseY = e.clientY;
});
window.addEventListener("mousemove", (e) => {
    if (camera.isDragging) {
        camera.x += e.clientX - camera.lastMouseX;
        camera.y += e.clientY - camera.lastMouseY;
        camera.lastMouseX = e.clientX; camera.lastMouseY = e.clientY;
    }
});
window.addEventListener("mouseup", () => camera.isDragging = false);
canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    camera.zoom -= e.deltaY * 0.001;
    camera.zoom = Math.max(0.2, Math.min(3, camera.zoom));
}, { passive: false });

animate();