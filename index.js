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
  lutar() {
    console.log(
      `O viking ${this.nome}, de ${this.idade} anos, está lutando com sua espada!`
    );
  }
}

guerreiro1 = new guerreiro("Gladiador", 28);
guerreiro1.lutar();
guerreiro2 = new Vikings("Ragnar", 35);
guerreiro2.lutar();
