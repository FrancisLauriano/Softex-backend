# Faça um programa que leia um ângulo qualquer e mostre na
# tela o valor do seno, cosseno e tangente desse ângulo.

from math import sin, cos, tan

angulo = float(input('Informe o angulo em radianos: '))
seno = sin(angulo)
cosseno = cos(angulo)
tangente = tan(angulo)

print('O ângulo {} o valor do seno é {:.3}, cosseno é {:.3} e tangente é {:.3}'.format(angulo, seno, cosseno, tangente))