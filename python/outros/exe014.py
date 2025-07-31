# Faça um programa que leia o comprimento do cateto oposto e do
# cateto adjacente de um triângulo retângulo, calcule e mostre o comprimento
# da hipotenusa.

from math import pow, sqrt

oposto = float(input('Informe o valor do cateto oposto em CM: '))
adjacente = float(input('Informe o valor do cateto adjacente em CM: '))

hipotenusa = sqrt(pow(open) + pow(adjacente))

print('O valor da hipotenusa é: {}'.format(hipotenusa))