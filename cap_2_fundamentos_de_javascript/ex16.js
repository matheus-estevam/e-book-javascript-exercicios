function maiorNumero(a, b, c) {
  if (a > b && a > c) {
    console.log(a, " A é o maior Número");
  } else if (b > a && b > c) {
    console.log(b, " B é o maior Número");
  } else {
    console.log(c, " C é o maior Número");
  }
}

maiorNumero(1, 2, 3);
maiorNumero(5, 3, 4);
maiorNumero(7, 8, 7);
