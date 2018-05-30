const moment = require('moment');
module.exports = function(sequelize, DataTypes) {
    const Skills = sequelize.define("Skills", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        compensation: DataTypes.TEXT,
        skills: DataTypes.TEXT,
        location: DataTypes.STRING,
        category: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }



    });
    return Skills;
};
