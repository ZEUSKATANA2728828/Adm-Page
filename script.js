const ADM_LOGIN = "adm123";
const ADM_SENHA = "adm456";

let players = JSON.parse(localStorage.getItem("players")) || [
  {nome:"Otto", kills:0, pontos:0},
  {nome:"Vinicius", kills:0, pontos:0},
  {nome:"Emanuel", kills:0, pontos:0},
  {nome:"Antheus", kills:0, pontos:0},
  {nome:"Otavio", kills:0, pontos:0},
  {nome:"Victor", kills:0, pontos:0},
  {nome:"Carlos", kills:0, pontos:0},
  {nome:"Sofia", kills:0, pontos:0}
];

let logs = JSON.parse(localStorage.getItem("logs")) || [];

function abrirLogin(){
  loginBox.style.display = loginBox.style.display==="none"?"block":"none";
}

function salvarTudo(){
  localStorage.setItem("players", JSON.stringify(players));
  localStorage.setItem("logs", JSON.stringify(logs));
  alert("Dados salvos com sucesso!");
  carregarRankingPublico();
}

function logar(){
  if(login.value===ADM_LOGIN && senha.value===ADM_SENHA){
    loginBox.style.display="none";
    painelADM.style.display="block";
    carregarSelects();
    mostrarLogs();
  } else {
    alert("Acesso negado!");
  }
}

function carregarSelects(){
  [playerKill, playerPontos].forEach(sel=>{
    sel.innerHTML="";
    players.forEach(p=>{
      sel.innerHTML+=`<option>${p.nome}</option>`;
    });
  });
}

function addKill(){
  let p = players.find(j=>j.nome===playerKill.value);
  p.kills++;
  logs.push(`⚔ +1 kill para ${p.nome}`);
}

function addPontos(){
  let p = players.find(j=>j.nome===playerPontos.value);
  let val = parseInt(qtdPontos.value);
  if(!val) return;
  p.pontos += val;
  logs.push(`🏆 +${val} pontos para ${p.nome}`);
}

function mostrarLogs(){
  logBox.innerHTML = logs.slice(-10).reverse().join("<br>");
}

function carregarRankingPublico(){
  let div = document.getElementById("rankingPublico");
  players.sort((a,b)=> b.pontos - a.pontos);
  div.innerHTML="";
  players.forEach((p,i)=>{
    div.innerHTML+=`
      <div class="rank-item">
        <span>${i+1}º ${p.nome}</span>
        <span>${p.kills}⚔️ | ${p.pontos}🏆</span>
      </div>
    `;
  });
}

function baixarDados(){
  let txt = JSON.stringify(players,null,2);
  let blob = new Blob([txt],{type:"text/plain"});
  let a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="echo-squad-dados.txt";
  a.click();
}

function abrirAba(id){
  document.querySelectorAll(".aba").forEach(a=>a.style.display="none");
  document.getElementById(id).style.display="block";
}
