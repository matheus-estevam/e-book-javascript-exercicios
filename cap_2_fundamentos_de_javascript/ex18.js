function podeDirigir(idade) {
  const verificarIdade = idade >= 18 ? "Pode Dirigir" : "Não Pode Dirigir";

  console.log(verificarIdade);
}

podeDirigir(15);
podeDirigir(18);
podeDirigir(36);
