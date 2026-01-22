let jogadores = [
  { nome: "Otto", kills: 0 },
  { nome: "Vinicius", kills: 0 },
  { nome: "Emanuel", kills: 0 },
  { nome: "Antheus", kills: 0 },
  { nome: "Otavio", kills: 0 },
  { nome: "Victor", kills: 0 },
  { nome: "Carlos", kills: 0 },
  { nome: "Sofia", kills: 0 }
];

function atualizarRanking() {
  jogadores.sort((a, b) => b.kills - a.kills);
  const tbody = document.querySelector("#ranking tbody");
  tbody.innerHTML = "";

  jogadores.forEach((j, i) => {
    let tr = `<tr>
      <td>${i + 1}º</td>
      <td>${j.nome}</td>
      <td>${j.kills}</td>
    </tr>`;
    tbody.innerHTML += tr;
  });
}

function login() {
  const l = document.getElementById("login").value;
  const s = document.getElementById("senha").value;

  if (l === "adm123" && s === "adm456") {
    document.getElementById("painel").style.display = "block";
    carregarPainel();
  } else {
    alert("Login ou senha incorretos!");
  }
}

function carregarPainel() {
  const div = document.getElementById("editar");
  div.innerHTML = "";

  jogadores.forEach((j, i) => {
    div.innerHTML += `
      <p>${j.nome}:
      <input type="number" value="${j.kills}" onchange="jogadores[${i}].kills=this.value; atualizarRanking();"></p>
    `;
  });
}

function exportar() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jogadores, null, 2));
  const dl = document.createElement("a");
  dl.setAttribute("href", dataStr);
  dl.setAttribute("download", "ranking.json");
  dl.click();
}

atualizarRanking();
