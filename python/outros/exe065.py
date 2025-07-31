# Crie um programa que leia varios números inteiros pelo teclado. No final da execução, mostre a média 
# entre todos os valores e qual foi maior e o menor valores lidos. O programa deve perguntar ao usuário
# se ele quer ou não continuar a digitar valores.

soma = 0
qtdNum = 0
media = 0
maior = 0
menor = 0

num = 0
continuar = 'S'

while True:
    if continuar == 'S':
        num = int(input('Digite um número: '))
        continuar = str(input('Deseja continuar digitando números? [S/N] ')).strip().upper()
        qtdNum += 1
        soma += num 
        media = soma / qtdNum

        if qtdNum == 1:
            maior = num
            menor = num
        else:
            if num > maior:
                maior = num
            elif num < menor:
                menor = num    

    elif continuar == 'N':
        break

print('A média dos {} números: {:.2f}'.format(qtdNum, media))
print(f'Maior número: {maior}')
print(f'Menor número: {menor}')
   