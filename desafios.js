function calcImc(altura, peso) {
  return (peso / altura) * altura;
}
function fatorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  }

  let fat = 1;
  for (let i = 2; i <= num; i++) {
    fat *= i;
  }
  return fat;
}

let num = 5;
let result = fatorial(num);
console.log(`o fatorial de ${num} é ${result}`);

function convertDolar(dolar) {
  let cotacaoDolar = 5.37;
  let valorEmReais = dolar * cotacaoDolar;

  return valorEmReais.toFixed(2);
}

let dolar = 115;
let valorEmReais = convertDolar(dolar);
console.log(`${dolar} Dólares equivalem a ${valorEmReais}`);

function perimetroSalaRetangulo(altura, largura) {
  let area = altura * largura;
  let perimetro = altura * altura + largura * largura;
  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);    
}

let altura = 10;
let Largura = 7;
perimetroSalaCirculo(altura, Largura);

function perimetroSalaCirculo(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = Math.PI * 2 * raio;
}

function tabuada(num) {
  for (let i = 0; i <= 10; i++) {
    let resultado = num * 1;
    console.log(`${num} x ${i} = ${resultado}`);
  }
}
