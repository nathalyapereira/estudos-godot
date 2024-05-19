let jogadores = [
  { name: "Ana", vitorias: 12, derrotas: 5 },
  { name: "John", vitorias: 19, derrotas: 1 },
  { name: "Lux", vitorias: 50, derrotas: 10 },
  { name: "Gabi", vitorias: 55, derrotas: 3 },
  { name: "Davi", vitorias: 99, derrotas: 5 },
  { name: "Isac", vitorias: 111, derrotas: 10 },
  { name: "Sara", vitorias: 101, derrotas: 1 },
];

let mensagem = "";

const CalculadoraPartidasRankeadas = (vitorias, derrotas) => {
  const saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    nivel = "Lendário";
  } else if (saldoVitorias > 100) {
    nivel = "Imortal";
  }

  return (mensagem = `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
};
gi
for (let i = 0; i < jogadores.length; i++) {
  console.log(
    CalculadoraPartidasRankeadas(jogadores[i].vitorias, jogadores[i].derrotas)
  );
}
