# Escreva um algoritmo que solicite ao usuário dois números e exiba a soma deles.

def soma():
    numero1 = float(input('Digite o primeiro número: '))
    numero2 = float(input('Digite o segundo número: '))

    soma = numero1 + numero2

    return numero1, numero2, soma

n1, n2, resultado = soma()
print(f'A soma de {n1} e {n2} é: {resultado}')