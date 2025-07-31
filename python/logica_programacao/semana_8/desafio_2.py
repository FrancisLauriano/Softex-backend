# Em uma eleição presidencial existem quatro candidatos.
# Os votos são informados por meio de código.
# Os códigos utilizados são: 1, 2, 3, 4 - Votos para os respectivos candidatos
# (você deve montar a tabela ex: 
#  1 - Jonas/ 2- Josias/ 3- Marlene/ 4 - Sandra) 5 - Voto Nulo 6 - Voto em Branco
# Faça um programa que calcule e mostre:
# O total de votos para cada candidato;
# O total de votos nulos;
# O total de votos em branco;
# A percentagem de votos nulos sobre o total de votos;
# A percentagem de votos em branco sobre o total de votos.
# Para finalizar o conjunto de votos tem-se o valor zero.

class UrnaVotacao():
    def __init__(self):
        self.listaCandidato = {1: 'Jonas', 2: 'Josias', 3: 'Marlene', 4: 'Sandra', 5: 'Voto Nulo', 6: 'Voto em Branco'}
        self.votoCandidato = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
        self.totalVotos = 0


    def resultadoVotacao(self):
        for codigo, candidato in self.listaCandidato.items():
            print(f'Cadidato: {candidato} - {self.votoCandidato[codigo]} votos')


    def iniciarVotacao(self):
        largura = 60
        while True:
            print(f'{'-'*largura}')
            print(f'{'Digite o código do candidato que deseja votar:':^{largura}}')
            print(f'{'-'*largura}')
            print('''[1] Jonas
[2] Josias
[3] Marlene
[4] Sandra
[5] Voto Nulo
[6] Voto em Branco
[0] Finalizar''')
            print(f'{'-'*largura}')
    

            try:
                codigo = int(input('Opcão: '))
                if codigo == 0:
                    break
                else:    
                    if codigo in self.votoCandidato:
                        self.votoCandidato[codigo] += 1
                        self.totalVotos += 1
                    else:
                        print('-'*largura)
                        print(f'{'Código Invádo. Digite um código válido!':^{largura}}')
                        print('-'*largura)
            except ValueError:
                print('-'*largura)
                print(f'{'Valor inválido! Informe um número!':^{largura}}')
                print('-'*largura)
        
        print()
        print('-'*largura)
        print(f'{'Resultado da Eleição':^{largura}}')
        print('-'*largura)
        self.resultadoVotacao() 
        print('-'*largura)       


eleicao = UrnaVotacao()
eleicao.iniciarVotacao()





        

        
                        





        