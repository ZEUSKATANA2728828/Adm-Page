let jogadores = [
  { nome: "Otto", pontos: 0 },
  { nome: "Vinicius", pontos: 0 },
  { nome: "Emanuel", pontos: 0 },
  { nome: "Antheus", pontos: 0 },
  { nome: "Otavio", pontos: 0 },
  { nome: "Victor", pontos: 0 },
  { nome: "Carlos", pontos: 0 },
  { nome: "Sofia", pontos: 0 }
];

function logar() {
  const l = document.getElementById("login").value;
  const s = document.getElementById("senha").value;

  if (l === "adm123" && s === "adm456") {
    document.getElementById("loginTela").style.display = "none";
    document.getElementById("painel").style.display = "block";
    atualizarRanking();
  } else {
    alert("Login ou senha incorretos!");
  }
}

function registrar() {
  const nome = document.getElementById("jogador").value;
  const pontos = parseInt(document.getElementById("missao").value);

  let player = jogadores.find(j => j.nome === nome);
  player.pontos += pontos;

  atualizarRanking();
}

function atualizarRanking() {
  jogadores.sort((a, b) => b.pontos - a.pontos);
  const div = document.getElementById("ranking");
  div.innerHTML = "";

  jogadores.forEach((j, i) => {
    div.innerHTML += `
      <div class="rank-item">
        <span>${i + 1}º - ${j.nome}</span>
        <span>${j.pontos} pts</span>
      </div>
    `;
  });
}

function baixarRanking() {
  let texto = "Ranking Echo Squad\n\n";
  jogadores.forEach((j, i) => {
    texto += `${i + 1}º - ${j.nome}: ${j.pontos} pontos\n`;
  });

  const blob = new Blob([texto], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "ranking-echo-squad.txt";
  link.click();
}
