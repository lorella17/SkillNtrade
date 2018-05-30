module.exports = function(sequelize, DataTypes) {
    const Skills = sequelize.define("Skills", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        skills: DataTypes.TEXT,
        location: DataTypes.STRING,
        category: DataTypes.STRING,

    },{
        timestamps: false
    });
    return Skills;
};
