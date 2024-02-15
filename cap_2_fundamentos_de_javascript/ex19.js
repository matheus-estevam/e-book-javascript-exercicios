function dentroDoIntervalo(numero, limiteInferior, limiteSuperior) {
  if (numero >= limiteInferior && numero <= limiteSuperior) {
    console.log(numero, "Está dentro do intervalo");
  } else {
    console.log(numero, "Não esta dentro do intervalo");
  }
}

dentroDoIntervalo(5, 1, 10);
dentroDoIntervalo(15, 1, 10);
