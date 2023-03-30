const User = require('./User');
const Profile = require('./Profile');
const Clan = require('./Clan');
const UserClan = require('./UserClan');

User.hasOne(Profile, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Profile.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Clan, {
    through: {
        model: UserClan,
    },
    as: 'usersForClans'
});

Clan.belongsToMany(User, {
    through: {
        model: UserClan,
    },
    as: 'ClansForUsers'
});

Clan.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'creator',
});

module.exports = {
    User,
    Profile,
    Clan,
    UserClan,
};
