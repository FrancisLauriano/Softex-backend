# Crie um programa que leia um número Real qualquer pelo
# teclado e mostre na tela a sua porção Inteira.

# from math import trunc

# numero = float(input('Dígite um número real: '))
# truncar = trunc(numero)
# print('O valor truncado de {} é {}'.format(numero, truncar))

# OU

import math
numero = float(input('Dígite um número real: '))
truncar = math.trunc(numero)
print('O valor truncado de {} é {}'.format(numero, truncar))
