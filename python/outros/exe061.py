# Refaça o desafio da progressão aritmetica, lendo o primeiro termo e a razão de uma PA, mostrando 
# os 10 primeiros termos da progressão usando a estrututa while.

# N-ésimo termo da PA -> an = a1 + (n – 1) . r

# numero = int(input('Digite o primeiro termo de uma PA: '))
# razao = int(input('Digite a razão da PA: '))


# N_ezimo = numero + (10 - 1)*razao

# print('\nOs 10 primeiros termos da progressão: ')

# while numero <= N_ezimo:
#     print(numero, end=' ')
#     numero += razao

# OU
    
primeiro = int(input('Digite o primeiro termo de uma PA: '))
razao = int(input('Digite a razão da PA: '))

termo = primeiro

cont = 0

print('\nOs 10 primeiros termos da progressão: ')

while cont <= 10:
    print(termo, end=' ')
    termo +=  razao
    cont += 1

