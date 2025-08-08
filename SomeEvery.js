//   Método  .some() verifica se pelo menos um 1 tem do array
//   Passa em um teste(ou seja, retorna true)

const numeros = [2, 5, 8, 1, 11];

const temNumeroMaiorDoQue10 = numeros.some((numero) => {
  if (numero > 10) {
    return true;
  } else {
    return false;
  }
});

// Método .ever
const todosOsNumeroSãoMaiorQue10 = numeros.every((numero) => {
  if (numero > 10) {
    return true;
  } else {
    return false;
  }
});

console.log(temNumeroMaiorDoQue10); // True
console.log(todosOsNumeroSãoMaiorQue10); // False
