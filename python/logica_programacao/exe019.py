# Faça um programa para a leitura de duas notas parciais de um aluno.
# O programa deve calcular a média alcançada por aluno e apresentar:
# A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
# A mensagem "Reprovado", se a média for menor do que sete;
# A mensagem "Aprovado com Distinção", se a média for igual a dez.

def mediaAluno():
    nota1 = float(input('Informe a primeira nota do aluno: '))
    nota2 = float(input('Informe a segunda nota do aluno: '))

    media = round((nota1+nota2)/2, 2)

    if media>=7 and media!=10:
        mensagem = 'Aprovado'
    elif media<7:
        mensagem = 'Reprovado'
    elif media==10:
        mensagem = 'Aprovado com Distinção'   
   
    return media, mensagem

mediaAluno, situacaoAluno = mediaAluno()
print(f'Média do Aluno: {mediaAluno}\nSituação: {situacaoAluno}')    
        