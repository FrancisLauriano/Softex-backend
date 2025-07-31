# Faça um Programa que converta metros para centímetros.

def metroPCentimetro():
    metro = float(input('Digite o valor em metro para ser convertido para centímetro: '))
    cm = metro*1000

    return cm

resultado = metroPCentimetro()
print(f'O resultado é: {resultado} em cm')

