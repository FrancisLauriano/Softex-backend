# Tendo como dados de entrada a altura de uma
# pessoa, construa um algoritmo que calcule seu peso
# ideal, usando a seguinte fórmula: (72.7*altura) - 58

def pesoIdeal():
    altura = float(input('Infome sua altura em metro: '))
    
    peso = round((72.7*altura)-58, 2)

    return peso

resultado = pesoIdeal()
print(f'O peso ideal para sua altura é: {resultado}Kg')

