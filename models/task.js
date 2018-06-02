module.exports = function(sequelize, DataTypes) {
    const Task = sequelize.define("Task", {

        name: DataTypes.STRING,
        email: DataTypes.STRING,
        tasks: DataTypes.TEXT,
        title: DataTypes.STRING,
        compensation: DataTypes.TEXT,
        deadline: DataTypes.STRING,
        category: DataTypes.STRING

    });
    return Task;
};
