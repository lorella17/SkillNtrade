module.exports = function(sequelize, DataTypes) {
    const Tasks = sequelize.define("Tasks", {

        name: DataTypes.STRING,
        email: DataTypes.STRING,
        task: DataTypes.TEXT,
        location: DataTypes.STRING,
        category: DataTypes.STRING,

    }, {
        timestamps: false
    });
    return Tasks;
};
