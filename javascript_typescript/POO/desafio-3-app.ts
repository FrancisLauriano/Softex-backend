import { Complex } from './desafio-3';
import readline from 'readline';

// Função de teste
function obterNumeroComplexo(): Promise<Complex> {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Digite a parte real do número complexo: ', (realInput) => {
      const real = parseFloat(realInput);

      rl.question('Digite a parte imaginária do número complexo: ', (imaginarioInput) => {
        const imaginario = parseFloat(imaginarioInput);

        if (isNaN(real) || isNaN(imaginario)) {
          console.log('Entrada inválida. Certifique-se de inserir números válidos.');
          rl.close();
          reject();
        } else {
          rl.close();
          resolve(new Complex(real, imaginario));
        }
      });
    });
  });
}

async function testComplex() {
  console.log('Digite o primeiro número complexo:');
  const complex1 = await obterNumeroComplexo();

  console.log('Digite o segundo número complexo:');
  const complex2 = await obterNumeroComplexo();

  // Restante do código permanece o mesmo
  const soma = complex1.adicao(complex2);
  const subtracao = complex1.subtracao(complex2);
  const multiplicacao = complex1.multiplicacao(complex2);
  const divisao = complex1.divisao(complex2);
  const modulo1 = complex1.modulo();
  const modulo2 = complex2.modulo();
  const angulo1 = complex1.angulo();
  const angulo2 = complex2.angulo();
  const inversoAditivo1 = complex1.inversoAditivo();
  const inversoAditivo2 = complex2.inversoAditivo();
  const igual = complex1.isIgual(complex2);

  console.log(`Complexo 1: ${complex1}`);
  console.log(`Complexo 2: ${complex2}`);
  console.log(`Soma: ${soma}`);
  console.log(`Subtração: ${subtracao}`);
  console.log(`Multiplicação: ${multiplicacao}`);
  console.log(`Divisão: ${divisao}`);
  console.log(`Módulo Complexo 1: ${modulo1}`);
  console.log(`Módulo Complexo 2: ${modulo2}`);
  console.log(`Ângulo Complexo 1: ${angulo1}`);
  console.log(`Ângulo Complexo 2: ${angulo2}`);
  console.log(`Inverso Aditivo Complexo 1: ${inversoAditivo1}`);
  console.log(`Inverso Aditivo Complexo 2: ${inversoAditivo2}`);
  console.log(`Complexo 1 é igual a Complexo 2: ${igual}`);
}

testComplex();
