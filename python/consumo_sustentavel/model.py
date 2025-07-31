class Comunidade:
    _id_count = 1

    def __init__(self, nome, cod_ibge_bairro , municipio, uf):
        self.id_comunidade = Comunidade._id_count
        Comunidade._id_count += 1
        self.nome = nome
        self.cod_ibge_bairro = cod_ibge_bairro
        self.municipio = municipio
        self.uf = uf
        

class Organizacao:
    _id_count = 1

    def __init__(self, nome_fantasia, cnpj, razao_social):
        self.id_organizacao = Organizacao._id_count
        Organizacao._id_count += 1
        self.nome_fantasia = nome_fantasia
        self.cnpj = cnpj
        self.razao_social = razao_social
        self.comunidades = []

            

   




      

            
        


        