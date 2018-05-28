module.exports = function(sequelize, DataTypes) {
    const Needs = sequelize.define("needs", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        skills: DataTypes.TEXT,
        location: DataTypes.STRING,
        category: DataTypes.STRING,
        // tableName: 'needs'
    }, {
        timestamps: false
    });
    return Needs;
};
