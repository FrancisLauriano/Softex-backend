# Faça um programa em Python que abra e reproduza o áudio de
# um arquivo MP3.

import pygame

#iniciar a bibliotaca pygame
pygame.init()

#funcionalidade para carregar uma musica em formato MP3
pygame.mixer.music.load('outros/exe018.mp3')

#funcionalidade para dar play numa musica em MP3
pygame.mixer.music.play()

#encerrar o programa quando a musica terminar
pygame.event.wait()