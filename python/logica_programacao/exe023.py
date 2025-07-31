# Escreva um programa em Python que permita ao usuário realizar
# operações básicas em uma lista de carros. O programa deve
# oferecer funcionalidades para adicionar novos carros à lista,
# remover carros existentes e acessar os carros presentes na lista.

carros = ['carro 1', 'carro 2', 'carro 3', 'carro 4', 'carro 5']

# 1. listar todos
listarTodos = carros[0:]
print(f'Todos os carros: {listarTodos}')

# 2. acesar um item
itemAcessar = carros[0]
print(f'Acessar um carro: {itemAcessar}')

# 3. adicionar
itemAdicionar = 'carro 6'
print(f'Lista antes de adicionar "{itemAdicionar}"\n{carros[0:]}\n')
carros.append(itemAdicionar)
print(f'Lista após adicionar item {itemAdicionar}:\n{carros[0:]}')

# 4. remove
itemRemover = carros[1]
print(f'Lista antes de remover "{itemRemover}"\n{carros[0:]}\n')
carros.remove(itemRemover)
print(f'Lista após remover item {itemRemover}:\n{carros[0:]}')