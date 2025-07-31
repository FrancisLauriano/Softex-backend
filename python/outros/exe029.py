# Desenvolva um programa que pergunte a distância de uma viagem em Km. 
# Calcule o preço da passagem, cobrando R$0,50 por Km para viagens de até 200Km
# e R$0,45 para viagens mais longas.

def viagem():
    km = float(input('Informe a distância em Km da sua viagem: '))

    if km <= 200:
        valor = km*0.50
        mensagem = 'Sua viagem de {}Km, será cobrado R${:.2f} pela passagem'.format(km, valor)
    else:
        valor = km*0.45
        mensagem = 'Sua viagem de loga distância de {}Km, será cobrado R${:.2f} pela passagem'.format(km, valor)

    return mensagem

texto = viagem()
print(texto)       