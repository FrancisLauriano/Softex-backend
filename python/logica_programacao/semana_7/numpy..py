# Utilizar a biblioteca numpy.
# Criar uma lista (array), como os número, 1,2,3 e 4.
# O programa deve realizar a soma e a média desse números.

import numpy as np

meu_array_numpy = np.array([1, 2, 3, 4])

# imprir o array criado atraves numpy
print(meu_array_numpy)

# quantidade de elementos  no array
print(meu_array_numpy.shape)

# soma dos valores dos elementos de uma lista
print(np.sum(meu_array_numpy))

# calcular a media dos valores dos elementos de uma lista
print(np.average(meu_array_numpy))