## Camadas - Organização das Pastas

```plaintext
prisma/
│
├── migrations
|
└── schema.prisma

src/
│
├── controllers/
│
├── services/
│
├── models/
│
├── middleware/
│ └── authMiddleware.js
│ └── errorMiddleware.js
│
├── routes/
│
├── utils/
│ └── jwt.js
│
├── config/
│ └── prismaClient.js
│
└── server.js
```

**Descrição:** :warning:

1. **Models:** Responsáveis por definir a estrutura dos dados e interagir com o banco de dados. Por exemplo,  o Prisma ORM para a interação com o banco de dados
2. **Controllers:** Controlam a lógica de entrada e saída. Recebem as requisições, chamam os serviços necessários e retornam as respostas apropriadas.
3. **Services:** Contêm a lógica de negócio. São responsáveis por processar os dados e aplicar as regras de negócio antes de salvar ou buscar informações no banco de dados.
4. **Middleware:** Contêm funções intermediárias que processam as requisições antes de chegarem aos controladores. Usados para autenticação, validação, tratamento de erros, etc. Nele passamos as autenticações de sessão, ou seja, os tokens JWT.
5. **Routes:** Definem as rotas da aplicação e associam cada rota ao controlador correspondente.
6. **Utils:** Contêm funções utilitárias que podem ser usadas em diversas partes da aplicação. Por exemplo, geração e verificação de tokens JWT.
7. **Config:** Contêm arquivos de configuração, como a configuração do banco de dados, prismaClient.js.
8. **Server:** Arquivo principal que inicializa o servidor e configura o middleware base.

## Instação das depedências

```bash
$ npm install
```

## Executar app 

```bash
# development
$ npm run dev
```
... 