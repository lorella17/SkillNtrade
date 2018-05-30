module.exports = function(sequelize, DataTypes) {
    const Tasks = sequelize.define("Tasks", {

        name: DataTypes.STRING,
        email: DataTypes.STRING,
        tasks: DataTypes.TEXT,
        compensation: DataTypes.TEXT,
        location: DataTypes.STRING,
        category: DataTypes.STRING

    });
    return Tasks;
};
