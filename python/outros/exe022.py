# Crie um programa que leia o nome de uma cidade e diga se ela
# começa ou não com o nome “SANTO”.

cidade = str(input('Infome o nome da cidade: ')).strip()
maisculo = cidade.upper()

print('Primeira forma de fazer --> {}'.format('SANTO' in maisculo[:5]))
print('Segunda forma de fazer --> {}'.format(maisculo.find('SANTO')))
