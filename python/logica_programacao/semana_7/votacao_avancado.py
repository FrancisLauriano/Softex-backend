# Numa eleição existem três candidatos.
# Faça um programa que peça o número total de eleitores.
# Peça para cada eleitor votar e ao final mostrar o número de
# votos de cada candidato.
# Verifique se o voto é válido (1, 2 ou 3).
# Adicione a opção de mostrar o candidato vencedor.


def votacao_avancada():
    totalEleitores = int(input('Infome a quantidade de eleitores desta sessão: '))

    total_1 = 0
    total_2 = 0
    total_3 = 0
    totalVotosValidos = 0

    larguraTotal = 60

    for i in range(0, totalEleitores):
        while True:
            print('\n### URNA PRONTA ###')
            print(''' ### ELEITOR INFORME O NÚMERO DO CANDIDATO QUE DESEJA VOTAR ###''')
            print('[1] Candidato 1')
            print('[2] Candidato 2')
            print('[3] Candidato 3')
            voto = int(input('Digite o número do seu candidato: '))
            print('')

            if voto >= 1 and voto <= 3:
                if voto == 1:
                    total_1 += 1
                    print('\nGravando voto...')
                    print('FIM\n') 
                elif voto == 2:
                    total_2 += 1
                    print('\nGravando voto...')
                    print('FIM\n') 
                else:
                    total_3 += 1
                    print('\nGravando voto...')
                    print('FIM\n') 
                break    
            else:
                print('\nVoto inválido...')
                print('Infome um número válido\n')
       
    totalVotosValidos = total_1 + total_2 + total_3                   
    
    if total_1 > total_2 and total_1 > total_3:
        if total_2 >= total_3:
            print('#'*larguraTotal)
            print(f'{'APURAÇÃO DA ELEIÇÃO':^{larguraTotal}}')
            print('#'*larguraTotal)
            print(f'{f'VENCEDOR - Candidato 1 - {total_1} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print(f'{'Demais candidatos:':^{larguraTotal}}')
            print(f'{f'Candidato 2 - {total_2} votos':^{larguraTotal}}')
            print(f'{f'Candidato 3 - {total_3} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print(f'{f'Total de votos válidos - {totalVotosValidos} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print('#'*larguraTotal)
        elif total_3 >= total_2:   
            print('#'*larguraTotal)
            print(f'{'APURAÇÃO DA ELEIÇÃO':^{larguraTotal}}')
            print('#'*larguraTotal)
            print(f'{f'VENCEDOR - Candidato 1 - {total_1} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print(f'{'Demais candidatos:':^{larguraTotal}}')
            print(f'{f'Candidato 3 - {total_3} votos':^{larguraTotal}}')
            print(f'{f'Candidato 2 - {total_2} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print(f'{f'Total de votos válidos - {totalVotosValidos} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print('#'*larguraTotal)
            
    elif total_2 > total_1 and total_2 > total_3:
        if total_1 >= total_3:
            print('#'*larguraTotal)
            print(f'{'APURAÇÃO DA ELEIÇÃO':^{larguraTotal}}')
            print('#'*larguraTotal)
            print(f'{f'VENCEDOR - Candidato 2 - {total_2} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print(f'{'Demais candidatos:':^{larguraTotal}}')
            print(f'{f'Candidato 1 - {total_1} votos':^{larguraTotal}}')
            print(f'{f'Candidato 3 - {total_3} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print(f'{f'Total de votos válidos - {totalVotosValidos} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print('#'*larguraTotal)
        else:
            print('#'*larguraTotal)
            print(f'{'APURAÇÃO DA ELEIÇÃO':^{larguraTotal}}')
            print('#'*larguraTotal)
            print(f'{f'VENCEDOR - Candidato 2 - {total_2} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print(f'{'Demais candidatos:':^{larguraTotal}}')
            print(f'{f'Candidato 3 - {total_3} votos':^{larguraTotal}}')
            print(f'{f'Candidato 1 - {total_1} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print(f'{f'Total de votos válidos - {totalVotosValidos} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print('#'*larguraTotal)
        
    elif total_3 > total_1 and total_3 > total_2:
        if total_1 >= total_2:
            print('#'*larguraTotal)
            print(f'{'APURAÇÃO DA ELEIÇÃO':^{larguraTotal}}')
            print('#'*larguraTotal)
            print(f'{f'VENCEDOR - Candidato 3 - {total_3} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print(f'{'Demais candidatos:':^{larguraTotal}}')
            print(f'{f'Candidato 1 - {total_1} votos':^{larguraTotal}}')
            print(f'{f'Candidato 2 - {total_2} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print(f'{f'Total de votos válidos - {totalVotosValidos} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print('#'*larguraTotal) 
        else:
            print('#'*larguraTotal)
            print(f'{'APURAÇÃO DA ELEIÇÃO':^{larguraTotal}}')
            print('#'*larguraTotal)
            print(f'{f'VENCEDOR - Candidato 3 - {total_3} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print(f'{'Demais candidatos:':^{larguraTotal}}')
            print(f'{f'Candidato 2 - {total_2} votos':^{larguraTotal}}')
            print(f'{f'Candidato 1 - {total_1} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print(f'{f'Total de votos válidos - {totalVotosValidos} votos':^{larguraTotal}}')
            print('-'*larguraTotal)
            print('#'*larguraTotal)
    else:
        print('#'*larguraTotal)
        print(f'{'APURAÇÃO DA ELEIÇÃO':^{larguraTotal}}')
        print('#'*larguraTotal)
        print(f'{f'Empate entre os candidatos':^{larguraTotal}}')
        print('-'*larguraTotal)
        print(f'{'Resultado:':^{larguraTotal}}')
        print(f'{f'Candidato 1 - {total_1} votos':^{larguraTotal}}')
        print(f'{f'Candidato 2 - {total_2} votos':^{larguraTotal}}')
        print(f'{f'Candidato 3 - {total_3} votos':^{larguraTotal}}')
        print('-'*larguraTotal)
        print(f'{f'Total de votos válidos - {totalVotosValidos} votos':^{larguraTotal}}')
        print('-'*larguraTotal)
        print('#'*larguraTotal)

         

votacao_avancada()