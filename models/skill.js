// const moment = require('moment');
module.exports = function(sequelize, DataTypes) {
    const Skills = sequelize.define("Skills", {

        name: DataTypes.STRING,
        email: DataTypes.STRING,
        skills: DataTypes.TEXT,
        category: DataTypes.STRING,
        description: DataTypes.STRING,


    });
    return Skills;
};
