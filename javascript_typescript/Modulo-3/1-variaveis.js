
// Declarando as variáveis: 
let minhaBoolean;
let minhaBigInt;
let minhaString;
let MeuSymbol;

// 1- Atribuindo valor undefined as variáveis e imprimindo:
minhaBoolean = undefined;
minhaBigInt = undefined;
minhaString = undefined;
MeuSymbol = Symbol();

console.log(` Boolean: ${minhaBoolean}\t BigInt: ${minhaBigInt}\t String: ${minhaString}\t`, 'Symbol:', MeuSymbol);

// 2- Atribuindo valor nulo as variáveis e imprimindo:
minhaBoolean = null;
minhaBigInt = null;
minhaString = null;
MeuSymbol = Symbol(null);

console.log(` Boolean: ${minhaBoolean}\t BigInt: ${minhaBigInt}\t String: ${minhaString}\t`, 'Symbol:', MeuSymbol);


// 3- Atribuindo valor as variáveis e imprimindo:
minhaBoolean = true;
minhaBigInt = 209746085303260n;
minhaString = "JavaScript";
MeuSymbol = Symbol("meu simbolo");

console.log(` Boolean: ${minhaBoolean}\t BigInt: ${minhaBigInt}\t String: ${minhaString}\t`, 'Symbol:', MeuSymbol);
