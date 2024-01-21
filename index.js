function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel }
}


const vitoriasJogador = 85;
const derrotasJogador = 15;

const { saldoVitorias, nivelJogador } = calcularNivel(vitoriasJogador, derrotasJogador);

console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivelJogador}`);