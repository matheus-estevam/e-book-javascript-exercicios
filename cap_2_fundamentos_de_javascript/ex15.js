function verificarPalindromo(palavra) {
  const palavraInvertida = palavra.split("").reverse().join("");

  if (palavra === palavraInvertida) {
    console.log("É um Palíndromo");
  } else {
    console.log("não é um palíndromo");
  }
}
verificarPalindromo("arara");
verificarPalindromo("matheus");
verificarPalindromo("ovo");
