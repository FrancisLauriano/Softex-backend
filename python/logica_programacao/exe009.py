# Faça um Programa que peça as 4 notas bimestrais e mostre a média.

def mediaBimestral():
    nota1 = float(input('Digite a primeira nota: '))
    nota2 = float(input('Digite a segunda nota: '))
    nota3 = float(input('Digite a terceira nota: '))
    nota4 = float(input('Digite a quarta nota: '))

    media = round((nota1+nota2+nota3+nota4)/4, 2)

    return media

resultado = mediaBimestral()
print(f'A média do aluno é: {mediaBimestral}')