class ComunidadeView:
    def mostrar_comunidades(comunidades):
        larguraTotal = 110
        larguraID = 10
        larguraNome = 30
        larguraCod = 20
        larguraMun = 30
        larguraUf = 20
        for comunidade in comunidades:
            if comunidade:
                print(f'''{comunidade.id_comunidade:<{larguraID}} | {comunidade.nome:<{larguraNome}} | {comunidade.cod_ibge_bairro:<{larguraCod}} | {comunidade.municipio:<{larguraMun}} | {comunidade.uf:<{larguraUf}}''')
                print('-'*larguraTotal)
            else:
                return None
            

    def mostrar_comunidade(comunidade):
        larguraTotal = 110
        larguraID = 10
        larguraNome = 30
        larguraCod = 20
        larguraMun = 30
        larguraUf = 20
        if comunidade:
            print(f'''{comunidade.id_comunidade:<{larguraID}} | {comunidade.nome:<{larguraNome}} | {comunidade.cod_ibge_bairro:<{larguraCod}} | {comunidade.municipio:<{larguraMun}} | {comunidade.uf:<{larguraUf}}''')
            print('-'*larguraTotal)
        else:
            print('Comunidade não localizada!')
            

class OrganizacaoView:   
    def mostar_organizacoes(organizacoes):
        larguraTotal = 110
        larguraID = 10
        larguraNome = 40
        larguraCnpj = 20
        larguraRazaoSocial = 40
        # larguraListaComu = 20
        for organizacao in organizacoes:
            if organizacao:
                print(f'''{organizacao.id_organizacao:<{larguraID}} | {organizacao.nome_fantasia:<{larguraNome}} | {organizacao.cnpj:<{larguraCnpj}} | {organizacao.razao_social:<{larguraRazaoSocial}}''')
                print('-'*larguraTotal)
            else:
                return None    


    def mostrar_organizacao(organizacao):
        larguraTotal = 110
        larguraID = 10
        larguraNome = 40
        larguraCnpj = 20
        larguraRazaoSocial = 40

        if organizacao:
            print(f'''{organizacao.id_organizacao:<{larguraID}} | {organizacao.nome_fantasia:<{larguraNome}} | {organizacao.cnpj:<{larguraCnpj}} | {organizacao.razao_social:<{larguraRazaoSocial}}''')
            print('-'*larguraTotal)
        else:  
            print('Organização não localizada!')
              


class RelacionamentosView:

    def mostrar_comunidades_da_organizacao(organizacao):
        larguraTotal = 110
        larguraID = 10
        larguraNome = 30
        larguraCod = 20
        larguraMun = 30
        larguraUf = 20
        for comunidade in organizacao.comunidades:
            if comunidade:
                print(f'{comunidade.id_comunidade:<{larguraID}} | {comunidade.nome:<{larguraNome}} | {comunidade.cod_ibge_bairro:<{larguraCod}} | {comunidade.municipio:<{larguraMun}} | {comunidade.uf:<{larguraUf}}')
                print('-' * larguraTotal)
            else:
                return None

    def mostrar_organizacao_da_comunidade(comunidade, organizacao_controller):
        larguraTotal = 110
        larguraID = 10
        larguraNome = 40
        larguraCnpj = 20
        larguraRazaoSocial = 40
        for organizacao in organizacao_controller.organizacoes:
            if comunidade in organizacao.comunidades:
                print(f'{organizacao.id_organizacao:<{larguraID}} | {organizacao.nome_fantasia:<{larguraNome}} | {organizacao.cnpj:<{larguraCnpj}} | {organizacao.razao_social:<{larguraRazaoSocial}}')
                print('-' * larguraTotal)
            else:
                return None


        