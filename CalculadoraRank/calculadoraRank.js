// Exemplo de vitórias e derrotas de dois jogadores para testar
const jogadores = [
    { vitorias: 5, derrotas: 2 },
    { vitorias: 90, derrotas: 5}
  
  ];
  
  for (const jogador of jogadores) {
    const { vitorias, derrotas } = jogador;
    const resultado = calcularRankeadas(vitorias, derrotas);
    console.log(resultado);
  }
  
  // Função para calcular o saldo e classificar o nível do jogador
  function calcularRankeadas(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";
  
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
  
  //Mensagem do console:
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
  }
  