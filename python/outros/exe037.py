#faça um programa que leia o ano de nascimento de um jovem e informe, de acordo com sua idade:
#- Se ele ainda vai se alistar as serviço militar
#- Se é a hora de se alistar
#- Se já passou do tempo do alistamento
#Seu programa também deverá mostrar o tempo que falta ou se passou do prazo.

from datetime import date

def alistamento():
    anoNascimento = int(input('Informe o ano do seu nascimento: '))

    idade = (date.today().year) - anoNascimento

    if idade < 18:
        falta = 18 - idade
        mensagem = 'Você ainda irá se alistar. Falta {} anos para seu alistamento'.format(falta)
    elif idade == 18:
        mensagem = 'Você tem 18 anos! Chegou a hora de se alistar'
    else:
        passou = idade - 18
        mensagem = 'Você já passou do tempo do alistamento. Passou {} anos do prazo alistamento'.format(passou)

    return mensagem

resultado = alistamento()
print(resultado)    