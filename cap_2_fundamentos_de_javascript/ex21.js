function verificarEstacao(mes) {
  if (mes < 3 || mes === 12) {
    console.log("Verão");
  } else if (mes < 6) {
    console.log("Outono");
  } else if (mes < 9) {
    console.log("Inverno");
  } else {
    console.log("primavera");
  }
}

verificarEstacao(12); // Imprime: Verão
verificarEstacao(4); // Imprime: Outono
verificarEstacao(7); // Imprime: Inverno
verificarEstacao(10); // Imprime: Primavera
