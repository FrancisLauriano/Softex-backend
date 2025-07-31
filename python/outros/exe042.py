#Elabore um programa que calcule o valor a ser pago por um produto, considerando o seu
#preço atual e condição de pagamento:

#à vista dinheiro/ cheque: 10% desconto
#à vista no cartão: 5% de desconto
#em até 2x no cartão: preço normal
#3x ou mais no cartão: 20% de juros

def valorProduto():
    precoAtual = float(input('Infome o preço atual do produto em R$: '))
    formaPagamento = int(input('''Informe uma opção de pagamento:
    1. À vista dinheiro ou cheque
    2. À vista no cartão
    3. Até 2x no cartão  
    4. 3x ou mais no cartão
    Opção: '''))

    if formaPagamento == 1:
        precoFinal = precoAtual - (precoAtual*0.1)
        mensagem = 'Produto terá "10%" de desconto.\nValor total com desconto: R${:.2f}'.format(precoFinal)
    elif formaPagamento == 2:
        precoFinal = precoAtual - (precoAtual*0.05)
        mensagem = 'Produto terá "5%" de desconto.\nValor total com desconto: R${:.2f}'.format(precoFinal)
    elif formaPagamento == 3:
        valorParcela = precoAtual / 2
        mensagem = 'Produto terá preço normal. Será pago em 2 parcelas de R${:.2f}.\nValor total: R${:.2f}'.format(valorParcela, precoAtual)
    elif formaPagamento == 4:
        numParcelas = int(input('Quantas parcelas? '))
        precoFinal = precoAtual + (precoAtual*0.2)
        valorParcela = precoFinal / numParcelas
        mensagem = 'Produto terá "20%" de juros. Será pago em {} parcelas de R${:.2f}.\nValor total com juros: R${:.2f}'.format(numParcelas, valorParcela, precoFinal)
    else:
        mensagem = 'Opção selecionada é inválida!'

    return mensagem

resultado = valorProduto()
print(resultado)  
