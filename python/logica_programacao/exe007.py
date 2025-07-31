# Crie um programa Python que solicite ao usuário uma temperatura em Fahrenheit e converta para Celsius.

def conversorFparaC():
    temperatura = float(input('Digite a temperatura em °F: '))

    celsius = round((temperatura-32)/1.8, 2)

    return celsius

resultado = conversorFparaC()
print(f'A temperatura corresponde a: {resultado}°C')