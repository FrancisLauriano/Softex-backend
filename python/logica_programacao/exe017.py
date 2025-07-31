# Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.
# Calcule e mostre o total do seu salário no referido mês,sabendo-se que são descontados 11% para o # Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
# salário bruto.
# quanto pagou ao INSS.
# quanto pagou ao sindicato.
# o salário líquido.
# calcule os descontos e o salário líquido, conforme a tabela abaixo:
# + Salário Bruto : R$
# - IR (11%) : R$
# - INSS (8%) : R$
# - Sindicato ( 5%) : R$
# = Salário Liquido : R$
# Obs.: Salário Bruto - Descontos = Salário Líquido.


def salarioLiquidoDes():
    salarioHoras = float(input('Informe quanto você recebe por horas em R$: '))
    horasTrabalhadas = int(input('informe quantas horas você trabalhou no mês: '))

    salarioBruto = round(salarioHoras*horasTrabalhadas, 2)
    desIR = round((salarioBruto*11)/100, 2)
    desINSS = round((salarioBruto*8)/100, 2)
    desSindicato = round((salarioBruto*5)/100, 2)
    salarioLiquido = round(salarioBruto - (desIR+desINSS+desSindicato), 2)

    return salarioBruto, desIR, desINSS, desSindicato, salarioLiquido

bruto, ir, inss, sindicato, liquido = salarioLiquidoDes()
print(f'Salário Bruto do mês R$: {bruto}\n11% IR R$: -{ir}\n8% INSS R$: -{inss}\n5% Sindicato R$: -{sindicato}\n----------------------------\nSalário Liquido R$: {liquido}')
