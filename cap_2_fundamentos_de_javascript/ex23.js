function verificarCorSemafaro(cor) {
  if (cor === "verde") {
    console.log("siga em frente");
  } else if (cor === "amarelo") {
    console.log("atenção");
  } else if (cor === "vermelho") {
    console.log("pare");
  } else {
    console.log("não tem essa cor no semafáro");
  }
}

verificarCorSemafaro("amarelo");
verificarCorSemafaro("verde");
verificarCorSemafaro("vermelho");
verificarCorSemafaro("azul");
