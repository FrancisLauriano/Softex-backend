const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('teste', 'root', '*********', {dialect: 'mysql', host: 'localhost', port: '3306'});

const Produto = sequelize.define('produto', {
    id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true
    },
    nome: {
			type: DataTypes.STRING(150),
				allowNull: false
    },
    preco: {
				type: DataTypes.DOUBLE,
				allowNull: false,
    },
    descricao: {
			type: DataTypes.STRING(500),
				allowNull: false,
			}
		}, {
				timestamps: false
		})

 module.exports = Produto;



