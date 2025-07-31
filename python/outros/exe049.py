# Desenvolva um programa que leia o primeiro termo e a razão de uma PA.
# No final, mostre os 10 primeiros dessa progressão.

# OBS: N-ésimo termo da PA -> an = a1 + (n – 1) . r
# Onde: 
# an: termo que queremos calcular
# a1: primeiro termo da P.A.
# n: posição do termo que queremos descobrir
# r: razão


numero = int(input('Infome o primeiro termo: '))
pa = int(input('Informe a razão da PA: '))


print('Os 10 primeiros dessa progressão são:')
for c in range(numero, (numero+(10-1)*pa)+1, pa):
    print(c, end=', ')

print('FIM')    
