for (let num = 2; num <= 100; num++) {
  let isPrime = true;
  for (let div = 2; div < num; div++) {
    if (num % div == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}
