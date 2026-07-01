(function() {
    const URL_BASE = "https://raw.githubusercontent.com/bianca-zavadisk/akinology/main/images/";

    const fluxo = {
        "inicio": {
            texto: "Pense em um filósofo...",
            subtexto: "",
            botoes: [{ label: "Começar", destino: "p1", cor: "#2ecc71" }]
        },
        "p1": {
            texto: "O seu filósofo foca primariamente na metodologia e no progresso da ciência moderna?",
            botoes: [
                { label: "Sim", destino: "p2_b" }, // Popper, Kuhn, Lakatos, Feyerabend, Positivistas Lógicos
                { label: "Não", destino: "p2_a" }  // Descartes, Platão, Locke, Hume, Kant, Hobbes.
            ],
            anterior: "inicio"
        },

        // --- RAMO A (Teoria do Conhecimento Clássica/Moderna) ---
        "p2_a": {
            texto: "O seu filósofo defende que a mente humana nasce como uma 'folha em branco' (tábula rasa)?",
            botoes: [
                { label: "Sim", destino: "p4_final" }, // Locke, Hume, Hobbes
                { label: "Não", destino: "p3_a" }      // Descartes, Platão, Kant
            ],
            anterior: "p1"
        },
        "p4_final": {
            texto: "O seu filósofo nega que possamos ter certeza absoluta sobre as leis da natureza, atribuindo o princípio de causa e efeito ao mero hábito?",
            botoes: [
                { label: "Sim", destino: "res_hume" },
                { label: "Não", destino: "p5_final" }
            ],
            anterior: "p2_a"
        },
        "p5_final": {
            texto: "O seu filósofo define a sensação puramente como uma pressão mecânica dos objetos sobre os nossos órgãos dos sentidos?",
            botoes: [
                { label: "Sim", destino: "res_hobbes" },
                { label: "Não", destino: "res_locke" }
            ],
            anterior: "p4_final"
        },
        "p3_a": {
            texto: "O seu filósofo acredita na existência de ideias inatas (conceitos com os quais já nascemos, puramente através da razão)?",
            botoes: [
                { label: "Sim", destino: "p4_a" }, // Descartes, Platão
                { label: "Não", destino: "res_kant" } // Kant (que possui estruturas 'a priori', mas não inatismo clássico)
            ],
            anterior: "p2_a"
        },
        "p4_a": {
            texto: "O seu filósofo argumenta que aprender é, na verdade, um processo de recordar (reminiscência) de uma vida passada no mundo das ideias?",
            botoes: [
                { label: "Sim", destino: "res_platao" },
                { label: "Não", destino: "res_descartes" }
            ],
            anterior: "p3_a"
        },

        // --- RAMO B (Filosofia da Ciência Contemporânea) ---
        "p2_b": {
            texto: "O seu filósofo rejeita qualquer metafísica como sendo 'sem sentido' e defende o princípio da verificação empírica estrita?",
            botoes: [
                { label: "Sim", destino: "res_positivistas" },
                { label: "Não", destino: "p3_b" } // Popper, Kuhn, Lakatos, Feyerabend
            ],
            anterior: "p1"
        },
        "p3_b": {
            texto: "O seu filósofo defende que uma teoria só é científica se puder ser refutada ou falseada?",
            botoes: [
                { label: "Sim", destino: "res_popper" },
                { label: "Não", destino: "p4_b" } // Kuhn, Lakatos, Feyerabend
            ],
            anterior: "p2_b"
        },
        "p4_b": {
            texto: "A teoria do seu filósofo é baseada na ideia de que a ciência avança através de rupturas chamadas de 'revoluções científicas' que mudam 'paradigmas'?",
            botoes: [
                { label: "Sim", destino: "res_kuhn" },
                { label: "Não", destino: "p5_b" } // Lakatos, Feyerabend
            ],
            anterior: "p3_b"
        },
        "p5_b": {
            texto: "O seu filósofo propôs que a ciência é estruturada em 'programas de pesquisa', contendo um núcleo duro protegido por um cinturão de hipóteses auxiliares?",
            botoes: [
                { label: "Sim", destino: "res_lakatos" },
                { label: "Não", destino: "res_feyerabend" } // Feyerabend e o Anarquismo Epistemológico
            ],
            anterior: "p4_b"
        },

        // --- RESULTADOS ---
        "res_hume": { texto: "David Hume", imagem: URL_BASE + "hume.png", final: true, anterior: "p4_final" },
        "res_hobbes": { texto: "Thomas Hobbes", imagem: URL_BASE + "hobbes.png", final: true, anterior: "p5_final" },
        "res_locke": { texto: "John Locke", imagem: URL_BASE + "locke.png", final: true, anterior: "p5_final" },
        "res_kant": { texto: "Immanuel Kant", imagem: URL_BASE + "kant.png", final: true, anterior: "p3_a" },
        "res_platao": { texto: "Platão", subtexto: "Platão, cuja filosofia moldou profundamente a tradição ocidental, defendia que o verdadeiro conhecimento não provém apenas dos sentidos, mas da contemplação das realidades inteligíveis. Por meio da teoria da reminiscência, sustentava que conhecer é, em certo sentido, recordar verdades já contempladas pela alma; assim, pode ser considerar um precursor do inatismo. Discípulo de Sócrates, utilizava a dialética como caminho para a verdade, frequentemente recorrendo também a mitos e imagens simbólicas.", imagem: URL_BASE + "platao.png", final: true, anterior: "p4_a" },
        "res_descartes": { texto: "René Descartes", imagem: URL_BASE + "descartes.png", final: true, anterior: "p4_a" },
        "res_positivistas": { texto: "Positivistas Lógicos", imagem: URL_BASE + "positivistas.png", final: true, anterior: "p2_b" },
        "res_popper": { texto: "Karl Popper", imagem: URL_BASE + "popper.png", final: true, anterior: "p3_b" },
        "res_kuhn": { texto: "Thomas Kuhn", imagem: URL_BASE + "kuhn.png", final: true, anterior: "p4_b" },
        "res_lakatos": { texto: "Imre Lakatos", imagem: URL_BASE + "lakatos.png", final: true, anterior: "p5_b" },
        "res_feyerabend": { texto: "Paul Feyerabend", imagem: URL_BASE + "feyerabend.png", final: true, anterior: "p5_b" }
    };

    // ---------- ESTADO DA SESSÃO ----------
    let historico = [];       // ids das etapas visitadas na sessão atual (path tracking)
    let etapaAtualId = null;
    let resizeHandler = null;

    // ---------- ELEMENTOS ----------
    const painel = document.createElement('div');
    painel.id = "akinology-container";
    document.body.appendChild(painel);

    const treeCanvas = document.getElementById('treeCanvas');
    const treeCtx = treeCanvas.getContext('2d');

    // Guarda a posição original do canvas no DOM para devolvê-lo intacto na limpeza
    const canvasParentOriginal = treeCanvas.parentNode;
    const canvasNextSiblingOriginal = treeCanvas.nextSibling;

    // ---------- ESTILOS (injetados dinamicamente, sem dependências externas) ----------
    const estilo = document.createElement('style');
    estilo.id = "akinology-estilos";
    estilo.textContent = `
        #akinology-container {
            font-family: 'Segoe UI', Roboto, sans-serif;
            transition: opacity 0.3s ease;
        }

        #akinology-container.modo-pergunta {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            padding: 40px;
            border-radius: 24px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
            text-align: center;
            z-index: 9999;
            width: 400px;
        }

        #akinology-container.modo-final {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: grid;
            grid-template-columns: 38% 62%;
            background: #eef1f5;
        }

        .ak-final-esquerda {
            background: #ffffff;
            padding: 36px 32px;
            overflow-y: auto;
            box-shadow: 6px 0 24px rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .ak-final-direita {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background-color: #fbfcfd;
            background-image:
                linear-gradient(#e3e8ec 1px, transparent 1px),
                linear-gradient(90deg, #e3e8ec 1px, transparent 1px);
            background-size: 24px 24px;
        }

        .ak-final-img {
            width: 140px;
            height: 140px;
            object-fit: cover;
            border-radius: 50%;
            border: 5px solid #2c3e50;
            margin-bottom: 16px;
        }

        .ak-final-nome {
            margin: 0 0 20px 0;
            font-size: 28px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #2c3e50;
        }

        .ak-final-secao {
            width: 100%;
            text-align: left;
            margin-bottom: 20px;
        }

        .ak-final-secao h3 {
            margin: 0 0 8px 0;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #e74c3c;
            border-bottom: 2px solid #ecf0f1;
            padding-bottom: 4px;
        }

        .ak-final-secao p {
            margin: 0;
            font-size: 14px;
            line-height: 1.5;
            color: #576574;
        }

        .ak-final-lista {
            margin: 0;
            padding-left: 18px;
            font-size: 13px;
            line-height: 1.6;
            color: #576574;
        }

        .ak-final-lista li {
            margin-bottom: 6px;
        }
    `;
    document.head.appendChild(estilo);

    // ---------- ÁRVORE DE DECISÃO ESTÁTICA (construída uma única vez a partir do fluxo) ----------
    function construirArvore(id) {
        const etapa = fluxo[id];
        const no = {
            id: id,
            texto: etapa.final ? etapa.texto.toUpperCase() : etapa.texto,
            final: !!etapa.final,
            filhos: []
        };

        (etapa.botoes || []).forEach(btn => {
            no.filhos.push({ label: btn.label, node: construirArvore(btn.destino) });
        });

        return no;
    }

    const arvore = construirArvore("inicio");

    // ---------- BOTÕES REUTILIZÁVEIS ----------
    function estilizarBotaoPrimario(botao, cor) {
        botao.style.cssText = `
            padding: 12px;
            cursor: pointer;
            border: none;
            border-radius: 12px;
            background: ${cor || '#3498db'};
            color: white;
            font-weight: bold;
            font-size: 16px;
            transition: transform 0.2s;
        `;
        botao.onmouseover = () => botao.style.transform = "scale(1.02)";
        botao.onmouseout = () => botao.style.transform = "scale(1)";
    }

    function estilizarLinkVoltar(botao) {
        botao.style.cssText = "margin-top: 20px; background: none; border: none; color: #bdc3c7; cursor: pointer; font-size: 13px;";
    }

    // ---------- RASTREAMENTO DO CAMINHO (PATH TRACKING) ----------
    function atualizarHistorico(id) {
        if (id === "inicio") {
            historico = ["inicio"];
            return;
        }

        // Se o id já apareceu antes (o usuário voltou e escolheu outro caminho),
        // trunca o histórico até ali para que ele reflita sempre o caminho atual
        const indiceExistente = historico.indexOf(id);
        if (indiceExistente !== -1) {
            historico = historico.slice(0, indiceExistente + 1);
        } else {
            historico.push(id);
        }
    }

    function obterCaminhoPensamento() {
        const passos = [];
        for (let i = 1; i < historico.length - 1; i++) {
            const idAtual = historico[i];
            const idProximo = historico[i + 1];
            const etapaAtual = fluxo[idAtual];
            const escolha = (etapaAtual.botoes || []).find(b => b.destino === idProximo);
            passos.push({
                pergunta: etapaAtual.texto,
                resposta: escolha ? escolha.label : ""
            });
        }
        return passos;
    }

    // ---------- CICLO DE VIDA PRINCIPAL ----------
    function mostrarEtapa(id) {
        const etapa = fluxo[id];
        if (!etapa) return;

        atualizarHistorico(id);
        etapaAtualId = id;

        painel.style.opacity = 0;

        setTimeout(() => {
            painel.innerHTML = "";

            if (etapa.final) {
                renderizarResultado(etapa);
            } else {
                renderizarPergunta(etapa);
            }

            painel.style.opacity = 1;
        }, 300);
    }

    function renderizarPergunta(etapa) {
        limparArvore();
        painel.className = "modo-pergunta";

        const titulo = document.createElement('h2');
        titulo.innerText = etapa.texto;
        titulo.style.cssText = "margin: 0 0 10px 0; color: #2c3e50;";
        painel.appendChild(titulo);

        if (etapa.subtexto) {
            const sub = document.createElement('p');
            sub.innerText = etapa.subtexto;
            sub.style.cssText = "color: #7f8c8d; font-size: .8rem;";
            painel.appendChild(sub);
        }

        const boxBotoes = document.createElement('div');
        boxBotoes.style.cssText = "display: flex; flex-direction: column; gap: 10px; margin-top: 25px;";

        (etapa.botoes || []).forEach(btnInfo => {
            const b = document.createElement('button');
            b.innerText = btnInfo.label;
            estilizarBotaoPrimario(b, btnInfo.cor);
            b.onclick = () => mostrarEtapa(btnInfo.destino);
            boxBotoes.appendChild(b);
        });

        painel.appendChild(boxBotoes);

        if (etapa.anterior) {
            const bVoltar = document.createElement('button');
            bVoltar.innerText = "← Voltar pergunta";
            estilizarLinkVoltar(bVoltar);
            bVoltar.onclick = () => mostrarEtapa(etapa.anterior);
            painel.appendChild(bVoltar);
        }
    }

    function renderizarResultado(etapa) {
        painel.className = "modo-final";

        const esquerda = construirCard(etapa);
        const direita = document.createElement('div');
        direita.className = "ak-final-direita";
        direita.appendChild(treeCanvas); // reaproveita o canvas já existente no index.html

        painel.appendChild(esquerda);
        painel.appendChild(direita);

        // Aguarda o grid aplicar as dimensões reais antes de medir o container
        requestAnimationFrame(renderizarArvore);

        resizeHandler = () => renderizarArvore();
        window.addEventListener('resize', resizeHandler);
    }

    // ---------- CARD DO FILÓSOFO (LADO ESQUERDO) ----------
    function construirCard(etapa) {
        const esquerda = document.createElement('div');
        esquerda.className = "ak-final-esquerda";

        if (etapa.imagem) {
            const img = document.createElement('img');
            img.src = etapa.imagem;
            img.className = "ak-final-img";
            esquerda.appendChild(img);
        }

        const nome = document.createElement('h1');
        nome.className = "ak-final-nome";
        nome.innerText = etapa.texto;
        esquerda.appendChild(nome);

        esquerda.appendChild(criarSecao(
            "Principais Ideias",
            etapa.subtexto || "Ainda não há um resumo detalhado das ideias deste filósofo nesta versão do Akinology."
        ));
        esquerda.appendChild(criarSecaoCaminho());

        const boxBotoes = document.createElement('div');
        boxBotoes.style.cssText = "display: flex; flex-direction: column; gap: 10px; margin-top: 10px; width: 100%;";

        const btnReiniciar = document.createElement('button');
        btnReiniciar.innerText = "Jogar Novamente";
        estilizarBotaoPrimario(btnReiniciar, "#95a5a6");
        btnReiniciar.onclick = () => mostrarEtapa("inicio");
        boxBotoes.appendChild(btnReiniciar);

        esquerda.appendChild(boxBotoes);

        if (etapa.anterior) {
            const bVoltar = document.createElement('button');
            bVoltar.innerText = "← Voltar pergunta";
            estilizarLinkVoltar(bVoltar);
            bVoltar.onclick = () => mostrarEtapa(etapa.anterior);
            esquerda.appendChild(bVoltar);
        }

        return esquerda;
    }

    function criarSecao(titulo, texto) {
        const secao = document.createElement('div');
        secao.className = "ak-final-secao";

        const h3 = document.createElement('h3');
        h3.innerText = titulo;
        secao.appendChild(h3);

        const p = document.createElement('p');
        p.innerText = texto;
        secao.appendChild(p);

        return secao;
    }

    function criarSecaoCaminho() {
        const secao = document.createElement('div');
        secao.className = "ak-final-secao";

        const h3 = document.createElement('h3');
        h3.innerText = "Caminho do Pensamento";
        secao.appendChild(h3);

        const lista = document.createElement('ol');
        lista.className = "ak-final-lista";

        obterCaminhoPensamento().forEach(passo => {
            const li = document.createElement('li');
            li.innerText = `${passo.pergunta} → ${passo.resposta}`;
            lista.appendChild(li);
        });

        secao.appendChild(lista);
        return secao;
    }

    // ---------- ÁRVORE COMPLETA (LADO DIREITO, RENDERIZADA NO CANVAS) ----------
    function renderizarArvore() {
        const container = treeCanvas.parentElement;
        if (!container) return;

        const largura = container.clientWidth;
        const altura = container.clientHeight;
        if (largura === 0 || altura === 0) return;

        // Ajusta a resolução do bitmap ao devicePixelRatio para um desenho nítido
        const dpr = window.devicePixelRatio || 1;
        treeCanvas.style.width = largura + "px";
        treeCanvas.style.height = altura + "px";
        treeCanvas.width = Math.floor(largura * dpr);
        treeCanvas.height = Math.floor(altura * dpr);
        treeCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        treeCtx.clearRect(0, 0, largura, altura);

        // 1ª passagem: profundidade e posição relativa (slot) de cada nó da árvore
        const estadoLayout = { totalFolhas: 0, profundidadeMaxima: 0 };
        calcularSlots(arvore, 0, estadoLayout);

        const margem = 30;
        const espacoPorFolha = (largura - margem * 2) / Math.max(1, estadoLayout.totalFolhas);
        const espacoPorNivel = (altura - margem * 2) / Math.max(1, estadoLayout.profundidadeMaxima);
        const larguraNo = Math.min(Math.max(espacoPorFolha * 0.82, 60), 140);

        posicionarNos(arvore, margem, margem, espacoPorFolha, espacoPorNivel);
        calcularDimensoes(arvore, larguraNo);

        // 2ª passagem: conexões atrás, nós na frente — destacando o caminho da sessão em vermelho
        const caminhoSet = new Set(historico);
        desenharConexoes(arvore, caminhoSet);
        desenharNos(arvore, caminhoSet, larguraNo);
    }

    function calcularSlots(no, profundidade, estado) {
        no.depth = profundidade;
        estado.profundidadeMaxima = Math.max(estado.profundidadeMaxima, profundidade);

        if (no.filhos.length === 0) {
            no.slot = estado.totalFolhas;
            estado.totalFolhas += 1;
        } else {
            no.filhos.forEach(f => calcularSlots(f.node, profundidade + 1, estado));
            const slots = no.filhos.map(f => f.node.slot);
            no.slot = (Math.min(...slots) + Math.max(...slots)) / 2;
        }
    }

    function posicionarNos(no, margemX, margemY, espacoPorFolha, espacoPorNivel) {
        no.px = margemX + (no.slot + 0.5) * espacoPorFolha;
        no.py = margemY + no.depth * espacoPorNivel;
        no.filhos.forEach(f => posicionarNos(f.node, margemX, margemY, espacoPorFolha, espacoPorNivel));
    }

    function calcularDimensoes(no, larguraNo) {
        treeCtx.font = no.final ? 'bold 10px "Segoe UI", sans-serif' : '9px "Segoe UI", sans-serif';
        no.linhas = quebrarTexto(no.texto, larguraNo - 16, no.final ? 2 : 4);
        no.altura = Math.max(30, no.linhas.length * 12 + 16);
        no.filhos.forEach(f => calcularDimensoes(f.node, larguraNo));
    }

    function quebrarTexto(texto, larguraMaxima, maxLinhas) {
        const palavras = texto.split(" ");
        const linhas = [];
        let linhaAtual = "";

        palavras.forEach(palavra => {
            const tentativa = linhaAtual ? linhaAtual + " " + palavra : palavra;
            if (treeCtx.measureText(tentativa).width <= larguraMaxima) {
                linhaAtual = tentativa;
            } else {
                linhas.push(linhaAtual);
                linhaAtual = palavra;
            }
        });
        linhas.push(linhaAtual);

        if (linhas.length > maxLinhas) {
            linhas.length = maxLinhas;
            linhas[maxLinhas - 1] += "…";
        }
        return linhas;
    }

    function desenharConexoes(no, caminhoSet) {
        no.filhos.forEach(f => {
            const filho = f.node;
            const noCaminho = caminhoSet.has(no.id) && caminhoSet.has(filho.id) &&
                historico.indexOf(filho.id) === historico.indexOf(no.id) + 1;

            // Conector em ângulo reto (estilo planta baixa/rascunho estrutural)
            const saidaY = no.py + no.altura / 2;
            const chegadaY = filho.py - filho.altura / 2;
            const meioY = (saidaY + chegadaY) / 2;

            treeCtx.beginPath();
            treeCtx.moveTo(no.px, saidaY);
            treeCtx.lineTo(no.px, meioY);
            treeCtx.lineTo(filho.px, meioY);
            treeCtx.lineTo(filho.px, chegadaY);
            treeCtx.strokeStyle = noCaminho ? "#e74c3c" : "#c7cdd1";
            treeCtx.lineWidth = noCaminho ? 3 : 1.5;
            treeCtx.stroke();

            desenharConexoes(filho, caminhoSet);
        });
    }

    function desenharNos(no, caminhoSet, larguraNo) {
        const destacado = caminhoSet.has(no.id);
        const ehAtual = no.id === etapaAtualId;

        const x = no.px - larguraNo / 2;
        const y = no.py - no.altura / 2;

        treeCtx.fillStyle = ehAtual ? "#e74c3c" : (destacado ? "#fdecea" : "#ffffff");
        treeCtx.strokeStyle = destacado ? "#e74c3c" : "#c7cdd1";
        treeCtx.lineWidth = ehAtual ? 3 : (destacado ? 2 : 1);

        desenharRetanguloArredondado(x, y, larguraNo, no.altura, 6);
        treeCtx.fill();
        treeCtx.stroke();

        treeCtx.fillStyle = ehAtual ? "#ffffff" : "#2c3e50";
        treeCtx.font = no.final ? 'bold 10px "Segoe UI", sans-serif' : '9px "Segoe UI", sans-serif';
        treeCtx.textAlign = "center";
        treeCtx.textBaseline = "middle";

        const alturaLinha = 12;
        const inicioY = no.py - ((no.linhas.length - 1) * alturaLinha) / 2;
        no.linhas.forEach((linha, i) => {
            treeCtx.fillText(linha, no.px, inicioY + i * alturaLinha);
        });

        no.filhos.forEach(f => desenharNos(f.node, caminhoSet, larguraNo));
    }

    function desenharRetanguloArredondado(x, y, largura, altura, raio) {
        treeCtx.beginPath();
        treeCtx.moveTo(x + raio, y);
        treeCtx.arcTo(x + largura, y, x + largura, y + altura, raio);
        treeCtx.arcTo(x + largura, y + altura, x, y + altura, raio);
        treeCtx.arcTo(x, y + altura, x, y, raio);
        treeCtx.arcTo(x, y, x + largura, y, raio);
        treeCtx.closePath();
    }

    // ---------- LIMPEZA DO CANVAS (evita vazamento de memória e sobreposição gráfica) ----------
    function limparArvore() {
        if (resizeHandler) {
            window.removeEventListener('resize', resizeHandler);
            resizeHandler = null;
        }
        treeCtx.clearRect(0, 0, treeCanvas.width, treeCanvas.height);

        // Só mexe em width/height inline: display continua sob controle do index.html
        treeCanvas.style.width = "";
        treeCanvas.style.height = "";

        if (treeCanvas.parentNode !== canvasParentOriginal) {
            canvasParentOriginal.insertBefore(treeCanvas, canvasNextSiblingOriginal);
        }
    }

    // ---------- INICIALIZAÇÃO ----------
    mostrarEtapa("inicio");

    // ---------- LIMPEZA AUTOMÁTICA AO SAIR PARA O MENU ----------
    const monitorar = setInterval(() => {
        if (!document.getElementById('script-dinamico')) {
            limparArvore();
            painel.remove();
            estilo.remove();
            clearInterval(monitorar);
        }
    }, 100);
})();
