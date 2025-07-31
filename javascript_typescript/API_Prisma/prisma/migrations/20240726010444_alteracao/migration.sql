-- CreateTable
CREATE TABLE "anuncios" (
    "id" SERIAL NOT NULL,
    "data_criacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "data_conclusao" TIMESTAMP(6),
    "titulo" VARCHAR(255) NOT NULL,
    "titulo_livro_oferecido" VARCHAR(255) NOT NULL,
    "autor_livro_oferecido" VARCHAR(255) NOT NULL,
    "genero_livro_oferecido" VARCHAR(100) NOT NULL,
    "titulo_livro_solicitado" VARCHAR(255) NOT NULL,
    "autor_livro_solicitado" VARCHAR(255) NOT NULL,
    "genero_livro_solicidado" VARCHAR(100) NOT NULL,
    "descricao" TEXT,
    "anunciante_id" INTEGER NOT NULL,

    CONSTRAINT "anuncios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avaliacoes" (
    "id" SERIAL NOT NULL,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT,
    "data_avaliacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "qtd_like" INTEGER DEFAULT 0,
    "usuario_avaliador_id" INTEGER NOT NULL,
    "anuncio_id" INTEGER NOT NULL,

    CONSTRAINT "avaliacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enderecos" (
    "id" SERIAL NOT NULL,
    "logradouro" VARCHAR(255) NOT NULL,
    "numero" VARCHAR(45),
    "bairro" VARCHAR(255),
    "complemento" VARCHAR(45),
    "cep" CHAR(8) NOT NULL,
    "municipio" VARCHAR(255) NOT NULL,
    "uf" CHAR(2) NOT NULL,

    CONSTRAINT "enderecos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mensagens" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "data_envio" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "lido" BOOLEAN DEFAULT false,
    "usuario_remetente_id" INTEGER NOT NULL,
    "usuario_destinatario_id" INTEGER NOT NULL,
    "anuncio_id" INTEGER NOT NULL,

    CONSTRAINT "mensagens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "telefones" (
    "id" SERIAL NOT NULL,
    "contato" VARCHAR(45) NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "telefones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(45) NOT NULL,
    "data_cadastro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "endereco_id" INTEGER,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "anuncios" ADD CONSTRAINT "anuncios_anunciante_id_fkey" FOREIGN KEY ("anunciante_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_anuncio_id_fkey" FOREIGN KEY ("anuncio_id") REFERENCES "anuncios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_usuario_avaliador_id_fkey" FOREIGN KEY ("usuario_avaliador_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_anuncio_id_fkey" FOREIGN KEY ("anuncio_id") REFERENCES "anuncios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_usuario_destinatario_id_fkey" FOREIGN KEY ("usuario_destinatario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_usuario_remetente_id_fkey" FOREIGN KEY ("usuario_remetente_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "telefones" ADD CONSTRAINT "telefones_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
