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

// Método .every() verifica se todos os item do array
// caso passe em um teste Retornan True
const todosOsNumeroSãoMaiorQue10 = numeros.every((numero) => {
  if (numero > 10) {
    return true;
  } else {
    return false;
  }
});

const NumerosPar = numeros.some((numero) => {
  if (numero % 2 === 0) {
    return true;
  } else {
    false;
  }
}, []);

const pessoas = [
  {
    nome: "Ragnar Lothbrok",
    idade: 30,
  },
  {
    nome: "Harvey Specter",
    idade: 41,
  },
  {
    nome: "John Doe",
    idade: 12,
  },
];

const maiorDeIdade = pessoas.some((pessoa) => pessoa.idade > 18);

// console.log(temNumeroMaiorDoQue10); // True
// console.log(todosOsNumeroSãoMaiorQue10); // False
// console.log(NumerosPar);
console.log(maiorDeIdade);
