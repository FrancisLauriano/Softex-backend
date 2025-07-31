#Reforçando o desafio dos triangulos, acrescentando o recurso de mostrar que tipo de triangulo
#sera formado:
#Equilátero: todos os lados iguais
#Isosceles: dois lados iguais
#Escaleno: todos os lados diferentes

def triangulo():
    a = float(input('Informe o tamanho do lado a: '))
    b = float(input('Informe o tamanho do lado b: '))
    c = float(input('Informe o tamanho do lado c: '))

    if a+b>c and a+c>b and b+c>a:
        if a == b and b == c:
            mensagem = 'É possivel formar um triangulo Equilatero'
        elif a == b or b == c or a == c:
            mensagem = 'É possivel formar um triangulo Isosceles'
        else:
            mensagem = 'É possivel formar um triangulo Escaleno'
    else:
        mensagem = 'Não é possivel formar um triangulo'

    return mensagem

resultado = triangulo()
print(resultado)
