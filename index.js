class guerreiro {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  lutar() {
    console.log(
      `O guerreiro${this.nome}, de ${this.idade} anos, está lutando!`
    );
  }
}

class Vikings extends guerreiro {
  constructor(nome, idade, machado) {
    super(nome, idade);
    this.machado = machado;
  }
  lutar() {
    console.log(
      `O viking ${this.nome}, de ${this.idade} anos, está lutando em nome de Odin!`
    );
  }
  lutarComMachado() {
    console.log(
      `O viking ${this.nome}, de ${this.idade} anos, está lutando com seu machado ${this.machado}!`
    );
  }
}

guerreiro1 = new guerreiro("Gladiador", 28);
guerreiro1.lutar();
guerreiro2 = new Vikings("Ragnar", 35, "Spartan Sword");
guerreiro2.lutar();
guerreiro2.lutarComMachado();
