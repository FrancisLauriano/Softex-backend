#Crie programa quq leia duas notas de um aluno e calcule sua média, mostrando uma mensagem no final,
#de acordo com média:
#- Média abaixo de 5.0: REPROVADO
#- Média entre 5.0 e 6.9: RECUPERAÇÃO
#- Média 7.0 ou superior: APROVADO

def media():
    nota1 = float(input('Informe a primeira nota: '))
    nota2 = float(input('Informe a segunda nota: '))

    media = (nota1 + nota2) / 2

    if media < 5:
        mensagem = 'Sua média foi {:.2f}. REPROVADO'.format(media)
    elif media >= 5 and media <= 6.9:
        mensagem = 'Sua média foi {:.2f}. RECUPERAÇÃO'.format(media)
    else:
        mensagem = 'Sua média foi {:.2f}. APROVADO'.format(media)
        
    return mensagem

resultado = media()
print(resultado)        