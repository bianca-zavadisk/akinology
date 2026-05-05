const canvas = document.getElementById("treeCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let camera = { x: canvas.width / 2, y: 100, zoom: 1, isDragging: false, lastMouseX: 0, lastMouseY: 0 };

class Node {
    constructor(question, options = []) {
        this.question = question;
        this.options = options; // [{label: "Sim", active: false, node: Node}]
        
        this.x = 0;
        this.y = 0;
        this.targetX = 0;
        this.targetY = 0;
        
        this.w = Math.max(160, options.length * 85); 
        this.h = 50;
        this.btnW = 70;
        this.btnH = 25;
        
        this.alpha = 0;
        this.lerpFactor = 0.1;
        this.subtreeWidth = 0;
    }

    // Calcula o espaço necessário para cada subárvore
    calculateSubtreeWidth() {
        const activeOptions = this.options.filter(o => o.active);
        if (activeOptions.length === 0) {
            this.subtreeWidth = this.w + 40;
            return this.subtreeWidth;
        }

        let totalW = 0;
        activeOptions.forEach(opt => {
            totalW += opt.node.calculateSubtreeWidth();
        });
        
        this.subtreeWidth = Math.max(this.w + 40, totalW);
        return this.subtreeWidth;
    }

    update(tx, ty, isVisible) {
        this.targetX = tx;
        this.targetY = ty;
        
        // Suavização da posição e transparência
        this.x += (this.targetX - this.x) * this.lerpFactor;
        this.y += (this.targetY - this.y) * this.lerpFactor;
        
        // Se o pai não está visível, o filho também não pode estar
        let targetAlpha = isVisible ? 1 : 0;
        this.alpha += (targetAlpha - this.alpha) * this.lerpFactor;

        // Filtramos as opções que estão marcadas como ativas
        const activeOptions = this.options.filter(o => o.active);

        // Processamos todas as opções (ativas e inativas)
        this.options.forEach((opt) => {
            const child = opt.node;

            if (opt.active && isVisible && this.alpha > 0.5) {
                // --- LÓGICA PARA NÓS ATIVOS ---
                let finalTargetX;

                if (activeOptions.length === 1) {
                    // Se só tem um, alinha verticalmente com o botão dele
                    finalTargetX = this.getButtonX(this.options.indexOf(opt));
                } else {
                    // Se tem vários, usa a distribuição lateral para não sobrepor
                    const totalWidthActive = activeOptions.reduce((acc, o) => acc + o.node.subtreeWidth, 0);
                    let startX = this.x - totalWidthActive / 2;
                    
                    // Encontra a posição deste filho dentro do bloco de ativos
                    let offset = 0;
                    for (let i = 0; i < activeOptions.length; i++) {
                        if (activeOptions[i] === opt) {
                            offset += activeOptions[i].node.subtreeWidth / 2;
                            break;
                        }
                        offset += activeOptions[i].node.subtreeWidth;
                    }
                    finalTargetX = startX + offset;
                }

                child.update(finalTargetX, this.y + 180, true);
            } else {
                // --- LÓGICA PARA NÓS INATIVOS (COLAPSO) ---
                // O filho viaja para dentro do pai e desaparece
                child.update(this.x, this.y, false);
                
                // Forçamos o fechamento das opções dos filhos para evitar "fantasmas"
                // ao reabrir o ramo pai no futuro.
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
                const btnYBottom = this.y + this.h / 2 + 10 + this.btnH;

                ctx.beginPath();
                ctx.moveTo(btnX, btnYBottom);
                // Conexão direta para o topo do nó filho
                ctx.lineTo(opt.node.x, opt.node.y - opt.node.h / 2);
                ctx.strokeStyle = "#cbd5e0";
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        });

        // --- CARD ---
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(0,0,0,0.1)";
        this.roundRect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h, 8, true, true);

        // TEXTO
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#2d3748";
        ctx.font = "bold 12px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(this.question, this.x, this.y + 5);

        // --- BOTÕES ---
        this.options.forEach((opt, i) => {
            const btnXCenter = this.getButtonX(i);
            const btnX = btnXCenter - this.btnW / 2;
            const btnY = this.y + this.h / 2 + 10;

            ctx.fillStyle = opt.active ? "#3182ce" : "#edf2f7";
            this.roundRect(btnX, btnY, this.btnW, this.btnH, 4, true, false);

            ctx.fillStyle = opt.active ? "#ffffff" : "#4a5568";
            ctx.font = "10px sans-serif";
            ctx.fillText(opt.label, btnXCenter, btnY + 16);
            
            opt.hitBox = { x: btnX, y: btnY, w: this.btnW, h: this.btnH };
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
const root = new Node("Escolha um caminho:", [
    { label: "Opção A", active: false, node: new Node("Ramo A Aberto") },
    { label: "Opção B", active: false, node: new Node("Ramo B Aberto") },
    { label: "Opção C", active: false, node: new Node("Ramo C Aberto") }
]);

// ... (Animate e Eventos de Mouse/Zoom permanecem os mesmos)

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