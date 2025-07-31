// Escreva um aplicativo de teste que demonstra as capacidades da classe Invoice.

import {Invoice} from "./desafio-1";
import readline from 'readline-sync';



function appCompra () {

    console.log(`*** Insira os dados da Fatura ***`);
    const numDoItem = readline.questionInt(`Numero do Item: `);
    const descricao = readline.question(`Descrição do Item: `);
    const quantidadeCompada = readline.questionInt(`Quantidade de Itens: `);
    const precoUnitario = readline.questionFloat(`Valor do produto R$: `);

    console.log(`Confirmar ou atualizar a fatura?`);
    console.log(`1. Confirmar     2. Atualizar: `)
    const opcao = readline.questionInt(`Escolha uma opção: `);

    let minhaFatura = new Invoice (numDoItem, descricao, quantidadeCompada, precoUnitario);

    switch (opcao){
        case 1:
            console.log(`\n------------------------------`);
            console.log(`*****       FATURA       *****`);
            console.log(`------------------------------`);
            console.log(`Número do Item: `, minhaFatura.getNumDoItem());
            console.log(`Descrição do Item: `, minhaFatura.getDescricao());
            console.log(`Quantidade de Itens: `, minhaFatura.getQuantidadeCompada());
            console.log(`Preço Unitário R$: `, minhaFatura.getPrecoUnitario().toFixed(2));
            console.log(`------------------------------`);
            console.log(`Valor TOTAL R$:`, minhaFatura.getInvoiceAmount().toFixed(2));  
            console.log(`------------------------------\n`);
        break;
        case 2:
            console.log(`\n------------------------------`);
            console.log(`*****  ATUALIZAR FATURA  *****`);
            console.log(`------------------------------`);
            const numDoItemNovo = readline.question(`Numero do Item: `);
            const descricaoNovo = readline.question(`Descrição do Item: `);
            const quantidadeCompadaNovo = readline.question(`Quantidade de Itens: `);
            const precoUnitarioNovo = readline.question(`Valor do produto R$: `);


            try {
                if(!Number.isInteger(numDoItemNovo) ||  typeof descricaoNovo !== 'string' || 
                !Number.isInteger(quantidadeCompadaNovo) || isNaN(precoUnitario)) {
                    throw new Error('Valor inserido inválido!');

                } else {
                    minhaFatura = new Invoice (
                    numDoItemNovo  !== '' ? parseInt(numDoItemNovo) : numDoItem,
                    descricaoNovo !== '' ? descricaoNovo : descricao,
                    quantidadeCompadaNovo !== '' ? parseInt(quantidadeCompadaNovo) : quantidadeCompada,
                    precoUnitarioNovo !== '' ? parseFloat(precoUnitarioNovo) : precoUnitario
                    );

                    console.log(`\n------------------------------`);
                    console.log(`*****  FATURA ATUALIZADA  *****`);
                    console.log(`------------------------------`);
                    console.log(`Número do Item: `, minhaFatura.getNumDoItem());
                    console.log(`Descrição do Item: `, minhaFatura.getDescricao());
                    console.log(`Quantidade de Itens: `, minhaFatura.getQuantidadeCompada());
                    console.log(`Preço Unitário R$: `, minhaFatura.getPrecoUnitario().toFixed(2));
                    console.log(`------------------------------`);
                    console.log(`Valor TOTAL R$:`, minhaFatura.getInvoiceAmount().toFixed(2));
                    console.log(`------------------------------\n`);
                }   
            } catch (error){
                console.error('\nErro ao atualizar\n', error);
                
            }
            
        break;
        default:
        console.log(`Opção inválida!`);
        break;
    
    } 
}

appCompra();
