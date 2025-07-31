// function somaRecursiva (n) {
//    if(n <= 0) {
//     return 0;
//    }else{
//     return n + somaRecursiva(n-1);
//     }
// }

// let numero = 10;
// console.log(somaRecursiva(numero));

function fibonacci(n){
    if (n === 1){
        return 1;
    }else if (n <= 0){
        return 0;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
let numero2 = 8;
console.log(`O ${numero2}-ésimo termo da sequência de Fibonacci é ${fibonacci(numero2)}`);
