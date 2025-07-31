# Escreva um programa que leia um número n inteiro qualquer e mostre na tela os n primeiros elementos
# de uma sequença de Fibonacci
# Ex: 0 - 1 - 1 - 2 - 3 - 5 - 8
# 0 - 1 - 1 - 2 - 3 - 5 - 8
# T1  T2  T3

n = int(input('Quantos elementos da sequença de Fibonacci: '))
termo1 = 0
termo2 = 1
cont = 3

print(f'{termo1} - {termo2}', end='')

while cont <= n:
    termo3 = termo1 + termo2
    print(f' - {termo3}', end='') 
    
    termo1 = termo2
    termo2 = termo3

    cont += 1   
    
print(' - FIM')



# OU
# n = int(input('Quantos elementos da sequença de Fibonacci: '))

# termo1 = 0
# termo2 = 1
# termo3 = 0

# cont = 0

# while cont < n:

#     print(f'{termo3}', end=' - ')

#     termo3 = termo2 + termo1

#     termo2 = termo1

#     termo1 = termo3


#     cont += 1

# print('FIM')