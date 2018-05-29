module.exports = function(sequelize, DataTypes) {

    const Needs = sequelize.define("Needs", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        need: DataTypes.TEXT,
        location: DataTypes.STRING,
        category: DataTypes.STRING,

    }, {
        timestamps: false
    });
    return Needs;
};
