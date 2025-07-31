const readline = require('readline-sync');
const prompt = require('prompt-sync')();

function eleicao() {

    function entradaDados(){
            while (true) {
                console.log("==================== ELEIÇÃO ====================");
                console.log("\Informe o número do candidato que deseja votar: ");
                console.log("\tcandidato_X => 889\n","\tcandidato_Y => 847\n","\tcandidato_Z => 515\n","\tbranco => 0 "); 
                let nVoto = readline.questionInt();
                console.log("Deseja finalizar a votação:\n1- SIM   2- NÃO");
                let finaliza = readline.questionInt();
                    if(finaliza===1){
                        return nVoto;
                    }else if(finaliza===2){
                        console.log("Tente novamente!");
                        continue;
                    }else if(isNaN(nVoto) && isNaN(finaliza)){
                        console.log("VOCÊ INSERIU UM DADO INVÁLIDO!!!\nTente novamente!");
                       continue;
                    }    
            }                
    }
    
    function candidatos(){
        let nVoto = entradaDados();
        let totalX = 0;
        let totalY = 0;
        let totalZ = 0;
        let totalB = 0;
        let totalN = 0;
            
            if (nVoto===889){
                totalX ++;
            }else if(nVoto===847){
                totalY ++;
            }else if(nVoto===515){  
                totalZ ++;
            }else if(nVoto===0){  
                totalB ++;
            }else{
                totalN ++;
            }    
        
    return {totalX, totalY, totalZ, totalB, totalN};   
    } 
        
    function resultado(){
        let {totalX, totalY, totalZ, totalB, totalN} = candidatos();
          
            if(totalX>totalY && totalX>totalZ) {
                console.log("=============== RESULTADO ===============");
                console.log("# Vencedor da eleição:");
                console.log("\tCandidato_X -", totalX, "votos válidos");
                console.log("# Demais candidatos:\n","\tCandidato_Y -", totalY, "votos válidos");
                console.log("\tCandidato_Z -", totalZ, "votos válidos",);
                console.log("\tVotos Brancos ou Nulos -", (totalB+totalN), "votos");
                console.log("TOTAL DE VOTOS -", (totalX+totalY+totalZ+totalB+totalN), "votos");
                console.log("=========================================");
            }else if(totalY>totalX && totalY>totalZ){
                console.log("=============== RESULTADO ===============");
                console.log("# Vencedor da eleição:");
                console.log("\tCandidato_Y -", totalY, "votos válidos");
                console.log("# Demais candidatos:\n","\tCandidato_X -", totalX, "votos válidos");
                console.log("\tCandidato_Z -", totalZ, "votos válidos");
                console.log("\tVotos Brancos ou Nulos -", (totalB+totalN), "votos");
                console.log("TOTAL DE VOTOS -", (totalX+totalY+totalZ+totalB+totalN), "votos");
                console.log("=========================================");
            }else if(totalZ>totalX && totalZ>totalY){
                console.log("=============== RESULTADO ===============");
                console.log("# Vencedor da eleição:");
                console.log("\tCandidato_Z -", totalZ, "votos válidos");
                console.log("# Demais candidatos:\n","\tCandidato_X -", totalX, "votos válidos");
                console.log("\tCandidato_Y -", totalY, "votos válidos");
                console.log("\tVotos Brancos ou Nulos -", (totalB+totalN), "votos");
                console.log("TOTAL DE VOTOS -", (totalX+totalY+totalZ+totalB+totalN), "votos");
                console.log("=========================================");
            }else{
                console.log("=============== RESULTADO ===============");
                console.log("Houve empate ou todos os votos foram inválidos.");
                console.log("\tCandidato_Y -", totalY, "votos válidos");
                console.log("\tCandidato_X -", totalX, "votos válidos");
                console.log("\tCandidato_Z -", totalZ, "votos válidos");
                console.log("\tVotos Brancos ou Nulos -", (totalB+totalN), "votos");
                console.log("TOTAL DE VOTOS -", (totalX+totalY+totalZ+totalB+totalN), "votos");
                console.log("=========================================");
            }     
    }
resultado();
}

eleicao();
    



