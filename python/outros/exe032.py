# Escreva um programa que pergunte o salário de um funcionário e
# calcule o valor do seu aumento.
# Para salários superiores a R$1.250,00, calcule um aumento de 10%.
# Para os inferiores ou iguais, o aumento é de 15%.

def aumentoSalario():
    salario = float(input('Informe qual seu salário atual em R$: '))

    if salario > 1250:
        novoSalario = (salario*0.10) + salario
        mensagem = 'Seu novo salário é R${:.2f}'.format(novoSalario)
    else:
        novoSalario = (salario*0.15) + salario
        mensagem = 'Seu novo salário é R${:.2f}'.format(novoSalario)    

    return mensagem

texto = aumentoSalario()
print(texto)    