def soma():
    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))

    soma = num1 + num2

    return num1, num2, soma


    
# chamar função
n1, n2, resultado = soma ()
# print(f'A soma é: {resultado}')
print('A soma de {} e {} é {}'.format(n1, n2, resultado))
