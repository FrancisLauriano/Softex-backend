# Faça um programa em python que leia o peso de cinco pessoas. No final, mostre qual foi o maior e menor peso lidos.

maior = 0
menor = 0

for c in range (0, 5):
    peso = float(input(f'Informe o peso em Kg da {c+1}ª pessoa: '))

    if c == 1:
        maior = peso
        menor = peso
    else:
        if peso > maior:
            maior = peso
        if peso < menor:
            menor = peso        

print(f'Maior Peso: {maior} Kg')
print(f'Menor Peso: {menor} Kg')


