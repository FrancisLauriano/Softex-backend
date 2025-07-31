# Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

def produtoMaisBarato():
    produto1 = float(input('Informe o valor do produto 1 em R$: '))
    produto2 = float(input('Informe o valor do produto 2 em R$: '))
    produto3 = float(input('Informe o valor do produto 3 em R$: '))

    if produto1<produto2 and produto1<produto3:
        mensagem = 'Você deverá comprar o produto 1'
    elif produto2<produto1 and produto2<produto3:
        mensagem = 'Você deverá compra o procuto 2'
    else:
        mensagem = 'Você deverá compra o produto 3'

    return mensagem

resultado = produtoMaisBarato()
print(f'{resultado}')            