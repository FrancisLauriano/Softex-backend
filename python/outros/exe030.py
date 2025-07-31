# Faça um programa que leia um ano qualquer e mostre se ele é BISSEXTO.

from datetime import date

def bissexto():
    ano = int(input('Informe o ano que deseja verificar (coloque 0 para verificar o ano atual): '))
    if ano == 0:
        ano = date.today().year

    if ano % 4 == 0 and ano % 100 != 0 or ano % 4 == 0 and ano % 100 == 0 and ano % 400 == 0:
        mensagem = 'O ano {} é bissexto'.format(ano)    
    else:
        mensagem = 'O ano {} não é bissexto'.format(ano)  
    
    return mensagem

texto = bissexto()
print(texto)
   
