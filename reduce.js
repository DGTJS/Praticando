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

console.log(totalFoguetes);
console.log(listaDePaises);
console.log(listaDePaisesComR);
