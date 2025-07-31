# Faça um programa que leia um número qualquer e mostre seu fatorial
# Ex: 5! = 5x4x3x2x1 = 120

num = int(input('Digite um número: '))
c = num
fatorial = 1

print(f'{num}! = ', end='')

while c > 0:
    print(f'{c}', end='')
    print(' x ' if c > 1 else ' = ', end='')
    fatorial *= num
    c -= 1

print(fatorial)

print('FIM')    