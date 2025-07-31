#Crie um programa que faça o computador jogar jokenpô com você
#Pedra, Papel e Tesoura

from random import randint

def jokenpo():
    jogador = int(input('''Escolha:
    0. Pedra
    1. Papel
    2. Tesoura
    Sua opção: '''))
    
    opcoes = ['Pedra', 'Papel', "Tesoura"]

    maquina = randint(0, 2)

    if jogador == 0: #pedra
        if maquina == 0:
            mensagem = 'Você: {} X Máquina: {}\nEMPATE!'.format(opcoes[jogador], opcoes[maquina])
        elif maquina == 2:
            mensagem = 'Você: {} X Máquina: {}\nParabéns, você GANHOU!'.format(opcoes[jogador], opcoes[maquina])
        else:   
            mensagem = 'Você: {} X Máquina: {}\nVocê PERDEU!'.format(opcoes[jogador], opcoes[maquina])
    elif  jogador == 1: #papel
        if maquina == 1:
            mensagem = 'Você: {} X Máquina: {}\nEMPATE!'.format(opcoes[jogador], opcoes[maquina])
        elif maquina == 0:   
            mensagem = 'Você: {} X Máquina: {}\nParabéns, você GANHOU!'.format(opcoes[jogador], opcoes[maquina])
        else:    
            mensagem = 'Você: {} X Máquina: {}\nVocê PERDEU!'.format(opcoes[jogador], opcoes[maquina])
    elif jogador == 2: #tesoura
        if maquina == 2:
            mensagem = 'Você: {} X Máquina: {}\nEMPATE!'.format(opcoes[jogador], opcoes[maquina])
        elif maquina == 1:   
            mensagem = 'Você: {} X Máquina: {}\nParabéns, você GANHOU!'.format(opcoes[jogador], opcoes[maquina])
        else:
            mensagem = 'Você: {} X Máquina: {}\nVocê PERDEU!'.format(opcoes[jogador], opcoes[maquina])
    else:
        mensagem = 'Opção selecionada é inválida!'
    return mensagem
resultado = jokenpo()
print(resultado)    
