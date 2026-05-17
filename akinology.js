(function() {
    const URL_BASE = "https://raw.githubusercontent.com/bianca-zavadisk/akinology/main/images/";

    const fluxo1 = {
        "inicio": {
            texto: "Pense em um filósofo...",
            subtexto: "",
            botoes: [{ label: "Começar", destino: "p1", cor: "#2ecc71" }]
        },
        "p1": {
            texto: "Sabe mais matemática que ele?",
            botoes: [
                { label: "Sim", destino: "p2_b" },
                { label: "Não", destino: "p2_a" }
            ],
            anterior: "inicio"
        },

        // --- RAMO A ---
        "p2_a": {
            texto: "Ele é contemporâneo?",
            botoes: [
                { label: "Sim", destino: "p4_final" },
                { label: "Não", destino: "p3_a" }
            ],
            anterior: "p1"
        },
        "p3_a": {
            texto: "Racionalista?",
            botoes: [
                { label: "Sim", destino: "res_6" },
                { label: "Não", destino: "res_8" }
            ],
            anterior: "p2_a"
        },
        // --- RAMO B ---
        "p2_b": {
            texto: "Chuta",
            botoes: [
                { label: "1", destino: "p3_b" },
                { label: "2", destino: "p3_c" }
            ],
            anterior: "p1"
        },
        "p3_b": {
            texto: "Chuta",
            botoes: [
                { label: "1", destino: "res_4" },
                { label: "2", destino: "res_5" }
            ],
            anterior: "p2_b"
        },
        "p3_c": {
            texto: "Chuta",
            botoes: [
                { label: "1", destino: "res_7" },
                { label: "2", destino: "res_2" }
            ],
            anterior: "p2_b"
        },
        "p4_final": {
            texto: "Tricampeão da libertadores?",
            botoes: [
                { label: "Sim", destino: "res_1" },
                { label: "Não", destino: "res_3" }
            ],
            anterior: "p2_a"
        },

        // --- RESULTADOS ---
        "res_1": { texto: "Giorgian De Arrascaeta", imagem: URL_BASE + "arrasca.png", final: true, anterior: "p4_final" },
        "res_2": { texto: "Platão", imagem: URL_BASE + "platao.png", final: true, anterior: "p3_c" },
        "res_3": { texto: "LM", imagem: URL_BASE + "ml.jpg", final: true, anterior: "p4_final" },
        "res_4": { texto: "Aristoteles", imagem: URL_BASE + "aristoteles.png", final: true, anterior: "p3_b" },
        "res_5": { texto: "Mises", imagem: URL_BASE + "mises.png", final: true, anterior: "p3_b" },
        "res_6": { texto: "Newton", imagem: URL_BASE + "newton.png", final: true, anterior: "p3_a" },
        "res_7": { texto: "Decartes", imagem: URL_BASE + "decartes.png", final: true, anterior: "p3_c" },
        "res_8": { texto: "Bacon", imagem: URL_BASE + "bacon.png", final: true, anterior: "p3_a" }
    };

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

    // 2. INTERFACE ESTILIZADA
    const painel = document.createElement('div');
    painel.id = "akinology-container";
    painel.style.cssText = `
        position: fixed;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        padding: 40px;
        border-radius: 24px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        text-align: center;
        z-index: 9999;
        width: 400px;
        font-family: 'Segoe UI', Roboto, sans-serif;
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(painel);

    function mostrarEtapa(id) {
        const etapa = fluxo[id];
        if (!etapa) return;

        // Efeito de fade out
        painel.style.opacity = 0;

        setTimeout(() => {
            painel.innerHTML = "";

            // Conteúdo textual
            const titulo = document.createElement('h2');
            titulo.innerText = etapa.texto;
            titulo.style.margin = "0 0 10px 0";
            titulo.style.color = "#2c3e50";
            painel.appendChild(titulo);

            if (etapa.subtexto) {
                const sub = document.createElement('p');
                sub.innerText = etapa.subtexto;
                sub.style.color = "#7f8c8d";
                sub.style.cssText = "font-size: .8rem;"
                painel.appendChild(sub);
            }

            // Imagem de resultado
            if (etapa.final && etapa.imagem) {
                const img = document.createElement('img');
                img.src = etapa.imagem;
                img.style.cssText = "width: 150px; height: 150px; object-fit: cover; border-radius: 50%; margin: 20px 0; border: 5px solid #3498db;";
                painel.appendChild(img);
            }

            // Botões de decisão
            const boxBotoes = document.createElement('div');
            boxBotoes.style.cssText = "display: flex; flex-direction: column; gap: 10px; margin-top: 25px;";
            
            if (etapa.botoes) {
                etapa.botoes.forEach(btnInfo => {
                    const b = document.createElement('button');
                    b.innerText = btnInfo.label;
                    b.style.cssText = `
                        padding: 12px;
                        cursor: pointer;
                        border: none;
                        border-radius: 12px;
                        background: ${btnInfo.cor || '#3498db'};
                        color: white;
                        font-weight: bold;
                        font-size: 16px;
                        transition: transform 0.2s;
                    `;
                    b.onmouseover = () => b.style.transform = "scale(1.02)";
                    b.onmouseout = () => b.style.transform = "scale(1)";
                    b.onclick = () => mostrarEtapa(btnInfo.destino);
                    boxBotoes.appendChild(b);
                });
            }

            if (etapa.final) {
                const btnReiniciar = document.createElement('button');
                btnReiniciar.innerText = "Jogar Novamente";
                btnReiniciar.style.cssText = "margin-top: 15px; background: #95a5a6; color: white; border: none; padding: 10px; border-radius: 8px; cursor: pointer;";
                btnReiniciar.onclick = () => mostrarEtapa("inicio");
                boxBotoes.appendChild(btnReiniciar);
            }

            painel.appendChild(boxBotoes);

            // Botão Voltar
            if (etapa.anterior) {
                const bVoltar = document.createElement('button');
                bVoltar.innerText = "← Voltar pergunta";
                bVoltar.style.cssText = "margin-top: 20px; background: none; border: none; color: #bdc3c7; cursor: pointer; font-size: 13px;";
                bVoltar.onclick = () => mostrarEtapa(etapa.anterior);
                painel.appendChild(bVoltar);
            }

            // Efeito de fade in
            painel.style.opacity = 1;
        }, 300);
    }

    // Inicialização
    mostrarEtapa("inicio");

    // Limpeza automática ao sair para o menu
    const monitorar = setInterval(() => {
        if (!document.getElementById('script-dinamico')) {
            painel.remove();
            clearInterval(monitorar);
        }
    }, 100);
})();