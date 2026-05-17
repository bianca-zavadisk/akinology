const canvas = document.getElementById("treeCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ajusta o canvas se a janela redimensionar
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Node {
    constructor(content, children = []) {
        this.content = content;
        this.children = children;
        this.expanded = false;

        // Posições Atuais (onde ele está desenhado agora)
        this.x = canvas.width / 2;
        this.y = -100; // Começa fora da tela

        // Posições Alvo (onde ele deve estar)
        this.targetX = this.x;
        this.targetY = this.y;

        // Propriedades Visuais
        this.alpha = 0;      // Opacidade para fade-in/out
        this.targetAlpha = 1; 
        this.radius = 20;
        this.lerpFactor = 0.08; // Suavidade da animação (menor = mais lento/suave)
    }

    update() {
        // Interpolação Linear para movimento suave
        this.x += (this.targetX - this.x) * this.lerpFactor;
        this.y += (this.targetY - this.y) * this.lerpFactor;
        this.alpha += (this.targetAlpha - this.alpha) * this.lerpFactor;

        // Atualiza filhos recursivamente e define seus alvos
        this.children.forEach(child => {
            if (!this.expanded) {
                // Se o pai fechar, os filhos viajam para a posição do pai e desaparecem
                child.targetX = this.x;
                child.targetY = this.y;
                child.targetAlpha = 0;
            } else {
                child.targetAlpha = 1;
            }
            child.update();
        });
    }

    // *** CORREÇÃO: Função dedicada a desenhar APENAS a linha de conexão para o pai ***
    drawConnection(parentX, parentY) {
        if (this.alpha < 0.05 || parentX === undefined || parentY === undefined) return;
        
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y); // Centro do nó filho
        ctx.lineTo(parentX, parentY); // Centro do nó pai
        ctx.strokeStyle = "#BDC3C7"; // Cor da linha
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.globalAlpha = 1.0; // Reset alpha
    }

    // *** CORREÇÃO: Função dedicada a desenhar APENAS a bolinha e o texto ***
    drawNode() {
        if (this.alpha < 0.05) return;
        
        ctx.globalAlpha = this.alpha;

        // Desenha a sombra suave
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(0,0,0,0.15)";
        
        // Desenha o Círculo (Bolinha)
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Azul para nós com filhos, Verde água para nós finais
        ctx.fillStyle = this.children.length > 0 ? "#3498DB" : "#2ECC71";
        ctx.fill();
        
        // Borda branca para destacar
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.stroke();

        // Reset da sombra antes de desenhar o texto
        ctx.shadowBlur = 0;

        // Desenha o Texto (Português corrigido)
        ctx.fillStyle = "#2C3E50";
        ctx.font = "bold 14px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        // Exibe o texto acima da bolinha
        ctx.fillText(this.content, this.x, this.y - 35);
        
        ctx.globalAlpha = 1.0;
    }

    isClicked(mx, my) {
        // Detecção de colisão circular simples
        const d = Math.sqrt((mx - this.x) ** 2 + (my - this.y) ** 2);
        return d < this.radius + 10; // Margem de clique extra
    }
}

// Dados com Acentuação Brasileira para Teste
const root = new Node("Início da Árvore", [
    new Node("Decisão com Acentuação", [
        new Node("Ação de Verificação"),
        new Node("Configuração Concluída")
    ]),
    new Node("Opção Secundária", [
        new Node("Cálculo de Eficiência"),
        new Node("Relatório de Operação")
    ])
]);

// Lógica de Distribuição Espacial (Vertical)
function calculateLayout(node, xStart, xEnd, depth) {
    node.targetX = (xStart + xEnd) / 2;
    node.targetY = depth * 120 + 80; // Espaçamento vertical de 120px

    if (node.expanded && node.children.length > 0) {
        const segment = (xEnd - xStart) / node.children.length;
        node.children.forEach((child, i) => {
            const childXStart = xStart + i * segment;
            const childXEnd = childXStart + segment;
            calculateLayout(child, childXStart, childXEnd, depth + 1);
        });
    }
}

// *** CORREÇÃO: Novas funções recursivas para desenho em dois passos ***

function drawLinesRecursively(node, parentX, parentY) {
    // Primeiro desenha a linha deste nó para seu pai
    node.drawConnection(parentX, parentY);
    // Em seguida, chama recursivamente para os filhos desenharem suas linhas
    node.children.forEach(child => drawLinesRecursively(child, node.x, node.y));
}

function drawNodesRecursively(node) {
    // Primeiro desenha a bolinha deste nó
    node.drawNode();
    // Em seguida, chama recursivamente para os filhos desenharem suas bolinhas
    node.children.forEach(child => drawNodesRecursively(child));
}

// Loop Principal de Animação
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    calculateLayout(root, 0, canvas.width, 0); // Calcula onde todos devem ir
    root.update(); // Move todos de forma suave

    // *** CORREÇÃO: Ordem de empilhamento garantida ***
    drawLinesRecursively(root, undefined, undefined); // Passo 1: Todas as linhas no fundo
    drawNodesRecursively(root); // Passo 2: Todas as bolinhas na frente
    
    requestAnimationFrame(animate);
}

// Interatividade: Clique no Canvas
canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    // Função auxiliar recursiva para encontrar o nó clicado
    const findAndToggle = (n) => {
        if (n.isClicked(mx, my)) {
            n.expanded = !n.expanded; // Alterna entre expandir e recolher
            return true;
        }
        // Só verifica filhos se o nó atual estiver expandido
        for (let child of n.children) {
            if (n.expanded && findAndToggle(child)) return true;
        }
        return false;
    };
    findAndToggle(root);
});

// Inicia a animação
animate();