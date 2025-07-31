# Crie um programa que leia o nome de uma pessoa e diga se ela tem “SILVA” no nome.
nome = str(input('Infome seu nome: ')).strip()

maiusculo = nome.upper()
print('Primeira forma de fazer --> {}'.format('SILVA' in maiusculo))
