#Faça um programa que leia um número inteiro e diga se ele é ou não número primo.

# Número primo tem apenas e só apenas dois divisores: 1 e ele mesmo.

qtdDivisores = 0

numero = int(input('Informe um número inteiro: '))
print(f'O número {numero} é divisivel por:')

for c in range(1, numero+1, 1):
    if numero % c == 0:
        qtdDivisores += 1
        print(c, end=', ')

if qtdDivisores == 2:
    print(f'\nO número {numero} é primo')
else:
    print(f'\nO número {numero} não é primo')

    

      
