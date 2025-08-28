document.addEventListener('DOMContentLoaded', () => {

    // --- DADOS E MAPEAMENTOS (Versão simplificada para Etapa 2) ---
    const rawData = {
        "2": {
            "matutino": {
                "events": [
                    { "time": "8h00", "mEspiritual": "121, 122M" },
                    { "time": "8h20", "edFisica": "122M", "maker": "121M" }
                ]
            },
            "vespertino": {
                "events": [
                    { "time": "16h20", "maker": "125T", "mEspiritual": "123, 124T" },
                    { "time": "16h40", "edFisica": "123T", "maker": "124T" }
                ]
            }
        },
        "3": {
            "matutino": {
                "events": [
                    { "time": "8h00", "mEspiritual": "131, 132M" },
                    { "time": "8h20", "edFisica": "132M", "maker": "131M" }
                ]
            }
        },
    };
    
    // --- PROCESSAMENTO DOS DADOS ---
    let turmasPorAno = {};

    function processRawData() {
        turmasPorAno = {};
        for (const year in rawData) {
            if (!turmasPorAno[year]) {
                turmasPorAno[year] = new Set();
            }
            for (const turn in rawData[year]) {
                const turnData = rawData[year][turn];
                const turnSuffix = turn === 'matutino' ? 'M' : 'T';
                
                turnData.events.forEach(event => {
                    for (const activityKey in event) {
                        if (activityKey === 'time') continue;
                        
                        const rawTurmas = event[activityKey];
                        if (rawTurmas) {
                            const turmas = rawTurmas.replace(/ e /g, ',').replace(/\s/g, '').split(',');
                            turmas.forEach(turma => {
                                if (!turma) return;
                                let fullTurmaName = turma.endsWith('M') || turma.endsWith('T') ? turma : turma + turnSuffix;
                                turmasPorAno[year].add(fullTurmaName);
                            });
                        }
                    }
                });
            }
        }
    }

    // --- RENDERIZAÇÃO DA SIDEBAR ---
    const yearsContainer = document.getElementById('years-container');
    const totalTurmasEl = document.getElementById('total-turmas');

    function renderYears(){
        yearsContainer.innerHTML = '';
        const yearsList = Object.keys(turmasPorAno).sort((a,b) => Number(a) - Number(b));
        let total = 0;
        
        yearsList.forEach(ano => {
            const groupCard = document.createElement('div'); 
            groupCard.className='year-card';
            
            const h = document.createElement('h3'); 
            h.textContent = ano + 'º Ano do Ensino Fundamental'; 
            groupCard.appendChild(h);
            
            const turmasWrap = document.createElement('div'); 
            turmasWrap.className='turmas';
            
            const turmaSet = Array.from(turmasPorAno[ano]).sort();
            
            turmaSet.forEach(t => {
                total++;
                const b = document.createElement('button'); 
                b.className='turma-btn'; 
                b.textContent = 'Turma ' + t;
                b.dataset.ano = ano; 
                b.dataset.turma = String(t);
                b.title = 'Abrir cronograma da turma ' + t;
                // A função de clique será adicionada na próxima etapa
                b.addEventListener('click', () => {
                    console.log(`Turma selecionada: ${ano}º ano, turma ${t}`);
                    alert("A visualização do cronograma será implementada na próxima etapa!");
                });
                turmasWrap.appendChild(b);
            });

            groupCard.appendChild(turmasWrap);
            yearsContainer.appendChild(groupCard);
        });
        totalTurmasEl.textContent = total;
    }

    // --- INICIALIZAÇÃO ---
    (function init(){
        processRawData();
        renderYears();
    })();
});
