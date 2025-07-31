#Desenvolva uma lógica que leia o peso e altura de uma pessoa, calcule seu IMC e mostre
#seu status , de acordo com a tabela abaixo:
#Abaixo de 18.5: abaixo do peso
#Entre 18.5 e 25: Peso ideal
#25 ate 30: Sobrepeso
#30 ate 40: Obesidade
#Acima de 40: Obesidade Morbida

def imc():
    peso = float(input('Informe o peso em Kg: '))
    altura = float(input('Informe o peso em m: '))

    imc = peso / (altura**2)

    if imc < 18.5:
        mensagem = 'Seu IMC é {:.2f}Kg/m²: Abaixo do peso'.format(imc)
    elif imc >= 18.5 and imc < 25:
        mensagem = 'Seu IMC é {:.2f}Kg/m²: Peso Ideal'.format(imc)
    elif imc >= 25 and imc < 30:
        mensagem = 'Seu IMC é {:.2f}Kg/m²: Sobrepeso'.format(imc)
    elif imc >= 30 and imc < 40:
        mensagem = 'Seu IMC é {:.2f}Kg/m²: Obesidade'.format(imc)
    else:
        mensagem = 'Seu IMC é {:.2f}Kg/m²: Obesidade Morbida'.format(imc)

    return mensagem

resultado = imc()
print(resultado)    