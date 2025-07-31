# Faça um algoritmo que leia o salário de um funcionário e mostre
# seu novo salário, com 15% de aumento.

def aumentoSalario():
    salarioAtual = float(input('Informe seu salário atual em R$: '))
    aumento = salarioAtual*0.15
    salarioComAumento = salarioAtual+aumento

    return salarioComAumento

novoSalario = aumentoSalario()
print('O novo salário após o aumeto será: R${}'.format(novoSalario))