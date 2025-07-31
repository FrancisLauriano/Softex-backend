# Crie um programa que leia quanto dinheiro uma pessoa
# tem na carteira e mostre quantos Dólares ela pode comprar.
# Considere US$1,00 = R$3,27

def contacaoDolar():
    real = float(input('Informe quanto você tem em R$: '))

    dolar = real/3.27

    return dolar

resultado = contacaoDolar()
print('Você poderá adiquirir U${:.2f}'.format(resultado))