module.exports = function(sequelize, DataTypes) {
    const Wants = sequelize.define("wants", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        skills: DataTypes.TEXT,
        location: DataTypes.STRING,
        category: DataTypes.STRING,
        // timestamps: false,
        tableName: 'wants'
    });
    return Wants;
};
