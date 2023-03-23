const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Group extends Model {}

//Continue with this section
Group.init(
    {
        id: {
            type: DataTypes.INTEGER,
        },
        name: {

        },
        description: {

        },
        createdAt: {

        },
    }
)