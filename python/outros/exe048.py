# Desenvolva um programa que leia seis números inteiros e mostre a soma apenas daqueles que forem pares.
# Se o valor digitado for ímpar, desconsidere-o.

soma = 0
qtdNumero = 0

for c in range(1, 7):
    numero = int(input(f'{c}. Informe um número inteiro: '))

    if numero % 2 == 0:
        soma += numero
        qtdNumero += 1
       
print(f'Soma dos {qtdNumero} números inteiros pares: {soma}')
