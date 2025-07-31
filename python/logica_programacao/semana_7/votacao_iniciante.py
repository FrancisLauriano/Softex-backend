# Numa eleição existem três candidatos.
# Faça um programa que peça o número total de eleitores.
# Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

def votacao_iniciante():
    totalEleitores = int(input('Informe a quantidade de eleitores dessa sessão: '))

    total_1 = 0
    total_2 = 0
    total_3 = 0
    total_nulo = 0
    total_votos_validos = 0
    total_votos = 0


    larguraTotal = 60

    for i in range(0, totalEleitores):
        print('\n### URNA PRONTA ###')
        print(''' ### ELEITOR INFORME O NÚMERO DO CANDIDATO QUE DESEJA VOTAR ###''')
        print('[1] Candidato 1')
        print('[2] Candidato 2')
        print('[3] Candidato 3')
        voto = int(input('Digite o número do seu candidato: '))
        print('')

        if voto == 1:
            total_1 += 1
            print('\nGravando voto...')
            print('FIM\n') 
        elif voto == 2: 
            total_2 += 1
            print('\nGravando voto...')
            print('FIM\n') 
        elif voto == 3:
            total_3 += 1
            print('\nGravando voto...')
            print('FIM\n')
        else:
            total_nulo += 1
            print('\nGravando voto...')
            print('FIM\n')       

    total_votos_validos = total_1 + total_2 + total_3
    total_votos = total_1 + total_2 + total_3 + total_nulo

    print('#'*larguraTotal)
    print(f'{'APURAÇÃO DA ELEIÇÃO':^{larguraTotal}}')
    print('#'*larguraTotal)
    print(f'{f'Candidato 1 - {total_1} votos':^{larguraTotal}}')
    print(f'{f'Candidato 2 - {total_2} votos':^{larguraTotal}}')
    print(f'{f'Candidato 3 - {total_3} votos':^{larguraTotal}}')
    print(f'{f'Votos nulos - {total_nulo} votos':^{larguraTotal}}')
    print('-'*larguraTotal)
    print(f'{f'Total de votos - {total_votos} votos':^{larguraTotal}}')
    print(f'{f'Total de votos válidos - {total_votos_validos} votos':^{larguraTotal}}')
    print('-'*larguraTotal)
    print('#'*larguraTotal) 

        
votacao_iniciante()



