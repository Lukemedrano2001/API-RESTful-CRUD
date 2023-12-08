import { DataTypes } from 'sequelize';
import sequelize from '../db_connection/connection.js';


const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    codigo_produto: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    preco_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    disponibilidade: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: true
    },
}, {
    timestamps: false,
});


export default Produto;