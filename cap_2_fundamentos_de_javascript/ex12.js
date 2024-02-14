function situacao(mediaFinal) {
  if (mediaFinal >= 7) {
    console.log("Aprovado");
  } else if (mediaFinal >= 5 && mediaFinal < 7) {
    console.log("recuperação");
  } else {
    console.log("reprovado");
  }
}

situacao(6);
