function determinarDiasNoMes(mes) {
  if (
    mes === 1 ||
    mes === 3 ||
    mes === 5 ||
    mes === 7 ||
    mes === 8 ||
    mes === 10 ||
    mes === 12
  ) {
    console.log("Mês com 31 dias");
  } else if (mes === 4 || mes === 6 || mes === 11 || mes === 9) {
    console.log("Mês com 30 dias");
  } else {
    console.log("Mês com 28 ou 29 dias");
  }
}

determinarDiasNoMes(2); // Imprime: 28 ou 29 dias
determinarDiasNoMes(4); // Imprime: 30 dias
determinarDiasNoMes(1); // Imprime: 31 dias
