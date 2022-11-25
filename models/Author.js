const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Author = sequelize.define("author",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: true,
    },
});

module.exports = Author;