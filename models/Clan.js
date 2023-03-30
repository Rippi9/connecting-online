const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Clan extends Model {}



//Tried adding validation to selections below - not sure if required.
/* const possibleGames = ['Valorant', 'CSGO', 'Call of Duty'];
const possiblePlatforms = ['PC', 'PS', 'XBOX'];
const possibleRegions = ['Oceania', 'Europe', 'North America']; */

//Continue with this section
Clan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        game: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        platform: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        region: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        playercount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'clan',
    }
)

module.exports = Clan;