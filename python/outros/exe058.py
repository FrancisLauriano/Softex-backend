# Melhore o jogo do desafio onde o computador vai "pensar" em um número entre 0 e 10.
# Só que agora o jogador vai tentar adivinhar até acertar, mostrando no final quantos
# palpites foram necessarios para vencer.

from random import randint

numJogador = 11
qtdJogadas = 0
numComputador = randint(0,10)



while True:
    numJogador = int(input('Informe um número inteiro entre 0 e 10: '))
    qtdJogadas += 1 
    
    if numComputador > numJogador:
        print('O número é maior... Tente novamente')  
    elif numComputador < numJogador:  
        print('O número é menor... Tente novamente')
    else:
        print('\nParabéns, você acertou')    
        print(f'Foram necessários {qtdJogadas} palpites para acertar o número sorteado {numComputador}')    
        break    

print('FIM')    


