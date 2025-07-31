# Faça um Programa que verifique se uma letra digitada é "F" ou "M".
# Conforme a letra, escrever: F - Feminino, M - Masculino, Sexo Inválido.

# converter uma string em maiúscula: upper()
# converter uma string em minúscula: lower()

def verificarFouM():
    sexo = str(input('Digite F ou M: '))

    if sexo.lower() == 'f':
        mensagem = 'Feminino'
    elif sexo.lower() == 'm':
        mensagem = 'Masculino'
    else:
        mensagem = 'Informação inserida é inválida!'  

    return mensagem

resultado = verificarFouM()
print(resultado)  



