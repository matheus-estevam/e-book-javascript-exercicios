function anoBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 == 0) {
    console.log("É bissexto");
  } else {
    console.log("Não é bissexto");
  }
}

anoBissexto(2000); // Imprime: 2000 é um ano bissexto
anoBissexto(2001); // Imprime: 2001 não é um ano bissexto
