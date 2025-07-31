# Crie um algoritmo que leia um número e
# mostre o seu dobro, triplo e raiz quadrada.

def dobroTriRaiz():
    numero = float(input('Digite um número: '))
    dobro = numero*2
    triplo = numero*3
    raiz = numero**(1/2)

    return numero, dobro, triplo, raiz

n, d, t, r = dobroTriRaiz()
print('O número {}, o dobro é {}, o triplo é {} e a raiz é {:.2f}'.format(n, d, t , r))