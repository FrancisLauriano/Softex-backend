# Escreva um programa que leia um valor em metros e o
# exiba convertido em centímetros e milímetros.

def conversaoMetrica():
    metro=float(input('Informe o valor em metros: '))
    centrimetros=metro*100
    milimetros=metro*1000

    return metro, centrimetros, milimetros

m, cm, mm = conversaoMetrica()
print('{} metros equivale a: {} centímetros ou {} milímetros'.format(m, cm, mm))