const db =require("../config/db");

const {DataTypes} = require("sequelize");

module.exports = db.define(
    "users",
    {
        username:{
            type:DataTypes.STRING(100),
            autoIncrement: false,
            allowNull:false,
            primaryKey:true,

        },
        password:{
            type:DataTypes.STRING(255),
            allowNull:false,

        },
        email:{
            type:DataTypes.EMAIL,
            allowNull:false,
        },
        role:{
            type:DataTypes.STRING,
            allowNull:false,
        },

    },
);