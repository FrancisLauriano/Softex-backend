from model import Comunidade, Organizacao

class ComunidadeController:
    def __init__(self):
        self.comunidades = []

    ## listar_comunidades
    def listar_comunidades(self):
        return self.comunidades

    ## buscar_comunidade
    def buscar_comunidade(self, cod_ibge_bairro):
        for comunidade in self.comunidades:
            if comunidade.cod_ibge_bairro == cod_ibge_bairro:
                return comunidade
        return None     

    ## criar_comunidade  
    def criar_comunidade(self, nome, cod_ibge_bairro, municipio, uf):
        if self.buscar_comunidade(cod_ibge_bairro) == None:
            comunidade = Comunidade(nome, cod_ibge_bairro, municipio, uf)
            self.comunidades.append(comunidade)
            return comunidade
        else:
            return None   

    ## atualizar_comunidade
    def atualizar_comunidade(self, cod_ibge_bairro, novo_nome=None, novo_cod_ibge_bairro=None, novo_municipio=None, novo_uf=None):
        comunidade = self.buscar_comunidade(cod_ibge_bairro)
        if comunidade:
            if novo_nome:
                comunidade.nome = novo_nome
            if novo_cod_ibge_bairro:
                if self.buscar_comunidade(novo_cod_ibge_bairro) == None:
                    comunidade.cod_ibge_bairro = novo_cod_ibge_bairro
                else:
                    return False    
            if novo_municipio:
                comunidade.municipio = novo_municipio
            if novo_uf:
                comunidade.uf = novo_uf
            return True
        return False    
            
            
    ## deletar_comunidade
    def deletar_comunidade(self, cod_ibge_bairro):
        comunidade = self.buscar_comunidade(cod_ibge_bairro)
        if comunidade:
            self.comunidades.remove(comunidade)
            return True
        return False



class OrganizacaoController:
    def __init__(self):
        self.organizacoes = []

     ## listar_organizacoes
    def listar_organizacoes(self):
        return self.organizacoes

    ## buscar_organizacao
    def buscar_organizacao(self, cnpj):
        for orzanizacao in self.organizacoes:
            if orzanizacao.cnpj == cnpj:
                return orzanizacao
        return None  

    ## criar_organizacao 
    def criar_organizacao(self, nome_fantasia, cnpj, razao_social):
        if self.buscar_organizacao(cnpj) == None:
            organizacao = Organizacao(nome_fantasia, cnpj, razao_social)
            self.organizacoes.append(organizacao)
            return organizacao
        else:
            return None

    ## atualizar_organizacao
    def atualizar_organizacao(self, cnpj, novo_nome_fantasia=None, novo_cnpj=None, novo_razao_social=None):
        organizacao = self.buscar_organizacao(cnpj)

        if organizacao:
            if novo_nome_fantasia:
                organizacao.nome = novo_nome_fantasia
            if novo_cnpj:
                if self.buscar_organizacao(novo_cnpj) == None:    
                    organizacao.cnpj = novo_cnpj    
                else:
                    return False
            if novo_razao_social:
                organizacao.razao_social = novo_razao_social
            return True
        return False         

    ## deletar_organizacao  
    def deletar_organizacao(self, cnpj):
        organizacao = self.buscar_organizacao(cnpj) 

        if organizacao:
            self.organizacoes.remove(organizacao)
            return True 
        return False
    
    ## add_comunidade_a_organizacao   
    def adicionar_comunidade_a_organizacao(self, cnpj, cod_ibge_bairro, comunidade_controller):
        organizacao = self.buscar_organizacao(cnpj)
        comunidade = comunidade_controller.buscar_comunidade(cod_ibge_bairro)

        if organizacao and comunidade:
            if comunidade not in organizacao.comunidades:
                organizacao.comunidades.append(comunidade)
                return True
        return False   

    # remover_comunidade_da_organizacao
    def remover_comunidade_da_organizacao(self, cnpj, cod_ibge_bairro, comunidade_controller):
        organizacao = self.buscar_organizacao(cnpj)
        comunidade = comunidade_controller.buscar_comunidade(cod_ibge_bairro)

        if organizacao and comunidade:
            if comunidade in organizacao.comunidades:
                organizacao.comunidades.remove(comunidade)
                return True
        return False        

    # alterar_comunidade_da_organizacao
    def alterar_comunidade_da_organizacao(self, atual_cnpj, novo_cnpj, cod_ibge_bairro, comunidade_controller):
        organizacao_atual = self.buscar_organizacao(atual_cnpj)
        organizacao_nova = self.buscar_organizacao(novo_cnpj)
        comunidade = comunidade_controller.buscar_comunidade(cod_ibge_bairro)

        if organizacao_atual and organizacao_nova and comunidade:
            organizacao_atual.comunidades.remove(comunidade)
            organizacao_nova.comunidades.append(comunidade)
            return True     
        return False    




       


