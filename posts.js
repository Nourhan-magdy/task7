const db =require("../config/db");

const {DataTypes} = require("sequelize");

module.exports = db.define(
    "posts",
    {
        id:{
            type:DataTypes.INTGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true,

        },
        userid:{
            type:DataTypes.INTGER,
            allowNull:false,

        },
        title:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        body:{
            type:DataTypes.TEXT,
            allowNull:false,
        },

    },
);