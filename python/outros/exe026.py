# Escreva um programa que faça o computador “pensar”
# em um número inteiro entre 0 e 5 e peça para o usuário tentar
# descobrir qual foi o número escolhido pelo computador.
# O programa deverá escrever na tela se o usuário venceu ou perdeu.

from random import randint
from time import sleep

def sorteio():
    numero = int(input('Digite um número de 0 a 5: '))

    sorteioAleatorio = randint(0, 5)

    print('PROCESSANDO...')
    sleep(2)
    
    if numero == sorteioAleatorio:
        mensagem = 'Número sorteado foi {}. Parabéns, você venceu!'.format(sorteioAleatorio)
    else:
        mensagem = 'Número sorteado foi {}. Infelizmente não foi dessa vez!'.format(sorteioAleatorio)    

    return mensagem

texto = sorteio()
print(texto)
    