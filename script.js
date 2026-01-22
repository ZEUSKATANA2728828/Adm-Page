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
  const tbody = document.getElementById("ranking");
  tbody.innerHTML = "";

  jogadores.forEach((j, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}º</td>
        <td>${j.nome}</td>
        <td>${j.pontos}</td>
      </tr>
    `;
  });
}
