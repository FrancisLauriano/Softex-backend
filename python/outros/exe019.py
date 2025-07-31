frase = 'Francis Lauriano'
texto = '  novo texto '

#Fatiamento
print(frase[0])
print(frase[8:16])
print(frase[8:16:2])
print(frase[:7])
print(frase[8:])
print(frase[7::2])

#Análise
#Comprimento string
print(len(frase))

#Contar quantas vezes aparece um caracter numa string
print(frase.count('a'))

#Contar quantas vezes aparece um caracter numa string num intervalo
print(frase.count('a', 0, 6))

#Mostrar quando aparece uma sequencia de caracters numa string (mostra o inicio da ocorrencia). se retornar -1, significa que não existe esses caracteres na string
print(frase.find('au'))

#Mostrar se existe uma sequencia de caracteres numa string. Irá retornar True ou False
print('Fran' in frase)

#Transformação
#Substituir caracters por outros
print(frase.replace('Lauriano', 'Silva'))

#Colocar os caracteres em maiusculo
print(frase.upper())

#Colocar os caracteres em minusculo
print(frase.lower())

#Colocar toda a string em minusculo e apenas o primeiro caracter ficará em maisculo
print(frase.capitalize())

#Colocar em maisculos o primeiro caracter de todas as palavras da string
print(frase.title())

#Remover os espaços vazios no inicio e no fim da string
print(texto)
print(texto.strip())

#Remover apenas os espaços vazios a direita (fim da string)
print(texto.rstrip())

#Remover apenas os espaços vazios a esquerda (inicio da string)
print(texto.lstrip())

#Dividir a string aonde tiver espaço
print(texto.split())

#Junção de strings de uma lista
lista = ['francis', 'lauriano']
print(' '.join(lista))
















