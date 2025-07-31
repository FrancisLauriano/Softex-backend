## views/usuarios_view.py:
import datetime

class UsuarioView:
    @staticmethod
    def formatar_data(data):
        if isinstance(data, datetime.date):
            return data.strftime('%d/%m/%Y')
        return data

    def exibir_usuarios(usuarios):
        largura_total = 130
        largura_nome = 60
        largura_cpf = 20
        largura_DN = 20
        largura_altura = 10
        largura_peso = 10

        if usuarios:
            print('-'*largura_total)
            print(f'{"NOME":<{largura_nome}} | {"CPF":<{largura_cpf}} | {"DATA NASC":<{largura_DN}} | {"ALTURA":<{largura_altura}} | {"PESO":<{largura_peso}}')
            print('-'*largura_total)

            for usuario in usuarios:
                nome = usuario[1]
                cpf = usuario[2]
                data_nasc = UsuarioView.formatar_data(usuario[3])
                altura = f'{usuario[4]:.2f}'  
                peso = f'{usuario[5]:.1f}'    

                print(f'{nome:<{largura_nome}} | {cpf:<{largura_cpf}} | {data_nasc:<{largura_DN}} | {altura:<{largura_altura}} | {peso:<{largura_peso}}')
                print('-'*largura_total)

        else:
            print(f'\n----------------------------------')
            print(f'Nenhum usuário encontrado')
            print(f'----------------------------------')

    def exibir_usuario(usuario):
        largura_total = 130
        largura_nome = 60
        largura_cpf = 20
        largura_DN = 20
        largura_altura = 10
        largura_peso = 10

        if usuario:
            print('-'*largura_total)
            print(f'{"NOME":<{largura_nome}} | {"CPF":<{largura_cpf}} | {"DATA NASC":<{largura_DN}} | {"ALTURA":<{largura_altura}} | {"PESO":<{largura_peso}}')
            print('-'*largura_total)

            nome = usuario[1]
            cpf = usuario[2]
            data_nasc = UsuarioView.formatar_data(usuario[3])
            altura = f'{usuario[4]:.2f}'  
            peso = f'{usuario[5]:.1f}'    

            print(f'{nome:<{largura_nome}} | {cpf:<{largura_cpf}} | {data_nasc:<{largura_DN}} | {altura:<{largura_altura}} | {peso:<{largura_peso}}')
            print('-'*largura_total)

        else:
            print(f'\n----------------------------------')
            print(f'Nenhum usuário encontrado')
            print(f'----------------------------------')
