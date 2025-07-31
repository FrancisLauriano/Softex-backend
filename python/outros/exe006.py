# Desenvolva um programa que leia as
# duas notas de um aluno, calcule e
# mostre a sua média.

def mediaAluno():
    nota1=float(input('Informe a primeira nota: '))
    nota2=float(input('Informe a segunda nota: '))
    media = (nota1+nota2)/2

    return media

m=mediaAluno()
print('A média do aluno é: {:.2f}'.format(m))
