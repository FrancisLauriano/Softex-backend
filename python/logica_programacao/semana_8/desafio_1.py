# O objetivo deste programa em Python é desenvolver um sistema simples
# para cadastrar carros, onde cada carro é identificado por sua marca,
# modelo, ano e cor.
# O sistema deve permitir realizar operações básicas com os carros, como
# ligar/desligar o motor, obter informações sobre o carro e outras funções
# específicas.

class Carro():
    def __init__(self, marca, modelo, ano, cor):
        self.marca = marca
        self.modelo = modelo
        self.ano = ano
        self.cor = cor

    def ligarMotor(self):
        print(f'Ligar motor do carro!')

    def desligarMotor(self):
        print(f'Deligar motor do carro!')

    def informacoesCarro(self):
        return f'''Marca: {self.marca}
Modelo: {self.modelo}
Ano: {self.ano}
Cor: {self.cor}'''        


carro_1 = Carro('Honda', 'Honda City', '2023', 'Prata')
carro_1.ligarMotor()
carro_1.desligarMotor()
print(carro_1.informacoesCarro())
        