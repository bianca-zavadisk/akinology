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
            curto: "Ciência Moderna?",
            botoes: [
                { label: "Sim", destino: "p2_b" }, // Popper, Kuhn, Lakatos, Feyerabend, Positivistas Lógicos
                { label: "Não", destino: "p2_a" }  // Descartes, Platão, Locke, Hume, Kant, Hobbes.
            ],
            anterior: "inicio"
        },

        // --- RAMO A (Teoria do Conhecimento Clássica/Moderna) ---
        "p2_a": {
            texto: "O seu filósofo defende que a mente humana nasce como uma 'folha em branco' (tábula rasa)?",
            curto: "Tábula Rasa?",
            botoes: [
                { label: "Sim", destino: "p4_final" }, // Locke, Hume, Hobbes
                { label: "Não", destino: "p3_a" }      // Descartes, Platão, Kant
            ],
            anterior: "p1"
        },
        "p4_final": {
            texto: "O seu filósofo nega que possamos ter certeza absoluta sobre as leis da natureza, atribuindo o princípio de causa e efeito ao mero hábito?",
            curto: "Causalidade = Hábito?",
            botoes: [
                { label: "Sim", destino: "res_hume" },
                { label: "Não", destino: "p5_final" }
            ],
            anterior: "p2_a"
        },
        "p5_final": {
            texto: "O seu filósofo define a sensação puramente como uma pressão mecânica dos objetos sobre os nossos órgãos dos sentidos?",
            curto: "Sensação Mecânica?",
            botoes: [
                { label: "Sim", destino: "res_hobbes" },
                { label: "Não", destino: "res_locke" }
            ],
            anterior: "p4_final"
        },
        "p3_a": {
            texto: "O seu filósofo acredita na existência de ideias inatas (conceitos com os quais já nascemos, puramente através da razão)?",
            curto: "Racionalista?",
            botoes: [
                { label: "Sim", destino: "p4_a" }, // Descartes, Platão
                { label: "Não", destino: "res_kant" } // Kant (que possui estruturas 'a priori', mas não inatismo clássico)
            ],
            anterior: "p2_a"
        },
        "p4_a": {
            texto: "O seu filósofo argumenta que aprender é, na verdade, um processo de recordar (reminiscência) de uma vida passada no mundo das ideias?",
            curto: "Reminiscência?",
            botoes: [
                { label: "Sim", destino: "res_platao" },
                { label: "Não", destino: "res_descartes" }
            ],
            anterior: "p3_a"
        },

        // --- RAMO B (Filosofia da Ciência Contemporânea) ---
        "p2_b": {
            texto: "O seu filósofo rejeita qualquer metafísica como sendo 'sem sentido' e defende o princípio da verificação empírica estrita?",
            curto: "Anti-Metafísica?",
            botoes: [
                { label: "Sim", destino: "res_positivistas" },
                { label: "Não", destino: "p3_b" } // Popper, Kuhn, Lakatos, Feyerabend
            ],
            anterior: "p1"
        },
        "p3_b": {
            texto: "O seu filósofo defende que uma teoria só é científica se puder ser refutada ou falseada?",
            curto: "Falsificacionismo?",
            botoes: [
                { label: "Sim", destino: "res_popper" },
                { label: "Não", destino: "p4_b" } // Kuhn, Lakatos, Feyerabend
            ],
            anterior: "p2_b"
        },
        "p4_b": {
            texto: "A teoria do seu filósofo é baseada na ideia de que a ciência avança através de rupturas chamadas de 'revoluções científicas' que mudam 'paradigmas'?",
            curto: "Paradigmas?",
            botoes: [
                { label: "Sim", destino: "res_kuhn" },
                { label: "Não", destino: "p5_b" } // Lakatos, Feyerabend
            ],
            anterior: "p3_b"
        },
        "p5_b": {
            texto: "O seu filósofo propôs que a ciência é estruturada em 'programas de pesquisa', contendo um núcleo duro protegido por um cinturão de hipóteses auxiliares?",
            curto: "Núcleo Duro?",
            botoes: [
                { label: "Sim", destino: "res_lakatos" },
                { label: "Não", destino: "res_feyerabend" } // Feyerabend e o Anarquismo Epistemológico
            ],
            anterior: "p4_b"
        },

        // --- RESULTADOS ---
        "res_hume": {
            texto: "David Hume",
            subtexto: "Principais ideias de David Hume... (texto provisório, preencher depois)",
            imagem: URL_BASE + "hume.png",
            final: true,
            anterior: "p4_final"
        },
        "res_hobbes": {
            texto: "Thomas Hobbes",
            subtexto: "Principais ideias de Thomas Hobbes... (texto provisório, preencher depois)",
            imagem: URL_BASE + "hobbes.png",
            final: true,
            anterior: "p5_final"
        },
        "res_locke": {
            texto: "John Locke",
            subtexto: "Principais ideias de John Locke... (texto provisório, preencher depois)",
            imagem: URL_BASE + "locke.png",
            final: true,
            anterior: "p5_final"
        },
        "res_kant": {
            texto: "Immanuel Kant",
            subtexto: "Principais ideias de Immanuel Kant... (texto provisório, preencher depois)",
            imagem: URL_BASE + "kant.png",
            final: true,
            anterior: "p3_a"
        },
        "res_platao": {
            texto: "Platão",
            subtexto: "Platão, cuja filosofia moldou profundamente a tradição ocidental, defendia que o verdadeiro conhecimento não provém apenas dos sentidos, mas da contemplação das realidades inteligíveis. Por meio da teoria da reminiscência, sustentava que conhecer é, em certo sentido, recordar verdades já contempladas pela alma; assim, pode ser considerar um precursor do inatismo. Discípulo de Sócrates, utilizava a dialética como caminho para a verdade, frequentemente recorrendo também a mitos e imagens simbólicas.",
            imagem: URL_BASE + "platao.png",
            final: true,
            anterior: "p4_a"
        },
        "res_descartes": {
            texto: "René Descartes",
            subtexto: "Principais ideias de René Descartes... (texto provisório, preencher depois)",
            imagem: URL_BASE + "descartes.png",
            final: true,
            anterior: "p4_a"
        },
        "res_positivistas": {
            texto: "Positivistas Lógicos",
            subtexto: "Principais ideias dos Positivistas Lógicos... (texto provisório, preencher depois)",
            imagem: URL_BASE + "positivistas.png",
            final: true,
            anterior: "p2_b"
        },
        "res_popper": {
            texto: "Karl Popper",
            subtexto: "Principais ideias de Karl Popper... (texto provisório, preencher depois)",
            imagem: URL_BASE + "popper.png",
            final: true,
            anterior: "p3_b"
        },
        "res_kuhn": {
            texto: "Thomas Kuhn",
            subtexto: "Principais ideias de Thomas Kuhn... (texto provisório, preencher depois)",
            imagem: URL_BASE + "kuhn.png",
            final: true,
            anterior: "p4_b"
        },
        "res_lakatos": {
            texto: "Imre Lakatos",
            subtexto: "Principais ideias de Imre Lakatos... (texto provisório, preencher depois)",
            imagem: URL_BASE + "lakatos.png",
            final: true,
            anterior: "p5_b"
        },
        "res_feyerabend": {
            texto: "Paul Feyerabend",
            subtexto: "Principais ideias de Paul Feyerabend... (texto provisório, preencher depois)",
            imagem: URL_BASE + "feyerabend.png",
            final: true,
            anterior: "p5_b"
        }
    };

    // ---------- ESTADO DA SESSÃO ----------
    let historico = [];       // ids das etapas visitadas na sessão atual (path tracking)
    let etapaAtualId = null;
    let resizeHandler = null;
    let cliqueForaHandler = null; // fecha o nó ativo ao clicar fora dele
    let camadaNosDOM = null;      // camada de nós HTML sobreposta ao canvas (hover/click/tooltip)
    let noAtivoEl = null;         // nó atualmente clicado/expandido

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
            background: #e4e9ee;
            padding: 40px 24px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .ak-final-card {
            width: 100%;
            max-width: 380px;
            background: #ffffff;
            border-radius: 20px;
            padding: 36px 32px;
            box-shadow: 0 14px 36px rgba(0,0,0,0.12);
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

        /* ---- Descrição/subtexto do filósofo no card final ----
           Propriedades isoladas e explícitas para fácil ajuste futuro. */
        .ak-final-subtexto {
            margin: 0;
            font-family: 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #576574;
            line-height: 1.5;
            text-align: justify;
            text-indent: 20px;
        }

        .ak-arvore-camada {
            position: absolute;
            inset: 0;
            pointer-events: none;
        }

        .ak-arvore-no {
            position: absolute;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 10px 18px;
            overflow: hidden;
            overflow-wrap: break-word;
            background: #ffffff;
            border: 1.8px solid #3b4650;
            border-radius: 8px;
            color: #1b2733;
            font-family: 'Segoe UI', Roboto, sans-serif;
            font-weight: bold;
            font-size: 13px;
            line-height: 1.25;
            cursor: pointer;
            user-select: none;
            pointer-events: auto;
            transform: translate(-50%, -50%);
            transition: transform 0.2s ease, box-shadow 0.2s ease, width 0.2s ease, height 0.2s ease;
        }

        .ak-arvore-no.no-caminho {
            border-color: #e74c3c;
            background: #fdecea;
        }

        .ak-arvore-no.no-atual {
            background: #e74c3c;
            border-color: #e74c3c;
            color: #ffffff;
        }

        .ak-arvore-no.no-folha {
            flex-direction: column;
            gap: 6px;
            font-size: 12px;
        }

        .no-folha-img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #cfd6dc;
            pointer-events: none;
        }

        .no-folha-nome {
            pointer-events: none;
        }

        .ak-arvore-no.no-folha:hover,
        .ak-arvore-no.no-folha.ativo {
            transform: translate(-50%, -50%) scale(1.08);
            box-shadow: 0 10px 24px rgba(0,0,0,0.24);
            z-index: 30;
        }

        .no-texto-completo {
            display: none;
        }

        .ak-arvore-no.no-pergunta:hover .no-texto-curto,
        .ak-arvore-no.no-pergunta.ativo .no-texto-curto {
            display: none;
        }

        .ak-arvore-no.no-pergunta:hover .no-texto-completo,
        .ak-arvore-no.no-pergunta.ativo .no-texto-completo {
            display: block;
        }

        .ak-arvore-no.no-pergunta:hover,
        .ak-arvore-no.no-pergunta.ativo {
            width: 280px !important;
            height: auto !important;
            min-height: 70px !important;
            white-space: normal;
            box-shadow: 0 10px 24px rgba(0,0,0,0.28);
            z-index: 30;
        }
    `;
    document.head.appendChild(estilo);

    // ---------- ÁRVORE DE DECISÃO ESTÁTICA (construída uma única vez a partir do fluxo) ----------
    // A raiz visual é "p1": a etapa "inicio" é apenas um convite a começar e não entra na árvore
    function construirArvore(id) {
        const etapa = fluxo[id];
        const no = {
            id: id,
            texto: etapa.final ? etapa.texto.toUpperCase() : (etapa.curto || etapa.texto),
            textoCompleto: etapa.texto, // pergunta/resposta completa, usada no tooltip e no hover/clique
            imagem: etapa.imagem,
            final: !!etapa.final,
            filhos: []
        };

        (etapa.botoes || []).forEach(btn => {
            no.filhos.push({ label: btn.label, node: construirArvore(btn.destino) });
        });

        return no;
    }

    const arvore = construirArvore("p1");

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

        camadaNosDOM = document.createElement('div');
        camadaNosDOM.className = "ak-arvore-camada";
        direita.appendChild(camadaNosDOM);

        painel.appendChild(esquerda);
        painel.appendChild(direita);

        // Aguarda o grid aplicar as dimensões reais antes de medir o container
        requestAnimationFrame(renderizarArvore);

        resizeHandler = () => renderizarArvore();
        window.addEventListener('resize', resizeHandler);

        // Clique fora de qualquer nó (ou em outro nó) recolhe o nó atualmente ativo
        cliqueForaHandler = (e) => {
            if (noAtivoEl && !e.target.closest('.ak-arvore-no')) {
                noAtivoEl.classList.remove('ativo');
                noAtivoEl = null;
            }
        };
        document.addEventListener('click', cliqueForaHandler);
    }

    // ---------- CARD DO FILÓSOFO (LADO ESQUERDO) ----------
    function construirCard(etapa) {
        const esquerda = document.createElement('div');
        esquerda.className = "ak-final-esquerda";

        const card = document.createElement('div');
        card.className = "ak-final-card";

        if (etapa.imagem) {
            const img = document.createElement('img');
            img.src = etapa.imagem;
            img.className = "ak-final-img";
            card.appendChild(img);
        }

        const nome = document.createElement('h1');
        nome.className = "ak-final-nome";
        nome.innerText = etapa.texto;
        card.appendChild(nome);

        card.appendChild(criarSecao("Principais Ideias", etapa.subtexto));

        const boxBotoes = document.createElement('div');
        boxBotoes.style.cssText = "display: flex; flex-direction: column; gap: 10px; margin-top: 10px; width: 100%;";

        const btnReiniciar = document.createElement('button');
        btnReiniciar.innerText = "Jogar Novamente";
        estilizarBotaoPrimario(btnReiniciar, "#95a5a6");
        btnReiniciar.onclick = () => mostrarEtapa("inicio");
        boxBotoes.appendChild(btnReiniciar);

        card.appendChild(boxBotoes);

        if (etapa.anterior) {
            const bVoltar = document.createElement('button');
            bVoltar.innerText = "← Voltar pergunta";
            estilizarLinkVoltar(bVoltar);
            bVoltar.onclick = () => mostrarEtapa(etapa.anterior);
            card.appendChild(bVoltar);
        }

        esquerda.appendChild(card);
        return esquerda;
    }

    function criarSecao(titulo, texto) {
        const secao = document.createElement('div');
        secao.className = "ak-final-secao";

        const h3 = document.createElement('h3');
        h3.innerText = titulo;
        secao.appendChild(h3);

        const p = document.createElement('p');
        p.className = "ak-final-subtexto";
        p.innerText = texto;
        secao.appendChild(p);

        return secao;
    }

    // ---------- ÁRVORE COMPLETA (LADO DIREITO) ----------
    // O canvas desenha apenas as conexões (linhas + rótulos Sim/Não); os nós são
    // elementos HTML reais sobrepostos, o que viabiliza hover/click/tooltip nativos
    const FONTE_ROTULO_RAMO = 'bold 10px "Segoe UI", sans-serif';
    const ALTURA_NO_PERGUNTA = 60;
    const ALTURA_NO_FOLHA = 88;
    const DESLOCAMENTO_ZIGUEZAGUE = 14; // alterna a altura das folhas para evitar sobreposição

    function renderizarArvore() {
        const container = treeCanvas.parentElement;
        if (!container || !camadaNosDOM) return;

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

        const margem = 32;
        const espacoPorFolha = (largura - margem * 2) / Math.max(1, estadoLayout.totalFolhas);

        // Folhas ficam compactas lado a lado; perguntas ganham bem mais largura,
        // já que cada uma ocupa o espaço de pelo menos duas folhas abaixo dela
        const larguraFolha = Math.min(Math.max(espacoPorFolha * 0.92, 100), 170);
        const larguraPergunta = Math.min(Math.max(espacoPorFolha * 1.7, 190), 260);

        // Reserva, só no fim da árvore, a folga extra que as folhas (maiores e em
        // ziguezague) precisam, e estica o restante quase até o limite do painel
        const fatorAproveitamentoVertical = 0.92;
        const folgaFolha = (ALTURA_NO_FOLHA - ALTURA_NO_PERGUNTA) / 2 + DESLOCAMENTO_ZIGUEZAGUE;
        const alturaDisponivel = altura - margem * 2 - folgaFolha;
        const espacoPorNivel = (alturaDisponivel / Math.max(1, estadoLayout.profundidadeMaxima)) * fatorAproveitamentoVertical;
        const alturaTotalArvore = estadoLayout.profundidadeMaxima * espacoPorNivel;
        const margemYCentralizada = margem + Math.max(0, (alturaDisponivel - alturaTotalArvore) / 2);

        posicionarNos(arvore, margem, margemYCentralizada, espacoPorFolha, espacoPorNivel);

        // 2ª passagem: conexões no canvas, nós HTML por cima — caminho da sessão em vermelho
        const caminhoSet = new Set(historico);
        desenharConexoes(arvore, caminhoSet);

        noAtivoEl = null;
        camadaNosDOM.innerHTML = "";
        construirNosDOM(arvore, caminhoSet, larguraPergunta, larguraFolha, camadaNosDOM);
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
        no.altura = no.final ? ALTURA_NO_FOLHA : ALTURA_NO_PERGUNTA;

        // Ziguezague: folhas em slots pares sobem, ímpares descem — evita que
        // caixas vizinhas, agora maiores por causa da imagem, se encostem
        if (no.final) {
            no.py += no.slot % 2 === 0 ? -DESLOCAMENTO_ZIGUEZAGUE : DESLOCAMENTO_ZIGUEZAGUE;
        }

        no.filhos.forEach(f => posicionarNos(f.node, margemX, margemY, espacoPorFolha, espacoPorNivel));
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
            treeCtx.strokeStyle = noCaminho ? "#e74c3c" : "#8a97a3";
            treeCtx.lineWidth = noCaminho ? 3 : 1.5;
            treeCtx.stroke();

            desenharRotuloRamo(f.label, (no.px + filho.px) / 2, meioY, noCaminho);

            desenharConexoes(filho, caminhoSet);
        });
    }

    function desenharRotuloRamo(rotulo, x, y, destacado) {
        treeCtx.font = FONTE_ROTULO_RAMO;
        const largura = treeCtx.measureText(rotulo).width + 12;
        const altura = 16;

        desenharRetanguloArredondado(x - largura / 2, y - altura / 2, largura, altura, 5);
        treeCtx.fillStyle = destacado ? "#e74c3c" : "#eef1f4";
        treeCtx.fill();
        treeCtx.strokeStyle = destacado ? "#e74c3c" : "#8a97a3";
        treeCtx.lineWidth = 1;
        treeCtx.stroke();

        treeCtx.fillStyle = destacado ? "#ffffff" : "#3b4650";
        treeCtx.textAlign = "center";
        treeCtx.textBaseline = "middle";
        treeCtx.fillText(rotulo, x, y + 0.5);
    }

    function construirNosDOM(no, caminhoSet, larguraPergunta, larguraFolha, camada) {
        const destacado = caminhoSet.has(no.id);
        const ehAtual = no.id === etapaAtualId;
        const largura = no.final ? larguraFolha : larguraPergunta;

        const div = document.createElement('div');
        div.className = "ak-arvore-no" + (no.final ? " no-folha" : " no-pergunta") +
            (destacado ? " no-caminho" : "") + (ehAtual ? " no-atual" : "");
        div.style.left = no.px + "px";
        div.style.top = no.py + "px";
        div.style.width = largura + "px";
        div.style.height = no.altura + "px";
        div.title = no.textoCompleto; // tooltip nativo com a pergunta/resposta completa

        if (no.final) {
            const img = document.createElement('img');
            img.className = "no-folha-img";
            img.src = no.imagem;
            img.alt = no.textoCompleto;
            const nome = document.createElement('span');
            nome.className = "no-folha-nome";
            nome.textContent = no.texto;
            div.appendChild(img);
            div.appendChild(nome);
        } else {
            // Dois textos sobrepostos: o CSS alterna qual deles aparece no
            // hover/clique, trocando o rótulo curto pela pergunta completa
            const curto = document.createElement('span');
            curto.className = "no-texto-curto";
            curto.textContent = no.texto;
            const completo = document.createElement('span');
            completo.className = "no-texto-completo";
            completo.textContent = no.textoCompleto;
            div.appendChild(curto);
            div.appendChild(completo);
        }

        // O mesmo listener de clique é anexado a todo nó, seja pergunta ou folha —
        // o espaçamento vertical calculado em renderizarArvore garante que um nó
        // nunca fique coberto pelos seus filhos, o que impediria o clique
        div.addEventListener('click', (e) => {
            e.stopPropagation();
            if (noAtivoEl && noAtivoEl !== div) {
                noAtivoEl.classList.remove('ativo');
            }
            div.classList.toggle('ativo');
            noAtivoEl = div.classList.contains('ativo') ? div : null;
        });

        camada.appendChild(div);
        no.filhos.forEach(f => construirNosDOM(f.node, caminhoSet, larguraPergunta, larguraFolha, camada));
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

    // ---------- LIMPEZA DA ÁRVORE (evita vazamento de memória e sobreposição gráfica) ----------
    function limparArvore() {
        if (resizeHandler) {
            window.removeEventListener('resize', resizeHandler);
            resizeHandler = null;
        }
        if (cliqueForaHandler) {
            document.removeEventListener('click', cliqueForaHandler);
            cliqueForaHandler = null;
        }
        noAtivoEl = null;
        camadaNosDOM = null; // a camada em si é descartada junto com o painel (innerHTML = "")

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
