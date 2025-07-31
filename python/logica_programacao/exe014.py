# João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho.
# Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma
# multa de R$ 4,00 por quilo excedente.
# João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso.
# Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar.
# Imprima os dados do programa com as mensagens adequadas.

# multa = (pesoTotal - 50)*4

def calculadoraMulta():
    peso = float(input('Digite o peso dos peixes em Kg: '))

    if peso > 50:
        mensagem = 'Peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo. Deverá pagar multa'
        pesoExcesso = round(peso - 50, 2)
        multa = round(pesoExcesso*4, 2)
    else:
        mensagem = 'Peso de peixes em conformidade com estabelecido pelo regulamento de pesca do estado de São Paulo. Não pagará multa!'
        pesoExcesso = 0.00
        multa = 0.00

    return mensagem, pesoExcesso, multa
       
msg, pesoEx, valorMulta = calculadoraMulta()

print(f'{msg}\nPeso em Excesso em KG: {pesoEx}\nValor da Multa em R$: {valorMulta}')