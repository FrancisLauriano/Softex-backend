from time import sleep
import os
import platform

def limpar_terminal():
    sistema = platform.system()
    if sistema == 'Windows':
        sleep(0.5)
        os.system('cls')
    else:
        sleep(0.5)
        os.system('clear')    

def pausar_execucao():
    input('\nPressione ENTER para continuar...  ')