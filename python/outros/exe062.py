# Melhore o desafio anterior, perguntando para o usuário se ele quer mostrar mais alguns termos
# O programa encerra quando ele disser que quer mostrar 0 termos.

# N-ésimo termo da PA -> an = a1 + (n – 1) . r

primeiro = int(input('Digite o primeiro termo de uma PA: '))
razao = int(input('Digite a razão da PA: '))


termo = primeiro
cont = 0
maisTermo = 10
total = 0

while maisTermo != 0:
    total += maisTermo

    while cont <= total:
        print(termo, end=' - ')
        termo += razao
        cont += 1
    print('PAUSA')
    maisTermo =  int(input('\nDeseja ver mais termos? Quantos? '))      
    
print('\nFINALIZADO')

# OU

# numero = int(input('Digite o primeiro termo de uma PA: '))
# razao = int(input('Digite a razão da PA: '))

# n = 10
# N_ezimo = numero + ((n - 1)+1)*razao

# while n != 0:
    
#     print(numero, end=' ')
#     numero += razao

#     if numero >= N_ezimo:
#         n = int(input('\nDeseja ver mais termos? Quantos? ')) 
       
#         if n != 0 and n != 1:
#             N_ezimo = numero + ((n - 1)+1)*razao
#             print(numero, end=' ')
#             numero += razao  
#         elif n == 1:  
#             continue
#         elif n == 0:
#             print('Encerrando programa...')
#             break
# print('Finalizado')       

    

    

   