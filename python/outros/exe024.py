# Faça um programa que leia uma frase pelo teclado e mostre:
# ‣ Quantas vezes aparece a letra “A”.
# ‣ Em que posição ela aparece a primeira vez.
# ‣ Em que posição ela aparece a última vez.

frase = str(input('Digite sua frase:')).upper().strip()

print('Quantas vezes aparace letra "L": {}'.format(frase.count('L')))

print('Em que posição ela aparece a primeira vez: {}'.format(frase.find('L')))

print('Em que posição ela aparece a última vez: {}'.format(frase.rfind('L')))

