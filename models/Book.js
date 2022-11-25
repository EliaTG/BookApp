const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Book = sequelize.define("book",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    imageUrl:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    yearPublished:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Book;