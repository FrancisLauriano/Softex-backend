# Faça um programa que leia um número Inteiro e mostre na
# tela o seu sucessor e seu antecessor.

def sucessorAntecessor():
    n1=int(input('Digite um número: '))
    antecessor=n1-1
    sucessor=n1+1

    return antecessor, sucessor

ant, suc = sucessorAntecessor()
print('O Antecessor é {} e o sucessor é {}'.format(ant, suc))