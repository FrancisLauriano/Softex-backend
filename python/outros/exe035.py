#Escreva um programa que leia um número inteiro qualquer e peça para o 
#usuário escolher qual será a base de conversão:
#1 para binário, 2 para octal e 3 para hexadecimal

def conversaoBaseNumerica():
    numero = int(input('Informe o número inteiro: '))
    opcao = int(input('''Escolha qual conversão deseja realizar
    1.Converter para binário
    2.Converter para octal
    3.Converter para hexadecimal
    Sua opção: '''))

    if opcao == 1:
        numBinario = bin(numero) 
        mensagem = 'O número inteiro {} em binário é {}'.format(numero, numBinario[2:])
    elif opcao == 2:
        numOctal = oct(numero) 
        mensagem = 'O número inteiro {} em octal é {}'.format(numero, numOctal[2:])
    elif opcao == 3:
        numHexa = hex(numero) 
        mensagem = 'O número inteiro {} em hexadecimal é {}'.format(numero, numHexa[2:])
    else:
        mensagem = 'Opção selecionada inválida!'

    return mensagem

resultado = conversaoBaseNumerica()
print(resultado)    
        