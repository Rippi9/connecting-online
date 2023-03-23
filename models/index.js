const User = require('./User');
const Profile = require('./Profile');
const Group = require('./Groups');

User.hasOne(Profile, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Profile.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Group, {
    through: {
        model: UserGroup,
    },
    as: 'usersForGroups'
});

Group.belongsToMany(User, {
    through: {
        model: UserGroup,
    },
    as: 'groupsForUsers'
});

//Create paths in 'UserGroups'