# Faça um Programa que pergunte quanto você ganha
# por hora e o número de horas trabalhadas no mês.
# Calcule e mostre o total do seu salário no referido
# mês.

def horatrabalho():
    salarioPhora = float(input('Informe seu salário por hora em R$: '))
    horasTrabalho = int(input('Quantas horas você trabalhou no mês: '))

    totalSalario = round(salarioPhora*horasTrabalho, 2)

    return totalSalario

resultado = horatrabalho()
print(f'Você receberá R$: {resultado}')