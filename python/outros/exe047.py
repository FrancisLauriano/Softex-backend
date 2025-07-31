# Refaça o desafio da tabuada, mostrando a tabuada de um número que o usuario escolher, só que agora utilizando um laço for.

tabuada = int(input('Qual tabuada deseja? '))

for c in range(1, 11):
    print('{} X {:2} = {:2}'.format(tabuada, c, tabuada*c))

print('FIM')