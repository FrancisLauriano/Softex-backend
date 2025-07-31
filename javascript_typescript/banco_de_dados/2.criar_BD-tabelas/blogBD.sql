CREATE database BlogDB;

USE BlogDB;

CREATE table Autor ( 
autor_id INT unsigned not null auto_increment PRIMARY KEY,
nome_autor varchar (20) not null,
email varchar (20) not null
);

CREATE table Post (
post_id INT unsigned not null auto_increment PRIMARY KEY,
titulo varchar(10) not null,
conteudo varchar (100) not null,
data_de_publicacao datetime not null,
autorID INT unsigned not null,
constraint fk_Post_Autor foreign key (autorID) references Autor (autor_id)
);

CREATE table Comentario (
comentario_id INT unsigned not null auto_increment PRIMARY KEY,
texto_comentario varchar (100),
data_comentario datetime not null,
autorID INT unsigned not null,
postID INT unsigned not null,
constraint fk_Comentario_Autor foreign key (autorID) references Autor (autor_id),
constraint fk_Comentario_Post foreign key (postID) references Post (post_id)
);




