# Tendo como dado de entrada a altura (h) de uma
# pessoa,
# construa um algoritmo que calcule seu peso ideal,
# utilizando as seguintes fórmulas:
# Para homens: (72.7*h) - 58
# Para mulheres: (62.1*h) - 44.7

def pesoPsexo():
    altura = float(input('Infome sua altura em m: '))

    sexo = int(input('Digite 1 se você for do sexo FEMININO ou 2 se você for do sexo MASCULINO: '))

    if sexo == 1:
        peso = round((62.1*altura) - 44.7, 2)
    elif sexo == 2:
        peso = round((72.7*altura) - 58, 2)
    else:
        peso = "Opção selecionada não existe!"    

    return peso

resultado = pesoPsexo()
print(f'Seu peso ideal é: {resultado}kg')    
