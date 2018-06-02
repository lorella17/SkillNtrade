// const moment = require('moment');
module.exports = function(sequelize, DataTypes) {
    const Skills = sequelize.define("Skills", {

        name: DataTypes.STRING,
        email: DataTypes.STRING,
        compensation: DataTypes.TEXT,
        skills: DataTypes.TEXT,
        location: DataTypes.STRING,
        category: DataTypes.STRING,


    });
    return Skills;
};
