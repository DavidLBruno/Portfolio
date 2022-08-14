import { DataTypes } from 'sequelize';

module.exports = (sequelize : any) => {
    sequelize.define('products', {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};