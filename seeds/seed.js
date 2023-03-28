const sequelize = require('../config/connection');
const { User, Clan, Profile } = require('../models');


const userData = require('./userData.json');
const clanData = require('./clanData.json');
const profileData = require('./profileData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //Assigns consecutive IDs to each user object, starting from 1
  const userDataWithIds = userData.map((user, index) => ({ ...user, id: index + 1 }));

  // Bulk creates user from seed
  const users = await User.bulkCreate(userDataWithIds, {
    individualHooks: true,
    returning: true,
    validate: true,
  });

  // Bulk creates profiles from seed
  const profile = await Profile.bulkCreate(profileData, {
    individualHooks: false,
    returning: true,
  });

  // Creates clan from seed with randomized user from database
  for (const clan of clanData) {
    await Clan.create({
      ...clan,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();