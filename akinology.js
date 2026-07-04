(function() {
    const URL_BASE = "https://raw.githubusercontent.com/bianca-zavadisk/akinology/main/images/";

    const fluxo = {
        "inicio": {
            texto: "Escolha um filósofo...",
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
            subtexto: "Defende que as ideias têm origem na experiência e que são provenientes das impressões internas e externas. Argumenta que as ideias são cópias de impressões, e que a associação entre elas ocorre por semelhança, contiguidade e causa e efeito. Propõe uma separação entre relações de ideias e questões de fato. As relações de ideias não implicam existência real, enquanto as questões de fato sim, e correspondem a uma descrição do estado das coisas. Os juízos em questão de fato baseiam-se em causa e efeito. No entanto, o processo de obtenção de crenças causais são dadas pelo princípio do hábito, não envolvendo processos racionais.",
            imagem: URL_BASE + "hume.png",
            final: true,
            anterior: "p4_final"
        },
        "res_hobbes": {
            texto: "Thomas Hobbes",
            subtexto: "Fundamenta sua filosofia em um empirismo radical e materialista, defendendo que a realidade consiste puramente de matéria em movimento e que todo conhecimento deriva da experiência sensorial. Rejeita a existência de ideias inatas, propondo que a mente humana funciona como um mecanismo que processa os estímulos do mundo exterior. Acredita que a estrutura do pensamento é lógica e mecânica: compreender a realidade equivale a entender as relações de causa e efeito que geram todos os fenômenos.",
            imagem: URL_BASE + "hobbes.png",
            final: true,
            anterior: "p5_final"
        },
        "res_locke": {
            texto: "John Locke",
            subtexto: "Critica os processos mentais de Descartes formulados sem a elaboração do funcionamento, buscando dar uma estrutura à mente. Para tanto, acredita que todas as nossas ideias têm origem na experiência, criticando as ideias inatas de descartes, defendendo que a mente é uma tábula rasa. Argumenta que a partir de ideias simples, nosso entendimento pode produzir ideias complexas. Em relação à origem das nossas ideias, defende que temos ideias advindas da sensação, e ideias advindas da reflexão. Em discordância com Hume, Locke acredita que as ideias são tudo aquilo que está no entendimento.",
            imagem: URL_BASE + "locke.png",
            final: true,
            anterior: "p5_final"
        },
        "res_kant": {
            texto: "Immanuel Kant",
            subtexto: "Fundamenta sua filosofia em uma 'Revolução Copernicana' na epistemologia, defendendo que o objeto de estudo se molda à estrutura da mente humana para ser compreendido, e não o contrário. Supera a histórica disputa entre o empirismo e o racionalismo ao propor que o conhecimento dependa da articulação de ambos para se desenvolver. Estrutura a realidade em duas dimensões distintas: o fenômeno, que representa o mundo como ele se mostra para nós, e o númeno, que constitui o mundo como ele é em si mesmo, independentemente de qualquer observação.",
            imagem: URL_BASE + "kant.png",
            final: true,
            anterior: "p3_a"
        },
        "res_platao": {
            texto: "Platão",
            subtexto: "Platão, cuja filosofia moldou profundamente a tradição ocidental, defendia que o verdadeiro conhecimento não provém apenas dos sentidos, mas da contemplação das realidades inteligíveis. Por meio da teoria da reminiscência, sustentava que conhecer é, em certo sentido, recordar verdades já contempladas pela alma; assim, pode ser considerado um precursor do inatismo. Discípulo de Sócrates, utilizava a dialética como caminho para a verdade, frequentemente recorrendo também a mitos e imagens simbólicas.",
            imagem: URL_BASE + "platao.png",
            final: true,
            anterior: "p4_a"
        },
        "res_descartes": {
            texto: "René Descartes",
            subtexto: "René Descartes destaca-se pela dúvida hiperbólica, a partir da qual questiona a confiabilidade dos sentidos e da razão para conhecer a realidade. Mais do que isso, Descartes ressalta a possibilidade de que tudo que se conhece através da razão pode ser manipulado por uma divindade maligna. Ora, mas o próprio ato de questionar pressupõe o questionador. Portanto, a única certeza que é sustentada inicialmente é o “Penso, logo existo”. Além disso, o pensador racionalista busca reabilitar a razão através da prova da existência de Deus, que, por ser sumamente infinito e perfeito, não permitiria a manipulação de algum ente maligno.",
            imagem: URL_BASE + "descartes.png",
            final: true,
            anterior: "p4_a"
        },
        "res_positivistas": {
            texto: "Positivistas Lógicos",
            subtexto: "Têm como objetivo reformular a filosofia usando empirismo e lógica formal. Acreditam que a ciência pode ser reduzida/traduzida para experiências concretas. São fortes defensores de que uma proposição só pode ter sentido se puder ser verificada. Criticam áreas como metafísica, teologia e ética, por conta da falta de verificabilidade. Sua corrente de pensamento surgiu no círculo de Viena, reunião de filósofos que tinha como objetivo discutir sobre ciência, filosofia e epistemologia.",
            imagem: URL_BASE + "positivistas.png",
            final: true,
            anterior: "p2_b"
        },
        "res_popper": {
            texto: "Karl Popper",
            subtexto: "Pode-se afirmar que Karl Popper estabeleceu os pilares da filosofia da ciência contemporânea. Através do falsificacionismo, ele concebeu a ciência como um sistema de conjecturas audaciosas e falseáveis, formuladas para explicar os fenômenos observados mantendo, intrinsecamente, a vulnerabilidade à refutação. Sob essa ótica, o papel da comunidade científica não é o de confirmar essas hipóteses, mas submetê-las aos testes mais severos na tentativa de derrubá-las. É justamente esse ciclo incessante de formulação e refutação que impulsiona o progresso e garante o rigor do conhecimento científico.",
            imagem: URL_BASE + "popper.png",
            final: true,
            anterior: "p3_b"
        },
        "res_kuhn": {
            texto: "Thomas Kuhn",
            subtexto: "Critica a visão tradicional de que a ciência progride de forma linear e cumulativa, propondo que o avanço científico se baseia em paradigmas, compreendidos como conjuntos de teorias compartilhadas por uma comunidade científica. Divide o desenvolvimento do conhecimento em duas fases principais: a ciência normal, na qual a investigação ocorre de maneira natural sem questionar as bases do modelo vigente; e os períodos de crise, que emergem quando o paradigma atual se torna insuficiente para explicar novos fenômenos observados. Culmina nas revoluções científicas: momentos de ruptura nos quais o modelo antigo é abandonado e substituído por um novo, estabelecendo uma relação de incomensurabilidade entre eles por enxergarem o mundo de formas totalmente distintas.",
            imagem: URL_BASE + "kuhn.png",
            final: true,
            anterior: "p4_b"
        },
        "res_lakatos": {
            texto: "Imre Lakatos",
            subtexto: "Propõe como meios da ciência os programas de pesquisa, constituídos por núcleos irredutíveis, que não podem ser falseados (heurística negativa), e um cinturão protetor de hipóteses, que pode ser modificado. Quanto ao progresso da ciência, Lakatos defende que programas progressivos são aqueles que mudanças no cinturão trazem novas descobertas. Já os programas degenerativos são os que as mudanças apenas corrigem problemas na pesquisa. Certas anomalias na pesquisa podem ser consertadas modificando o cinturão protetor, não levando necessariamente à uma crise, como defendido por Kuhn.",
            imagem: URL_BASE + "lakatos.png",
            final: true,
            anterior: "p5_b"
        },
        "res_feyerabend": {
            texto: "Paul Feyerabend",
            subtexto: "Fundamenta sua filosofia na inexistência de um método científico, por exemplo o critério da falseabilidade, universal a ser usado na pesquisa. Acredita que grande parte da ciência é feita a partir do desenvolvimento de teorias que entram em conflito com regras bem estabelecidas. Defende o “Anything goes”: a única característica em comum entre todas as inovações da ciência é a quebra de paradigmas e uso de estratégias não convencionais.",
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
    let cardEl = null;            // card do filósofo (lado esquerdo), atualizado ao clicar em folhas da árvore

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

        /* Tela inicial: caixa 25% maior que uma pergunta comum, para caber o
           catálogo de filósofos sem sobra excessiva de espaço em branco */
        #akinology-container.modo-inicio {
            width: 800px;
            max-width: 92vw;
            padding: 50px;
        }

        #akinology-container.start-container {
            width: 900px;
            max-width: 95vw;
        }

        /* ---- Catálogo de filósofos da tela inicial ----
           Mesmo padrão visual (borda, cores, fontes) dos nós-folha da árvore
           final, com todas as medidas 25% maiores. */
        .ak-intro-filosofos {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin: 30px 0 50px 0;
            width: 100%;
        }

        .ak-intro-card {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 15px 10px;
            width: calc((100% - (5 * 15px)) / 6); 
            min-width: 110px;
            
            background: var(--glass-bg, rgba(255, 255, 255, 0.05));
            border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.1));
            border-radius: 16px;
            color: var(--text-light, #e0dced);
            font-family: 'Nunito', sans-serif;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .ak-intro-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.1);
            border-color: var(--magic-gold, #f3c623);
            box-shadow: 0 8px 25px rgba(243, 198, 35, 0.2);
        }

        .ak-intro-card-img {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid rgba(255, 255, 255, 0.2);
            transition: border-color 0.3s ease;
        }

        .ak-intro-card:hover .ak-intro-card-img {
            border-color: var(--magic-gold, #f3c623);
        }

        .ak-intro-card-nome {
            font-size: 15px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }

        #akinology-container.start-container .btn-start {
            padding: 10px 30px;
            font-size: 1.1rem;
            border-width: 1px;
            animation: none;
        }

        #akinology-container.modo-final {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: grid;
            grid-template-columns: 38% 62%;
            background: transparent;
        }

        .ak-final-esquerda {
            background: transparent;
            padding: 40px 10px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .ak-final-card {
            width: 100%;
            max-width: 500px;
            background: var(--glass-bg, rgba(255, 255, 255, 0.05)); /* Alterado: fundo de vidro místico */
            border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.1)); /* Alterado: bordinha de vidro */
            border-radius: 20px;
            padding: 36px 24px;
            box-shadow: 0 14px 36px rgba(0,0,0,0.12); /* Mantido: mesma sombra */
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
            background-color: transparent; /* Alterado: remove o amarelo da área da árvore */
        }

        .ak-final-img {
            width: 140px;
            height: 140px;
            object-fit: cover;
            border-radius: 50%;
            border: 5px solid var(--magic-gold, #f3c623); /* Alterado: mesma espessura, mas agora em dourado */
            margin-bottom: 16px;
            box-shadow: 0 0 15px var(--magic-gold-glow, rgba(243, 198, 35, 0.3)); /* Adicionado: leve brilho */
        }

        .ak-final-nome {
            margin: 0 0 20px 0;
            font-family: 'Cinzel', serif; /* Alterado: fonte do título */
            font-size: 28px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: var(--magic-gold, #f3c623); /* Alterado: texto dourado */
            text-shadow: 0 0 10px var(--magic-gold-glow, rgba(243, 198, 35, 0.4)); /* Adicionado: leve brilho */
        }

        .ak-final-secao {
            width: 100%;
            text-align: left;
            margin-bottom: 20px;
        }

        .ak-final-secao h3 {
            margin: 0 0 8px 0;
            font-family: 'Cinzel', serif; /* Alterado: fonte dos tópicos */
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--text-light, #e0dced); /* Alterado: texto claro */
            border-bottom: 2px solid var(--glass-border, rgba(255, 255, 255, 0.1)); /* Alterado: linha divisória suave */
            padding-bottom: 4px;
        }

        /* ---- Descrição/subtexto do filósofo no card final ---- */
        .ak-final-subtexto {
            margin: 0;
            font-family: 'Nunito', sans-serif; /* Alterado: fonte do sistema */
            font-size: 16px;
            font-weight: 400;
            color: var(--text-light, #e0dced); /* Alterado: de escuro para claro para legibilidade */
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

            background: var(--glass-bg, rgba(255, 255, 255, 0.05));
            border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.1));
            border-radius: 8px;
            color: var(--text-light, #e0dced);

            font-family: 'Nunito', sans-serif;
            font-weight: bold;
            font-size: 14px;
            line-height: 1.25;
            cursor: pointer;
            user-select: none;
            pointer-events: auto;
            transform: translate(-50%, -50%);
            transition: transform 0.2s ease, box-shadow 0.2s ease, width 0.2s ease, height 0.2s ease;
        }

        .ak-arvore-no.no-caminho {
            border-color: var(--magic-gold, #f3c623);
            background: rgba(243, 198, 35, 0.08);
        }

        .ak-arvore-no.no-atual {
            background: rgba(243, 198, 35, 0.15);
            border-color: var(--magic-gold, #f3c623);
            color: var(--magic-gold);
            box-shadow: 0 0 15px var(--magic-gold-glow);
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
            background: rgba(20, 15, 30, 0.95);
        }

        .ak-arvore-no.no-pergunta.no-caminho:hover,
        .ak-arvore-no.no-pergunta.no-caminho.ativo {
            background: rgba(50, 42, 15, 0.95); /* Base escura quase opaca (para esconder as linhas), mas tingida de amarelo mágico */
            border-color: var(--magic-gold, #f3c623);
        }

        body:has(#akinology-container.modo-final) #btn-voltar {
            display: none !important;
        }

        body:has(#akinology-container.modo-final) #tela-inicial {
            display: none !important;
        }

        body:has(#akinology-container.modo-final) {
            background: radial-gradient(circle at 75% center, var(--bg-light) 0%, var(--bg-mid) 40%, var(--bg-deep) 100%);
        }

        /* 2. Estilo místico roxo para o botão "Jogar novamente" */
        .btn-reiniciar-roxo {
            padding: 12px 24px;
            cursor: pointer;
            border-radius: 12px;
            font-family: 'Cinzel', serif;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s ease;
            background: rgba(142, 68, 173, 0.15); /* Roxo translúcido */
            border: 1px solid #9b59b6; /* Borda roxa definida */
            color: #e8dff5; /* Lilás clarinho para o texto */
            box-shadow: 0 0 12px rgba(155, 89, 182, 0.3); /* Brilho suave */
            margin-top: 10px;
        }

        /* Animação e brilho ao passar o mouse */
        .btn-reiniciar-roxo:hover {
            background: rgba(142, 68, 173, 0.4);
            border-color: #d291bc;
            color: #ffffff;
            box-shadow: 0 0 20px rgba(155, 89, 182, 0.7);
            transform: translateY(-2px);
        }

        @media (hover: none) {
            
            /* 1. Tira o pulo e o brilho dos cards na tela inicial */
            .ak-intro-card:hover {
                transform: none !important;
                background: var(--glass-bg, rgba(255, 255, 255, 0.05)) !important;
                border-color: var(--glass-border, rgba(255, 255, 255, 0.1)) !important;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
            }
            .ak-intro-card:hover .ak-intro-card-img {
                border-color: rgba(255, 255, 255, 0.2) !important;
            }

            /* 2. Tira o pulo e o brilho extra do botão roxo de reiniciar */
            .btn-reiniciar-roxo:hover {
                background: rgba(142, 68, 173, 0.15) !important;
                border-color: #9b59b6 !important;
                color: #e8dff5 !important;
                box-shadow: 0 0 12px rgba(155, 89, 182, 0.3) !important;
                transform: none !important;
            }

            /* 3. Tira a expansão indesejada da árvore no touch (mantém só quando tiver a classe .ativo do clique) */
            .ak-arvore-no:hover:not(.ativo) {
                transform: translate(-50%, -50%) !important;
                box-shadow: none !important;
                background: var(--glass-bg, rgba(255, 255, 255, 0.05)) !important;
                z-index: 1 !important;
            }
            .ak-arvore-no.no-caminho:hover:not(.ativo) {
                background: rgba(243, 198, 35, 0.08) !important; 
                border-color: var(--magic-gold, #f3c623) !important;
            }
            .ak-arvore-no.no-pergunta:hover:not(.ativo) {
                width: auto !important;
                min-height: auto !important;
                white-space: nowrap !important;
            }
            .ak-arvore-no.no-pergunta:hover:not(.ativo) .no-texto-completo {
                display: none !important;
            }
            .ak-arvore-no.no-pergunta:hover:not(.ativo) .no-texto-curto {
                display: block !important;
            }
        }

        /* =========================================================
           RESPONSIVIDADE DO LAYOUT (Tablets e Celulares)
           ========================================================= */

        /* Telas médias (Tablets e celulares deitados - Até 850px) */
        @media screen and (max-width: 850px) {
            
            /* --- TELA INICIAL --- */
            /* Muda a grade de filósofos para 3 colunas em vez de tentar amontoar */
            .ak-intro-filosofos { gap: 12px !important; }
            .ak-intro-card { 
                width: calc((100% - 24px) / 3) !important; 
                min-width: 90px !important; 
            }

            /* --- TELA FINAL (Empilhamento: Texto no topo, Árvore embaixo) --- */
            /* Solta o contêiner principal para permitir rolagem de página nativa */
            #akinology-container.modo-final {
                display: flex !important;
                flex-direction: column !important;
                position: relative !important; 
                inset: auto !important;
                width: 100% !important;
                min-height: 100vh !important;
                overflow-x: hidden !important;
                overflow-y: auto !important;
            }

            /* Área do Card de Texto (Fica 100% da largura, no topo) */
            .ak-final-esquerda {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                position: relative !important;
                padding: 30px 20px !important;
                box-sizing: border-box !important;
                border-right: none !important;
            }
            
            .ak-final-card {
                max-width: 100% !important; 
            }

            /* Área da Árvore Mística (Fica abaixo do texto) */
            .ak-final-direita {
                width: 100% !important;
                max-width: 100% !important;
                height: 600px !important; /* Altura fixa garantida para caber o Canvas */
                position: relative !important;
                border-left: none !important;
                border-top: 1px solid var(--glass-border) !important; /* Divisória agora é horizontal */
                overflow-x: auto !important; /* Mágica: Permite arrastar o canvas para os lados */
                overflow-y: hidden !important;
                box-sizing: border-box !important;
                display: flex !important;
                align-items: flex-start !important;
                justify-content: flex-start !important;
            }

            /* Blinda o Canvas para não tentar encolher (Senão a árvore deforma) */
            #treeCanvas {
                max-width: none !important; 
                width: 700px !important; /* Mantém a largura original do desenho */
                height: 600px !important;
                display: block !important;
                margin: 0 auto !important;
            }
            
            /* Libera a rolagem natural da página no body durante a tela de resultado */
            body:has(#akinology-container.modo-final) {
                overflow-y: auto !important; 
            }
        }

        /* Telas pequenas (Celulares em pé - Até 500px) */
        @media screen and (max-width: 500px) {
            
            /* --- TELA INICIAL --- */
            /* Para telas bem pequenas, 2 filósofos por linha fica mais confortável */
            .ak-intro-card { width: calc((100% - 12px) / 2) !important; }
            #akinology-container.modo-inicio { padding: 30px 15px !important; }

            /* --- TELA FINAL --- */
            /* Ajustes estéticos menores para não comer espaço da tela */
            .ak-final-nome { font-size: 24px !important; margin-bottom: 15px !important; }
            .ak-final-img { width: 110px !important; height: 110px !important; }
            
            /* O botão de "Jogar Novamente" ocupa a largura inteira para facilitar o toque */
            .btn-reiniciar-roxo { 
                width: 100% !important; 
                margin-top: 20px !important; 
                padding: 15px 0 !important;
            }
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
    function estilizarBotaoPrimario(botao, cor, escala = 1) {
        botao.style.cssText = `
            padding: ${12 * escala}px;
            cursor: pointer;
            border: none;
            border-radius: ${12 * escala}px;
            background: ${cor || '#3498db'};
            color: white;
            font-weight: bold;
            font-size: ${16 * escala}px;
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
        const ehInicio = etapaAtualId === "inicio";
        
        // Aplica as classes principais dos containers baseadas no CSS mágico
        painel.className = ehInicio ? "start-container" : "question-container";

        const titulo = document.createElement('h2');
        titulo.innerText = etapa.texto;
        // Aplica a classe da fonte Cinzel dourada se for o início, ou texto base para perguntas
        titulo.className = ehInicio ? "mystic-title" : "question-text";
        painel.appendChild(titulo);

        if (etapa.subtexto) {
            const sub = document.createElement('p');
            sub.innerText = etapa.subtexto;
            // Removemos as cores fixas antigas para herdar o var(--text-light) do body
            sub.style.cssText = `margin-top: 5px; font-size: ${ehInicio ? '1.2rem' : '1rem'}; opacity: 0.8;`;
            painel.appendChild(sub);
        }

        if (ehInicio) {
            painel.appendChild(criarGridFilosofos());
        }

        const boxBotoes = document.createElement('div');
        // Usa a classe do grid flexível que criamos no CSS
        boxBotoes.className = "answers-grid";
        // Um pequeno ajuste de margem caso não seja o início
        if (!ehInicio) boxBotoes.style.marginTop = "20px";

        (etapa.botoes || []).forEach(btnInfo => {
            const b = document.createElement('button');
            b.innerText = btnInfo.label;
            // Define o botão pulsante para o início, e o botão de vidro para as respostas
            b.className = ehInicio ? "btn-start" : "btn-answer";
            b.onclick = () => mostrarEtapa(btnInfo.destino);
            boxBotoes.appendChild(b);
        });

        painel.appendChild(boxBotoes);

        if (etapa.anterior) {
            const bVoltar = document.createElement('button');
            bVoltar.innerText = "Voltar pergunta";
            bVoltar.className = "btn-mystic-back";
            bVoltar.onclick = () => mostrarEtapa(etapa.anterior);
            painel.appendChild(bVoltar);
        }
    }

    // ---------- CATÁLOGO DE FILÓSOFOS (TELA INICIAL) ----------
    function criarGridFilosofos() {
        const grid = document.createElement('div');
        grid.className = "ak-intro-filosofos";

        Object.values(fluxo)
            .filter(etapaFluxo => etapaFluxo.final)
            .forEach(filosofo => {
                const card = document.createElement('div');
                card.className = "ak-intro-card";

                const img = document.createElement('img');
                img.className = "ak-intro-card-img";
                img.src = filosofo.imagem;
                img.alt = filosofo.texto;
                card.appendChild(img);

                const nome = document.createElement('span');
                nome.className = "ak-intro-card-nome";
                nome.textContent = filosofo.texto;
                card.appendChild(nome);

                grid.appendChild(card);
            });

        return grid;
    }

    function renderizarResultado(etapa) {
        painel.className = "modo-final";

        const esquerda = construirCard(etapa);
        const direita = document.createElement('div');
        direita.className = "ak-final-direita";
        treeCanvas.style.display = "block";
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

        cardEl = document.createElement('div');
        cardEl.className = "ak-final-card";
        preencherCard(cardEl, etapa);

        esquerda.appendChild(cardEl);
        return esquerda;
    }

    // Monta o conteúdo do card a partir de uma etapa final. Reutilizada tanto na
    // primeira renderização quanto na troca dinâmica de filósofo pela árvore.
    function preencherCard(card, etapa) {
        card.innerHTML = "";

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

        card.appendChild(criarSecao("", etapa.subtexto));

        const boxBotoes = document.createElement('div');
        boxBotoes.style.cssText = "display: flex; flex-direction: column; gap: 10px; margin-top: 10px; width: 100%;";

        const btnReiniciar = document.createElement('button');
        btnReiniciar.innerText = "Jogar Novamente";
        btnReiniciar.className = "btn-reiniciar-roxo";
        btnReiniciar.onclick = () => mostrarEtapa("inicio");
        boxBotoes.appendChild(btnReiniciar);

        card.appendChild(boxBotoes);

        if (etapa.anterior) {
            const bVoltar = document.createElement('button');
            bVoltar.innerText = "Voltar pergunta";
            bVoltar.className = "btn-mystic-back";
            // estilizarLinkVoltar(bVoltar);
            bVoltar.onclick = () => mostrarEtapa(etapa.anterior);
            card.appendChild(bVoltar);
        }
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
            treeCtx.strokeStyle = noCaminho ? "#f3c623" : "rgba(255, 255, 255, 0.15)";
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
        
        // 1. FUNDO SÓLIDO: Pinta de roxo escuro (cor do seu bg) para "esconder" a linha de trás
        treeCtx.fillStyle = "#1a1025"; 
        treeCtx.fill();

        // 2. EFEITO DE VIDRO: Aplica o brilho dourado ou translúcido por cima
        treeCtx.fillStyle = destacado ? "rgba(243, 198, 35, 0.15)" : "rgba(255, 255, 255, 0.05)";
        treeCtx.fill();

        // 3. BORDA
        treeCtx.strokeStyle = destacado ? "#f3c623" : "rgba(255, 255, 255, 0.2)";
        treeCtx.lineWidth = 1;
        treeCtx.stroke();

        // 4. TEXTO
        treeCtx.fillStyle = destacado ? "#f3c623" : "#e0dced";
        treeCtx.textAlign = "center";
        treeCtx.textBaseline = "middle";
        treeCtx.fillText(rotulo, x, y + 0.5);
    }

    // ---------- SELEÇÃO DIRETA DE UM FILÓSOFO PELA ÁRVORE ----------
    // Reconstrói a rota "inicio" → ... → id subindo pelos atributos `anterior`
    // do fluxo, na ordem inversa (folha até a raiz) e depois invertendo o resultado.
    function calcularCaminhoAte(id) {
        const caminho = [];
        let atual = id;

        while (atual) {
            caminho.unshift(atual);
            atual = fluxo[atual].anterior;
        }

        return caminho;
    }

    // Clique numa folha da árvore: troca o filósofo do card esquerdo e recalcula
    // o histórico da sessão para que o caminho em vermelho aponte para ele.
    function selecionarFilosofoNaArvore(id) {
        const etapa = fluxo[id];
        if (!etapa || !cardEl) return;

        etapaAtualId = id;
        historico = calcularCaminhoAte(id);

        preencherCard(cardEl, etapa);
        renderizarArvore();
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

        // O espaçamento vertical calculado em renderizarArvore garante que um nó
        // nunca fique coberto pelos seus filhos, o que impediria o clique
        div.addEventListener('click', (e) => {
            e.stopPropagation();

            if (no.final) {
                // Folha (filósofo): troca o contexto inteiro da tela em vez de
                // apenas expandir o nó — o próprio renderizarArvore() já refaz
                // a camada de nós, então não há necessidade de alternar 'ativo'
                selecionarFilosofoNaArvore(no.id);
                return;
            }

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
        cardEl = null;
        camadaNosDOM = null; // a camada em si é descartada junto com o painel (innerHTML = "")

        treeCtx.clearRect(0, 0, treeCanvas.width, treeCanvas.height);

        // Escondido fora do modo-final: sem isso, o retângulo branco do canvas
        // fica visível atrás do painel de pergunta
        treeCanvas.style.display = "none";
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
