# Faça um programa que calcule a soma entre todos os numeros impares que são multiplos de três
# e que se encontram no intervalo de 1 até 500.

soma = 0
qtdNum = 0
for c in range(1, 501):
    if c % 2 != 0 and c % 3 == 0:
        soma += c
        qtdNum += 1
       
print(f'A soma dos {qtdNum} número impares que são multiplos de três no intervalo de 1 até 500 é: {soma}')
print('FIM')        