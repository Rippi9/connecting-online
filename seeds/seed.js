const sequelize = require('../config/connection');
const { User, Clan, Profile } = require('../models');

const userData = require('./userData.json');
const clanData = require('./groupData.json');
const profileData = require('./profileData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const profile = await Profile.bulkCreate(profileData, {
    individualHooks: false,
    returning: true,
  });

  for (const clan of clanData) {
    await Clan.create({
      ...clan,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();