import { DataTypes } from 'sequelize';

module.exports = (sequelize : any) => {

    sequelize.define('brand', {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
    });
};