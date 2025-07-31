function calculadoraMedia(){
    const prompt = require('prompt-sync')();
    console.log(`******** CALCULADORA - MÉDIA ********\n Informe três notas entre 0 e 10 `);
    let nota1 = Number.parseFloat(prompt(console.log(`Informe sua 1º Nota: `))); 
    let nota2 = Number.parseFloat(prompt(console.log(`Informe sua 2º Nota: `)));
    let nota3 = Number.parseFloat(prompt(console.log(`Informe sua 3º Nota: `)));

    let media = (nota1+nota2+nota3)/3;

    console.log(`Sua média foi: ${media.toFixed(2)}`);

}
calculadoraMedia();