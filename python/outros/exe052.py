#Crie um programa que leia o ano de nascimento de sete pessoas. No final, mostre quantas pessoas ainda não atingiram
#a maior idade e quantas ja são maiores. #21 anos

from datetime import date

qtdMaiores = 0
qtdMenores = 0
anoAtual = date.today().year

for c in range(0, 7):
    anoNascimento = int(input(f'Informe a data de nascimento da {c+1}ª pessoa: '))

    idade = anoAtual - anoNascimento

    if idade < 21:
        qtdMenores += 1
    else:
        qtdMaiores += 1

print(f'Quantidade de pessoas menores de 21 anos: {qtdMenores}' )            
print(f'Quantidade de pessoas com 21 anos ou mais: {qtdMaiores}' )            



    
