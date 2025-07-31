# for c in range(0, 7, 2):
#     print(c)
# print('FIM')    

# i = int(input('Ínicio: '))
# f = int(input('Fim: '))
# p = int(input('Passo: '))
# for c in range(i, f+1, p):
#     print(c)
# print('FIM')    

# s = 0
# for c in range (0, 3):
#     n = int(input('Digite um número: '))
#     s += n
# print('O somatório é {}'.format(s))    
# print('FIM!')    



#Faça um programa que mostre na tela uma contagem regressiva para estouro de fogos de artificio,
#indo de 10 ate 0, com uma pausa de 1 segundo entre elas.

from time import sleep

print('Contagem regressiva ...')
for c in range(10, -1, -1):
    print(c)
    sleep(1)
print('BOOOMMMM')    


#Crie um programa que mostre na tela todos os números pares que estão no intervalo entre 1 e 50.

print('Números pares entre 1 e 50:')
for c in range(1, 51, +1):
    if c % 2 == 0:
        print(c)
print('Fim do programa!')        



# Faça um programa que calcule a soma entre todos os numeros impares que são multiplos de três
# e que se encontram no intervalo de 1 até 500.

print('A soma dos números impares e multiplos de 1 até 500 é')

soma = 0
for c in range(1, 501, +1):
    if c % 2 != 0 and c % 3 == 0:
        soma += c
        print(f'+ {c}')
print('-'*20)
print(f'TOTAL: {soma}')
print('FIM')    


# Refaça o desafio da tabuada, mostrando a tabuada de um número que o usuario escolher, só que agora utilizando um laço for.
tabuada = int(input('Informe a tabuada que deseja: '))

for c in range(0, 10, +1):
    resultado = tabuada * c
    print('{} X {} = {:2}'.format(tabuada, c, resultado))
print('FIM')


# Desenvolva um programa que leia seis números inteiros e mostre a soma apenas daqueles que forem pares.
# Se o valor digitado for ímpar, desconsidere-o.
soma = 0
for c in range(0, 6):
    numero = int(input(f'{c+1}. Digite um número: '))
    if numero % 2 == 0:
        soma += numero

print(f'A soma é: {soma}')
print('FIM!')  


# Desenvolva um programa que leia o primeiro termo e a razão de uma PA.
# No final, mostre os 10 primeiros dessa progressão.
inicio = int(input('Informe o primeiro termo da PA: '))
pa = int(input('Informe a razão da PA: '))

print('Os 10 primeiros dessa progressão são:')
for c in range(inicio, inicio+(10*pa), pa):
    print(c)
print('FIM')


#Faça um programa que leia um número inteiro e diga se ele é ou não número primo.

numero = int(input('Digite um número inteiro: '))
qtdDivisores = 0

for c in range(1, numero+1, 1):
    #  print(c)
    if numero % c == 0:
        qtdDivisores += 1
if qtdDivisores == 2:
    print('O número {} é primo'.format(numero))
else:
    print('O número {} não é primo'.format(numero))


# Crie um programa que leia uma frase qualquer e diga se ela é um políndromo, desconsidere os espaços.

# frase = str(input('Digite uma frase: ')).strip().lower()
# fraseSemEspaco = frase.replace(' ','')

# if fraseSemEspaco[::-1] == fraseSemEspaco[0:]:
#     print('A "{}" é políndromo'.format(frase))
# else:
#     print('A "{}" não é políndromo'.format(frase))

### OU ###

frase2 = str(input('Digite uma frase: ')).strip().lower()

# separarFrase2 = frase2.split()
# print(separarFrase2)

# juntarFrase2 = ''.join(separarFrase2)
# print(juntarFrase2)

juntarFrase2 = frase2.replace(' ', '')
inverterFrase2 = ''

for c in range(len(juntarFrase2) - 1, -1, -1):
    inverterFrase2 += juntarFrase2[c]
# print(inverterFrase2) 

if juntarFrase2 == inverterFrase2:
    print('A "{}" é políndromo'.format(frase2))
else: 
    print('A "{}" não é políndromo'.format(frase2))   



#Crie um programa que leia o ano de nascimento de sete pessoas. No final, mostre quantas pessoas ainda não atingiram
#a maior idade e quantas ja são maiores. #21 anos

from datetime import date

qtdMenorIdade = 0
qtdMaiorIdade = 0

for c in range(0, 7):
    ano = int(input(f'Informe o ano de nascimento da pessoa {c+1}: '))
    idade = (date.today().year) - ano
    if idade < 21:
        qtdMenorIdade += 1
    else:
        qtdMaiorIdade += 1   

print('Quantidade de pessoas menores de 21 anos: {}'.format(qtdMenorIdade))
print('Quantidade de pessoas com 21 anos ou mais: {}'.format(qtdMaiorIdade))
# print('Quantidade de pessoas com 21 anos ou mais: {}'.format(c - qtdMenorIdade))


# Faça um programa que leia o peso de cinco pessoas. No final, mostre qual foi o maior e menor peso lidos.

maiorPeso = 0

for c in range(0, 3):
    peso = float(input(f'Informe o peso em Kg da pessoa {c+1}: '))
    if c == 1:
        menorPeso = maiorPeso
        maiorPeso = c
    if peso > maiorPeso:
        maiorPeso = peso
    elif peso < menorPeso:
        menorPeso = peso    

print('O maior peso é: {}Kg'.format(maiorPeso))    
print('O menor peso é: {}Kg'.format(menorPeso))   


# Desenvolva um programa que leia o nome, idade e sexo de 4 pessoas. No final do programa mostre:
# A média de idade do grupo.
# Qual é o nome do homem mais velho
# Quantas mulheres têm menos de 20 anos.

media = 0
somaPeso = 0
maiorIdade = 0
menorVinte = 0

for c in range(0, 2):
    print(f'### DADOS DA PESSOA {c+1} ###')
    nome = str(input('Digite o nome: '))
    idade = int(input('Informe a idade: '))
    sexo = int(input('''Informe o sexo:
    1. Feminino
    2. Masculino
    Opção:  '''))
    print('')
    
    somaPeso += idade

    if sexo == 2 and idade > maiorIdade:
        maiorIdade = idade

    if sexo == 1 and idade < 20:
        menorVinte = c

  
    
media = somaPeso/2    
print(f'Soma da idade das pessoas: {somaPeso}')
print(f'Média de idade das pessoas: {media}')
print(f'Maior idade entre homens: {maiorIdade}')  
print(f'Mulher menores de 20 anos: {menorVinte}')  
print('FIM')    
