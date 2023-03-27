const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserClan extends Model {}

UserClan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        clan_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'clan',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'UserClan',
      }
);

module.exports = UserClan;