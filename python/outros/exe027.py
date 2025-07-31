# Escreva um programa que leia a velocidade de um carro.
# Se ele ultrapassar 80Km/h, mostre uma mensagem dizendo que ele foi multado.
# A multa vai custar R$7,00 por cada Km acima do limite.

def multa():
    velocidade = int(input('Infome a velocidade do carro em Km/h: '))

    if velocidade > 80:
        multa = (velocidade-80)*7
        mensagem = 'Você ultrapassou a velocidade permitida! Multa no valor de R${:.2f}'.format(multa)
    else:
        mensagem = 'Você está dirigindo dentro da velociodade permitida!'

    return mensagem  
    
texto = multa()

print(texto)

