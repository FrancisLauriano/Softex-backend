#Escreva um programa que leia dois números inteiros e compare-os mostrando na tela uma mensagem:
#- O primeiro valor é maior
#- O segundo valor é maior
#- Não existe valor maior, os dois são iguais

def compararNum():
    num1 = int(input('Informe o primeiro número inteiro: '))
    num2 = int(input('Informe o segundo número inteiro: '))

    if num1 > num2:
        mensagem = 'O primeiro valor é maior. O {} é maior que o {}'.format(num1, num2)
    elif num2 > num1:
        mensagem = 'O segundo valor é maior. O {} é maior que o {}'.format(num2, num1)
    else:
        mensagem = 'Não existe valor maior, os dois são iguais'

    return mensagem

resultado = compararNum()
print(resultado)    
