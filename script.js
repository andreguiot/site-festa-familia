document.addEventListener('DOMContentLoaded', () => {

    // --- DADOS E MAPEAMENTOS ---
    const rawData = {
        "2": {
                "matutino": {
                        "date": "25/09 (QUI) - TURNO MATUTINO",
                        "events": [
                                {
                                        "time": "8h00",
                                        "edFisica": "",
                                        "maker": "",
                                        "mEspiritual": "121, 122M",
                                        "exprCult": ""
                                },
                                {
                                        "time": "8h20",
                                        "edFisica": "122M",
                                        "maker": "121M",
                                        "mEspiritual": "",
                                        "exprCult": ""
                                },
                                {
                                        "time": "8h40",
                                        "edFisica": "121M",
                                        "maker": "122M",
                                        "mEspiritual": "",
                                        "exprCult": ""
                                },
                                {
                                        "time": "9h00",
                                        "edFisica": "",
                                        "maker": "",
                                        "mEspiritual": "",
                                        "exprCult": "121 e 122M"
                                }
                        ]
                },
                "vespertino": {
                        "date": "25/09 (QUI) - TURNO VESPERTINO",
                        "events": [
                                {
                                        "time": "16h20",
                                        "edFisica": "",
                                        "maker": "125T",
                                        "mEspiritual": "123, 124T",
                                        "exprCult": "126T"
                                },
                                {
                                        "time": "16h40",
                                        "edFisica": "123T",
                                        "maker": "124T",
                                        "mEspiritual": "125, 126T",
                                        "exprCult": ""
                                },
                                {
                                        "time": "17h00",
                                        "edFisica": "125T",
                                        "maker": "126T",
                                        "mEspiritual": "",
                                        "exprCult": "123, 124T"
                                },
                                {
                                        "time": "17h20",
                                        "edFisica": "124 e 126T",
                                        "maker": "123T",
                                        "mEspiritual": "",
                                        "exprCult": "125T"
                                }
                        ]
                }
        },
        "3": {
                "matutino": {
                        "date": "23/09 (TER) - TURNO MATUTINO",
                        "events": [
                                {
                                        "time": "8h00",
                                        "edFisica": "",
                                        "maker": "",
                                        "mEspiritual": "131, 132M",
                                        "exprCult": ""
                                },
                                {
                                        "time": "8h20",
                                        "edFisica": "132M",
                                        "maker": "131M",
                                        "mEspiritual": "",
                                        "exprCult": ""
                                },
                                {
                                        "time": "8h40",
                                        "edFisica": "131M",
                                        "maker": "132M",
                                        "mEspiritual": "",
                                        "exprCult": ""
                                },
                                {
                                        "time": "9h00",
                                        "edFisica": "",
                                        "maker": "",
                                        "mEspiritual": "",
                                        "exprCult": "131 e 132M"
                                }
                        ]
                },
                "vespertino": {
                        "date": "23/09 (TER) - TURNO VESPERTINO",
                        "events": [
                                {
                                        "time": "16h20",
                                        "edFisica": "136",
                                        "maker": "135, 137T",
                                        "mEspiritual": "133, 134T",
                                        "exprCult": ""
                                },
                                {
                                        "time": "16h40",
                                        "edFisica": "134",
                                        "maker": "133",
                                        "mEspiritual": "135, 136T, 137T",
                                        "exprCult": ""
                                },
                                {
                                        "time": "17h00",
                                        "edFisica": "133",
                                        "maker": "134",
                                        "mEspiritual": "",
                                        "exprCult": "135, 136T, 137T"
                                },
                                {
                                        "time": "17h20",
                                        "edFisica": "135, 137T",
                                        "maker": "136",
                                        "mEspiritual": "",
                                        "exprCult": "133, 134T"
                                }
                        ]
                }
        },
        "4": {
                "matutino": {
                        "date": "24/09 (QUA) - TURNO MATUTINO",
                        "events": [
                                {
                                        "time": "8h00",
                                        "edFisica": "",
                                        "maker": "",
                                        "mEspiritual": "141 e 142M",
                                        "exprCult": ""
                                },
                                {
                                        "time": "8h20",
                                        "edFisica": "141M",
                                        "maker": "142M",
                                        "mEspiritual": "",
                                        "exprCult": ""
                                },
                                {
                                        "time": "8h40",
                                        "edFisica": "142M",
                                        "maker": "141M",
                                        "mEspiritual": "",
                                        "exprCult": ""
                                },
                                {
                                        "time": "9h00",
                                        "edFisica": "",
                                        "maker": "",
                                        "mEspiritual": "",
                                        "exprCult": "141 e 142M"
                                },
                                {
                                        "time": "8h00",
                                        "edFisica": "",
                                        "maker": "",
                                        "mEspiritual": "",
                                        "exprCult": ""
                                },
                                {
                                        "time": "8h20",
                                        "edFisica": "",
                                        "maker": "",
                                        "mEspiritual": "",
                                        "exprCult": ""
                                },
                                {
                                        "time": "8h40",
                                        "edFisica": "",
                                        "maker": "",
                                        "mEspiritual": "",
                                        "exprCult": ""
                                },
                                {
                                        "time": "9h00",
                                        "edFisica": "",
                                        "maker": "",
                                        "mEspiritual": "",
                                        "exprCult": ""
                                }
                        ]
                },
                "vespertino": {
                        "date": "24/09 (QUA) - TURNO VESPERTINO",
                        "events": [
                                {
                                        "time": "16h20",
                                        "edFisica": "146",
                                        "maker": "145",
                                        "mEspiritual": "143, 144T",
                                        "exprCult": ""
                                },
                                {
                                        "time": "16h40",
                                        "edFisica": "143",
                                        "maker": "144",
                                        "mEspiritual": "145, 146T",
                                        "exprCult": ""
                                },
                                {
                                        "time": "17h00",
                                        "edFisica": "145",
                                        "maker": "146",
                                        "mEspiritual": "",
                                        "exprCult": "143, 144T"
                                },
                                {
                                        "time": "17h20",
                                        "edFisica": "144",
                                        "maker": "143",
                                        "mEspiritual": "",
                                        "exprCult": "145, 146T"
                                },
                                {
                                        "time": "16h20",
                                        "edFisica": "",
                                        "maker": "",
                                        "mEspiritual": "147 e 148T",
                                        "exprCult": ""
                                },
                                {
                                        "time": "16h40",
                                        "edFisica": "147T",
                                        "maker": "148T",
                                        "mEspiritual": "",
                                        "exprCult": ""
                                },
                                {
                                        "time": "17h00",
                                        "edFisica": "148T",
                                        "maker": "147T",
                                        "mEspiritual": "",
                                        "exprCult": ""
                                },
                                {
                                        "time": "17h20",
                                        "edFisica": "",
                                        "maker": "",
                                        "mEspiritual": "",
                                        "exprCult": "147 e 148T"
                                }
                        ]
                }
        },
        "5": {
                "matutino": {
                        "date": "22/09 (SEG) - TURNO MATUTINO",
                        "events": [
                                {
                                        "time": "8h00",
                                        "edFisica": "",
                                        "maker": "",
                                        "mEspiritual": "151, 152, 153M",
                                        "exprCult": ""
                                },
                                {
                                        "time": "8h20",
                                        "edFisica": "151M",
                                        "maker": "152M",
                                        "mEspiritual": "",
                                        "exprCult": "153M"
                                },
                                {
                                        "time": "8h40",
                                        "edFisica": "152 e 153M",
                                        "maker": "151M",
                                        "mEspiritual": "",
                                        "exprCult": ""
                                },
                                {
                                        "time": "9h00",
                                        "edFisica": "",
                                        "maker": "153M",
                                        "mEspiritual": "",
                                        "exprCult": "152 e 151M"
                                }
                        ]
                },
                "vespertino": {
                        "date": "22/09 (SEG) - TURNO VESPERTINO",
                        "events": [
                                {
                                        "time": "16h20",
                                        "edFisica": "157",
                                        "maker": "156",
                                        "mEspiritual": "154, 155T",
                                        "exprCult": ""
                                },
                                {
                                        "time": "16h40",
                                        "edFisica": "155",
                                        "maker": "154",
                                        "mEspiritual": "156, 157T",
                                        "exprCult": ""
                                },
                                {
                                        "time": "17h00",
                                        "edFisica": "156",
                                        "maker": "157",
                                        "mEspiritual": "",
                                        "exprCult": "154, 155T"
                                },
                                {
                                        "time": "17h20",
                                        "edFisica": "154",
                                        "maker": "155",
                                        "mEspiritual": "",
                                        "exprCult": "156, 157T"
                                }
                        ]
                }
        }


};
    const activityMap={edFisica:{name:'Exercite-se',location:'Quadra',teacherKey:'aquecimento'},maker:{name:'Lab Maker',location:'',teacherKey:'maker'},mEspiritual:{name:'Doses de Fé',location:'Teatro',teacherKey:'mEspiritual'},exprCult:{name:'Apres.Musical',location:'Sl. 223',teacherKey:'exprCult'}};
    
    const teacherData = {
        aquecimento: { prof: ['Laísa Telles', 'Raphael Souza'] },
        maker: {
            matutino: { prof: ['André Matta', 'André Guiot'] },
            vespertino: { prof: ['André Matta', 'Christian Martins'] }
        },
        mEspiritual: { prof: ['Pastoral'] },
        exprCult: { prof: ['Amanda Mateus'] }
    };

    let cronogramas = [];

    // --- PROCESSAMENTO DOS DADOS ---
    function processRawData() {
        cronogramas = [];
        for (const year in rawData) {
            for (const turn in rawData[year]) {
                const turnData = rawData[year][turn];
                turnData.events.forEach(event => {
                    for (const activityKey in activityMap) {
                        const rawTurmas = event[activityKey];
                        if (rawTurmas) {
                            const turmas = rawTurmas.replace(/ e /g, ',').replace(/\s/g, '').split(',');
                            const turnSuffix = turn === 'matutino' ? 'M' : 'T';
                            turmas.forEach(turma => {
                                if (!turma) return;
                                let fullTurmaName = turma.endsWith('M') || turma.endsWith('T') ? turma : turma + turnSuffix;

                                const teacherKey = activityMap[activityKey].teacherKey;
                                let professoresParaAtividade = teacherData[teacherKey];

                        if (professoresParaAtividade.matutino && professoresParaAtividade.vespertino) {
                                professoresParaAtividade = professoresParaAtividade[turn];
                        }
                                cronogramas.push({
                                    ano: year,
                                    turma: fullTurmaName,
                                    horario: event.time,
                                    atividade: activityMap[activityKey].name,
                                    local: activityMap[activityKey].location,
                                    professores: professoresParaAtividade,
                                    data: turnData.date
                                });
                            });
                        }
                    }
                });
            }
        }
    }

    // --- RENDER HELPERS ---
    const yearsContainer = document.getElementById('years-container');
    const totalTurmasEl = document.getElementById('total-turmas');

    function renderYears(){
        yearsContainer.innerHTML = '';
        const yearsMap = {};
        cronogramas.forEach(r => {
            const y = String(r.ano);
            const t = String(r.turma).trim();
            if(!yearsMap[y]) yearsMap[y] = new Set();
            if(t) yearsMap[y].add(t);
        });

        const yearsList = Object.keys(yearsMap).sort((a,b)=>Number(a)-Number(b));
        let total = 0;
        
        yearsList.forEach(ano => {
            const groupCard = document.createElement('div'); groupCard.className='year-card';
            const h = document.createElement('h3'); h.textContent = ano + 'º Ano do Ensino Fundamental'; groupCard.appendChild(h);
            const turmasWrap = document.createElement('div'); turmasWrap.className='turmas';
            
            const turmaSet = Array.from(yearsMap[ano]).sort();
            
            turmaSet.forEach(t => {
                total++;
                const b = document.createElement('button'); b.className='turma-btn'; b.textContent = 'Turma ' + t;
                b.dataset.ano=ano; b.dataset.turma=String(t);
                b.title = 'Abrir cronograma da turma ' + t;
                b.addEventListener('click', () => selectTurma(ano, String(t), b));
                turmasWrap.appendChild(b);
            });

            groupCard.appendChild(turmasWrap);
            yearsContainer.appendChild(groupCard);
        });
        totalTurmasEl.textContent = total;
    }

    let activeBtn = null;
    function selectTurma(ano, turma, btn){
        if(activeBtn) activeBtn.classList.remove('active');
        btn.classList.add('active'); activeBtn = btn;
        
        document.getElementById('year-selected').textContent = ano + 'º';
        document.getElementById('class-selected').textContent = turma;
        document.getElementById('main-title').textContent = `Cronograma — Turma ${turma}`;
        
        const schedule = cronogramas.find(r => r.turma === turma);
        document.getElementById('main-subtitle').textContent = schedule ? schedule.data : 'Visualização do cronograma';

        renderSchedule(ano, turma);
    }

    function renderSchedule(ano, turma){
        const table = document.getElementById('schedule-table');
        const body = document.getElementById('schedule-body');
        const placeholder = document.getElementById('placeholder');
        body.innerHTML='';
        
        const items = cronogramas.filter(r => String(r.ano) === String(ano) && String(r.turma) === String(turma)).sort((a,b)=> a.horario.localeCompare(b.horario));
        
        if(items.length === 0){
            table.style.display='none'; placeholder.style.display='flex';
            placeholder.innerHTML = `<div style="font-size:18px">Nenhum horário cadastrado.</div>`;
            return;
        }
        
        placeholder.style.display='none'; table.style.display='table';
        items.forEach(it => {
            const tr = document.createElement('tr');
            let teacherHtml = '';
            if (it.professores) {
                teacherHtml = `
                    <div class="teacher-info">
                        <strong>Prof.:</strong> ${it.professores.prof.join(', ')}
                    </div>
                `;
            }
        const localInfo = it.local ? ` (${it.local})` : '';
            tr.innerHTML = `<td>${it.horario}</td><td><strong>${it.atividade}</strong>${localInfo}${teacherHtml}</td>`;
            body.appendChild(tr);
        });
    }

    // --- INICIALIZAÇÃO ---
    (function init(){
        processRawData();
        renderYears();
    })();
});
