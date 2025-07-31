// let ler = {
//     nome: "fran",
//     pessoa: function() {
//         console.log("Ola," + this.nome)
//     },
// }

// // ler.pessoa();

let ler = {
        nome: "fran",
        pessoa: () => {
            console.log("Ola," + this.nome)
        },
    }
    
    ler.pessoa();

    const readline = require('readline-sync');
    import readline from "readline-sync";
    