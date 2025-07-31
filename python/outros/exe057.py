# Faça um programa que leia o sexo de uma pessoa, mas só aceite os valores 'M' e 'F'.
# Caso esteja errado, peça a digitação novamente até ter um valor correto.

sexo = ''

# sexo = str(input('Digite "M" para sexo masculino ou "F" para sexo feminino: ')).strip().upper()[0]
sexo = str(input('Digite "M" para sexo masculino ou "F" para sexo feminino: ')).strip().upper()

# while sexo not in 'MnFf':
while sexo != 'M' and sexo != 'F':    
    sexo = str(input('Dado Inválido! Digite "M" ou "F": ')).strip().upper()

print(f'Sexo "{sexo}" registrado com sucesso!')

