# Desenvolva um programa que leia o nome, idade e sexo de 4 pessoas. No final do programa mostre:
# A média de idade do grupo.
# Qual é o nome do homem mais velho
# Quantas mulheres têm menos de 20 anos.

somaIdade = 0
mediaIdade = 0
idadeHomemVelho = 0
nomeHomemVelho = ''
qtdMulheresMenosDeVinte = 0

for c in range(0, 4):
    print(f'### {c+1}ª PESSOA ###')
    nome = str(input('Digite um nome: '))
    idade = int(input('Digite uma idade: '))
    sexo = int(input('''Informe o sexo:
    1. Feminino
    2. Masculino
    Opção: '''))
    print('-'*30)

    somaIdade += idade
    

    if sexo == 2 and c == 1:
        idadeHomemVelho = idade
        nomeHomemVelho = nome
    if sexo == 2 and idade > idadeHomemVelho:
        idadeHomemVelho = idade
        nomeHomemVelho = nome
    if sexo == 1 and idade < 20:
        qtdMulheresMenosDeVinte += 1

mediaIdade = somaIdade / 4

print(f'Soma das idades: {somaIdade}')
print(f'Media das idades: {mediaIdade}')
print(f'Nome homem mais velho tem {idade} anos e se chama {nomeHomemVelho}')
print(f'Quantidade de mulheres com menos de 20 anos: {qtdMulheresMenosDeVinte}')