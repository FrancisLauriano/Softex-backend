# Crie um programa que leia o nome completo de uma pessoa e mostre:
# ‣ O nome com todas as letras maiúsculas
# ‣ O nome com todas minúsculas.
# ‣ Quantas letras ao todo (sem considerar espaços).
# ‣ Quantas letras tem o primeiro nome.

nome = str('Franciscleide lauriano da Silva').strip()
print(nome.upper())
print(nome.lower())

print('Com Espaço: {}'.format(len(nome)))

print('Quantas letras ao todo (sem considerar espaços) 1: {}'.format(len(nome.replace(' ', ''))))
print('Quantas letras ao todo (sem considerar espaços) 2: {}'.format(len(''.join((nome.split())))))
print('Quantas letras ao todo (sem considerar espaços) 3: {}'.format(len(nome) - nome.count(' ')))
print('Quantas letras tem o primeiro nome 1: {}'.format(nome.find(' ')))
separa = nome.split()
print('Quantas letras tem o primeiro nome 2: {}'.format(len(separa[0])))




