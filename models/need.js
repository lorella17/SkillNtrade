module.exports = function(sequelize, DataTypes) {
    const Needs = sequelize.define("needs", {
        timestamps: false,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        skills: DataTypes.TEXT,
        location: DataTypes.STRING,
        category: DataTypes.STRING,
        tableName: 'needs'
    });
    return Needs;
};
