#A confederação nacional de natação precisa de um programa que leia o ano de nascimento
#de um atleta e mostre sua categoria, de acordo com a idade:
#Ate 9 anos: MIRIM
#Ate 14 anos: INFANTIL
#Até 19 anos: JUNIOR
#Ate 20 anos: SÊNIOR
#Acima: MASTER

from datetime import date

def categoria():
    anoNascimento = int(input('Informe o ano do seu nascimento: '))

    idade = (date.today().year) - anoNascimento

    if idade <= 9:
        mensagem ='Atleta tem {} anos! Categoria MIRIM'.format(idade)
    elif idade > 9 and idade <= 14:
        mensagem ='Atleta tem {} anos! Categoria INFANTIL'.format(idade)
    elif idade > 14 and idade <= 19:
        mensagem ='Atleta tem {} anos! Categoria JUNIOR'.format(idade)
    elif idade > 19 and idade <= 20:
        mensagem ='Atleta tem {} anos! Categoria SENIOR'.format(idade)
    else:
        mensagem ='Atleta tem {} anos! Categoria MASTER'.format(idade)

    return mensagem

resultado = categoria()
print(resultado)    