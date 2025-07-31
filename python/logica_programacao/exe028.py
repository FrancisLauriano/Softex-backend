# Construa uma estrutura de repetição. ( até 2 pontos (Lembrar))
# Que solicite ao usuário dois números. (até 2 pontos (Compreender))
# Realize a soma dos números utlizando uma função.(até 2 pontos (Aplicar))
# O Programa deve exbir como resultado os dois números digitas pelo usuário.
# Exibir o resultado.
# Em seguida, o programa deve perguntar ao usuário se ele deseja continuar realizando novos calculos.
# Ou se desaja sair do Sistema. (até 2 pontos (Analisar e Avaliar))
# Após o usuário sair do programa deverá exibir a mensagem "Programa finalizado com sucesso!!!"
# Não utilizar IA Generativa.
# O Sistema funcionando (até 2 pontos ponto (Criar))

from time import sleep

def soma():
    cont = 0
    
    while True:   
        cont += 1
        
        if cont % 1 == 0:
            num1 = float(input(f'Informe o 1° número: '))
            num2 = float(input(f'Informe o 2° número: ')) 
            soma = num1+num2
            print('='*40)
            print('A soma dos números {} e {} é: {:.2f}'.format(num1, num2, soma))
            print('='*40)

            continuar = int(input('''\nDeseja realizar novos calculos?
[1] Sim
[2] Não
Opção: '''))
            
            if continuar == 2:
                print('Encerrando o programa')  
                sleep(0.1)  
                print('|'*5)
                sleep(0.1)  
                print('|'*4)
                sleep(0.1)  
                print('|'*3)
                sleep(0.1)  
                print('|'*2)
                sleep(0.1)  
                print('|'*1)
                break

    print('Programa finalizado com sucesso!!!')        
               
soma()        
            
                 



