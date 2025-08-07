const foguetes = [
  { pais: "Russia", lancamentos: 32 },
  { pais: "US", lancamentos: 23 },
  { pais: "China", lancamentos: 16 },
  { pais: "Europe", lancamentos: 7 },
  { pais: "India", lancamentos: 4 },
  { pais: "Japan", lancamentos: 3 },
];

const totalFoguetes = foguetes.reduce((acumulador, foguete) => {
  return acumulador + foguete.lancamentos;
}, 0);

const listaDePaises = foguetes.reduce((lista, foguete) => {
  lista.push(foguete.pais);
  return lista;
}, []);

const listaDePaisesComR = foguetes.filter((foguete) => {
  return foguete.pais.startsWith("R");
}, []);

// console.log(totalFoguetes);
// console.log(listaDePaises);
// console.log(listaDePaisesComR);

const numeros = [3, 4, 6, 8];

const SomaDosNumeros = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

const letras = ["a", "b", "c", "d"];

const JuntandoAsLetras = letras.reduce((acc, letras) => {
  return acc + letras;
}, []);

const pessoas = [
  { nome: "Bob", idade: 30, votou: true },
  { nome: "Jake", idade: 32, votou: true },
  { nome: "Kate", idade: 25, votou: false },
  { nome: "Sam", idade: 20, votou: false },
  { nome: "Phil", idade: 21, votou: true },
  { nome: "Ed", idade: 55, votou: true },
  { nome: "Tami", idade: 54, votou: true },
  { nome: "Mary", idade: 31, votou: false },
  { nome: "Becky", idade: 43, votou: false },
  { nome: "Joey", idade: 41, votou: true },
  { nome: "Jeff", idade: 30, votou: true },
  { nome: "Zack", idade: 19, votou: false },
];

const IdadePessoasQueVotaramTrue = pessoas
  .filter((pessoa) => pessoa.votou === true)
  .reduce((soma, pessoa) => soma + pessoa.idade, 0);

const NomePessoasQueVotaramTrue = pessoas
  .filter((pessoa) => pessoa.votou === true)
  .map((pessoa) => pessoa.nome);

console.log(SomaDosNumeros);
console.log(JuntandoAsLetras);
console.log(IdadePessoasQueVotaramTrue);
console.log(NomePessoasQueVotaramTrue);
