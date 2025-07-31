# Faça um programa que leia um número Inteiro qualquer e
# mostre na tela a sua tabuada.

tabuada=int(input('Informe um número: '))

for i in range(11):
    print('{} X {:2} = {}'.format(tabuada, +i, tabuada*(+i)))


# OU
# tabuada=int(input('Informe um número: '))
# print('TABUADA DE {}'.format(tabuada))
# print('{} x {:2} = {}'.format(tabuada, 1, tabuada*1))
# print('{} x {:2} = {}'.format(tabuada, 2, tabuada*2))    
# print('{} x {:2} = {}'.format(tabuada, 3, tabuada*3))
# print('{} x {:2} = {}'.format(tabuada, 4, tabuada*4))
# print('{} x {:2} = {}'.format(tabuada, 5, tabuada*5))
# print('{} x {:2} = {}'.format(tabuada, 6, tabuada*6))    
# print('{} x {:2} = {}'.format(tabuada, 7, tabuada*7))
# print('{} x {:2} = {}'.format(tabuada, 8, tabuada*8))
# print('{} x {:2} = {}'.format(tabuada, 9, tabuada*9))
# print('{} x {:2} = {}'.format(tabuada, 10, tabuada*10))
