#Crie um programa que mostre na tela todos os números pares que estão no intervalo entre 1 e 50.

print('Número pares entre 1 e 50:')
for c in range(1, 51):
    if c % 2 == 0:
        print(c, end=', ')
        
print('FIM')        


#OU
print('Número pares entre 1 e 50:')
for c in range(2, 51, 2):
   print(c, end=', ')
        
print('FIM')        