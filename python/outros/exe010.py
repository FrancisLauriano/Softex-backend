# Faça um programa que leia a largura e a altura de uma parede
# em metros, calcule a sua área e a quantidade de tinta
# necessária para pintá-la, sabendo que cada litro de tinta,
# pinta uma área de 2m2.

def pintura():
    largura = float(input('Informe a largura em M: '))
    altura = float(input('Informe a altura em M: '))

    area = largura*altura
    qtdTinta = area/2

    return area, qtdTinta

m2, tinta = pintura()
print('Para realizar a pintura da parede de {} m² é necessário {} litros de tinta'.format(m2, tinta))