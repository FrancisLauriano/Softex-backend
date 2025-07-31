# Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do
# arquivo usando este link (em minutos).

# tempo de download = tamanho do arquivo / velocidade de download da internet
# converter MB (megabyte) em Mb(megabits) = multiplicar por 8 ( 1MB = 8Mb)
# divisão inteira, usa o operador //. trunca o resultado para o menor inteiro mais próximo.

def tempoDownloand():
    tamanho = int(input('Informe o tamanho do arquivo em MB que deseja realizar download: '))
    velocidade = int(input('Informe a velocidade de um link de Internet em Mbps: '))

    tempoTotalEmSeg = (tamanho*8)/velocidade
    tempoMin = tempoTotalEmSeg//60
    tempoSeg = tempoTotalEmSeg%60

    return tempoMin, tempoSeg

resultadoMin, resultadoSeg = tempoDownloand()
print(f'O download será realizado em {resultadoMin} minutos e {resultadoSeg} segundos')
  
