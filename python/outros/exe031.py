# Faça um programa que leia três números e mostre qual é o maior
# e qual é o menor.

def maiorNumero():
    n1 = int(input('Digite o primeiro número: '))
    n2 = int(input('Digite o segundo número: '))
    n3 = int(input('Digite o terceiro número: '))

    if n1 > n2 and n1 > n3 and n2 > n3:
        mensagem = 'O número {} é o maior e o número {} é o menor'.format(n1, n3)
    elif n1 > n2 and n1 > n3 and n3 > n2:
        mensagem = 'O número {} é o maior e o número {} é o menor'.format(n1, n2)    
    elif n2 > n1 and n2 > n3 and n1 > n3:
        mensagem = 'O número {} é o maior e o número {} é o menor'.format(n2, n3)
    elif n2 > n1 and n2 > n3 and n3 > n1:
        mensagem = 'O número {} é o maior e o número {} é o menor'.format(n2, n1)    
    elif n3 > n2 and n3 > n1 and n1 > n2:
        mensagem = 'O número {} é o maior e o número {} é o menor'.format(n3, n2)    
    else:
         mensagem = 'O número {} é o maior e o número {} é o menor'.format(n3, n1)     

    return mensagem

texto = maiorNumero()
print(texto)     