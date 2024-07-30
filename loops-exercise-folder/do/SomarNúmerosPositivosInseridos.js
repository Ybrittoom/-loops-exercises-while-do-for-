let total = 0;
let number;
do {
  number = parseFloat(prompt("Digite um número positivo (ou negativo para terminar):"));
  if (number >= 0) {
    total += number;
  }
} while (number >= 0);
console.log("Soma total:", total);
