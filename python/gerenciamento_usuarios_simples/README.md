... 

## Arquitetura

**1. Config (config/db_config.py):**
    
**- Objetivo:** A camada Config centraliza as configurações do banco de dados, como host, porta, usuário, senha e nome da base de dados.
    
**- Funcionalidade:** Fornece os parâmetros necessários para conectar à base de dados MySQL em outras partes do sistema. Isso facilita a manutenção e a alteração das configurações, pois estão concentradas em um único local.


**2. Database (database/database.py):**
    
**- Objetivo:** Gerenciar a conexão e a interação com o banco de dados.
    
**- Funcionalidade:**
  - A classe Database encapsula a lógica de conexão e manipulação direta do banco de dados incluindo a criação de tabelas e execução de queries.
  - O método inicializar() garante que a tabela de usuários seja criada ao iniciar o sistema, se ainda não existir.


**3. Model (models/usuarios_model.py):**
    
**- Objetivo:** Representar a estrutura de dados do usuário e fornecer métodos para realizar operações CRUD (Create, Read, Update, Delete) no banco de dados.

**- Funcionalidade:**
  - A classe Usuario contém atributos privados relacionados às informações do usuário, como nome, CPF, data de nascimento, altura e peso.
  - Os métodos da classe interagem com a base de dados para adicionar, listar, buscar, atualizar e deletar usuários.


**4. Controller (controllers/usuarios_controller.py):**
    
**- Objetivo:** Controlar o fluxo de dados entre a interface do usuário (view) e os modelos (model).

**- Funcionalidade:**
  - A classe UsuarioController valida as entradas de dados e chama os métodos apropriados do modelo Usuario para manipular os dados.
  - Também gerencia a inicialização do banco de dados e a lógica de negócios para operações como adicionar, listar, buscar, atualizar e deletar usuários.


**5. Utils (utils/utils.py):** 
    
**-Objetivo:** Contêm funções utilitárias que podem ser usadas em diversas partes da aplicação.

**- Funcionalidade:**
  - limpar_terminal():  Essa função limpa o terminal, removendo o conteúdo que está sendo exibido na tela.
  - pausar_execucao(): Essa função pausa a execução do programa até que o usuário pressione a tecla ENTER.
  - Essas funções são úteis para melhorar a interatividade e a usabilidade do sistema na linha de comando.


**6. View (views/usuarios_view.py):**
    
**- Objetivo:** Gerenciar a apresentação dos dados para o usuário.

**- Funcionalidade:**
  - A classe UsuarioView formata e exibe informações sobre os usuários, como listas e detalhes de um único usuário.
  - Fornece métodos estáticos que garantem a consistência na apresentação dos dados.


**7. Menu (__main__.py):**
    
**- Objetivo:** Interagir com o usuário final e gerenciar o fluxo do programa com base nas escolhas do usuário.

**- Funcionalidade:**
  - A classe Menu apresenta um menu de opções para o usuário, permitindo operações como cadastro, listagem, busca, atualização e remoção de usuários.
  - Chama os métodos do UsuarioController de acordo com as escolhas do usuário, garantindo a interação fluida entre as camadas.



## Instação das depedências :arrow_down_small:

```bash
$ pip install -r requirements.txt

```


## Executar app :arrow_forward:

**development:** 
```bash
$ python __main__.py
```

... 