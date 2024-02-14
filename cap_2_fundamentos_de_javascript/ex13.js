function IMC(peso, altura) {
  const imc = peso / altura ** 2;

  if (imc < 18.5) {
    console.log("abaixo do peso");
  } else if (imc >= 18.5 && imc < 25) {
    console.log("normal");
  } else if (imc >= 25 && imc < 30) {
    console.log("sobrepeso");
  } else {
    console.log("obesidade");
  }
}

IMC(60, 1.7);
IMC(80, 1.7);
IMC(90, 1.7);
