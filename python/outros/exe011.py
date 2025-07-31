# Faça um algoritmo que leia o preço de um produto e mostre seu
# novo preço, com 5% de desconto.

def desconto():
    preco = float(input('Informe o valor do produto em R$: '))
    desconto = preco*0.05
    precoComDesconto = preco-desconto

    return precoComDesconto

novoPreco=desconto()
print('O novo valor do produto com desconto é R$: {}'.format(novoPreco))