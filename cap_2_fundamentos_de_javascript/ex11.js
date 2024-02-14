function podeVotar(idade) {
  if (idade >= 18 && idade < 70) {
    console.log("voto é obrigatório");
  } else if ((idade >= 16 && idade < 18) || idade >= 70) {
    console.log("voto facultativo");
  } else {
    console.log("Menores de 16 anos não votam");
  }
}

podeVotar(18);
