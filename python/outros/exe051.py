# Crie um programa que leia uma frase qualquer e diga se ela é um políndromo, desconsidere os espaços.

frase = str(input('Digite uma frase: ')).strip().lower()


juntarFrase = frase.replace(' ', '')
inverso = juntarFrase[::-1]

if inverso == juntarFrase:
    print(f'A frase "{frase}" é um políndromo')
else: 
    print(f'A frase "{frase}" não é um políndromo')   


# OU 


separar = frase.split()
# print(separar)
juntar = ''.join(separar)
# print(juntar)

novaFrase = ''

for c in range(len(juntar)-1, -1, -1):
    # print(juntar[c])
    novaFrase += juntar[c]

if novaFrase == juntar:
    print(f'A frase "{frase}" é um políndromo')
else: 
    print(f'A frase "{frase}" não é um políndromo')   

   
