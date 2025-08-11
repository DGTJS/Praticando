const helloWord = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 1000);
  });
};

const doHelloWord = async () => {
  const mensagemAsync = await helloWord();
  console.log(mensagemAsync);
};

doHelloWord();

const sayMyName = (name) => {
  return new Promise((resolve, reject) => {
    if (name == "Diego") {
      resolve(name);
    } else {
      reject("Errou o nome");
    }
  });
};

const diego = sayMyName("Diego");

const DoSayMyName = async () => {
  const Name = await diego;
  console.log(Name);
};

DoSayMyName();
