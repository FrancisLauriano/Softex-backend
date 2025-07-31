# c = 1
# while c < 10:
#     print(c)
#     c += 1
# print('FIM')

# c = 1
# while c <= 3:
#     n = int(input('Digite um números: '))
#     c += 1
# print('FIM')

# n = 1
# while n != 0:
#     n = int(input('Digite um números: '))
# print('FIM')

# r = 'S'
# while r == 'S':
#     n = int(input('Digite um valor: '))
#     r = str(input('Deseja continuar? [S/N] ')).upper()
# print('FIM')    

# r = 'S'
# while r in 'Ss':
#     n = int(input('Digite um valor: '))
#     r = str(input('Deseja continuar? [S/N] '))
# print('FIM')    

n = 1
qtdPares = 0
qtdImpares = 0
while n != 0:
    n = int(input('Digite um número: '))
    if n != 0:
        if n % 2 == 0:
            qtdPares += 1
        else:
            qtdImpares += 1  


print(f'Você digitou {qtdPares} números pares e {qtdImpares} números impares')
print('FIM')
