# Desenvolva um algoritmo que leia três números e exiba o maior deles.

def maiorDosNumero():
    numero1 = int(input('Digite o primeiro número: '))
    numero2 = int(input('Digite o segundo número: '))
    numero3 = int(input('Digite o terceiro número: '))

    if numero1>numero2 & numero1>numero3:
        maior = numero1
    elif numero2>numero1 & numero2>numero3:
        maior = numero2
    else:
        maior = numero3   

    return maior

resultado = maiorDosNumero()
print(f'O maior número é: {resultado}')     



    

    

  