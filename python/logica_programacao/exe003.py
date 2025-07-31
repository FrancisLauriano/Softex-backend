def ingestaoAgua():
    nome =  input('Digite seu nome: ')
    whatsapp = int(input('Informe seu whatsapp: '))
    peso = float(input('Digite seu peso em Kg: '))
    altura = float(input('Digite sua altura em M: '))

    imc = round(peso/(altura*altura), 2)
    agua = round(peso*0.035, 2)

    if imc < 18.5:
        classificacao_imc = "Abaixo do peso"
    elif imc >= 18.5 and imc <= 24.9:
        classificacao_imc = "Peso Normal"
    elif imc >= 25 and imc <= 29.9:
        classificacao_imc = "Sobrepeso"
    elif imc >= 30 and imc <= 34.9:
        classificacao_imc = "Obesidade grau 1 (leve)"
    elif imc >= 35 and imc <=39.9:
        classificacao_imc = "Obesidade grau 2 (moderada)"   
    else:
        classificacao_imc = "Obesidade grau 3 (mórbida)"
 

    return nome, whatsapp, agua, imc, classificacao_imc    


# chamar função
nome_paciente, whatsapp_paciente, agua_paciente, imc_paciente, classificacao_paciente = ingestaoAgua()
print(f'\nRESULTADO\nNome: {nome_paciente}\nWhatsapp: {whatsapp_paciente}\nIMC: {imc_paciente}Kg/m² - {classificacao_paciente}\nIngestão diaria de água recomendada: {agua_paciente} L')


