/* Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional 
para armazenar informações sobre e as suas características.
Cada linha deve representar um animal e cada coluna terá as diferentes informações 
sobre ele, como nome, espécie e idade. */

function animais(){
    let caes = [
        ["Nome", "Raça-Esp.", "Sexo-Gênero", "Porte", "Idade", "Comportamento"],
        ["Caetano","Pinscher","masculino","pequeno","6 anos","hiperativo"],
        ["Betânia","Vira-lata","feminino","médio","8 anos","amigável"],
        ["Paçoca","Golden Ret.","masculino","grande","2 anos","amável"]
        ];

        let valores = "";
        for(let linha = 0; linha < caes.length; linha++){
            for(let coluna = 0; coluna < caes[linha].length; coluna++){
                valores += caes[linha][coluna] +"\t\t";
            }
            valores += "\n";
        }
console.log("ANIMAIS CADASTRADOS:");
console.log(valores);
}
animais();
