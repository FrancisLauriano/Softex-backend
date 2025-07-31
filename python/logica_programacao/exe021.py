# As Organizações Tabajara resolveram dar um aumento de salário aos seus
# colaboradores e lhe contrataram para desenvolver o programa que calculará os
# reajustes.Faça um programa que recebe o salário de um colaborador e o reajuste segundo o
# seguinte critério, baseado no salário atual:
# salários até R$ 280,00 (incluindo) : aumento de 20%
# salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
# salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
# salários de R$ 1500,00 em diante :
# aumento de 5% Após o aumento ser realizado,
# informe na tela:
# o salário antes do reajuste;
# o percentual de aumento aplicado;
# o valor do aumento;
# o novo salário, após o aumento.

def ajusteSalario():
    salarioAtual = float(input('Informe seu salário em R$: '))

    if salarioAtual <= 280:
        aumento = salarioAtual*0.2
        novoSalario = salarioAtual + aumento
        mensagem = 'Saláro antes do reajuste R$ {:.2f}, percentual de aumento aplicado foi 20%, valor de aumento R$ {:.2f}, no salário R$ {:.2f}'.format(salarioAtual, aumento, novoSalario)
    elif salarioAtual > 280 and salarioAtual <= 700:
        aumento = salarioAtual*0.15
        novoSalario = salarioAtual + aumento
        mensagem = 'Saláro antes do reajuste R$ {:.2f}, percentual de aumento aplicado foi 15%, valor de aumento R$ {:.2f}, no salário R$ {:.2f}'.format(salarioAtual, aumento, novoSalario)
    elif salarioAtual > 700 and salarioAtual <= 1500:
        aumento = salarioAtual*0.1
        novoSalario = salarioAtual + aumento
        mensagem = 'Saláro antes do reajuste R$ {:.2f}, percentual de aumento aplicado foi 10%, valor de aumento R$ {:.2f}, no salário R$ {:.2f}'.format(salarioAtual, aumento, novoSalario)    
    else:
        aumento = salarioAtual*0.05
        novoSalario = salarioAtual + aumento
        mensagem = 'Saláro antes do reajuste R$ {:.2f}, percentual de aumento aplicado foi 5%, valor de aumento R$ {:.2f}, no salário R$ {:.2f}'.format(salarioAtual, aumento, novoSalario)    

    return mensagem

reultado = ajusteSalario()
print(reultado)


