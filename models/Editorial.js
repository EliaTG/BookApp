const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Editorial = sequelize.define("editorial",{
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
    phone:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    country:{
        type: Sequelize.STRING,
        allowNull: true,
    },
});

module.exports = Editorial;