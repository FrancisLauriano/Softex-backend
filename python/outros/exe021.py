# Faça um programa que leia um número de 0 a 9999 e mostre na
# tela cada um dos dígitos separados. 
# Ex: Digite um número: 1834 
# unidade: 4
# dezena: 3
# centena: 8
# milhar: 1

numero = int(input('Digite um número de 0 a 9999: '))

numeroNovo = str(numero).zfill(4)
print('Unidade: {}'.format(numeroNovo[3]))
print('Dezena: {}'.format(numeroNovo[2]))
print('centena: {}'.format(numeroNovo[1]))
print('Milhar: {}'.format(numeroNovo[0]))

# OU
print('-'*10, 'OU', '-'*10)


unidade = numero // 1 % 10
dezena = numero // 10 % 10
centena = numero // 100 % 10
milhar = numero // 1000

print('Unidade: {}'.format(unidade))
print('Dezena: {}'.format(dezena))
print('centena: {}'.format(centena))
print('Milhar: {}'.format(milhar))
