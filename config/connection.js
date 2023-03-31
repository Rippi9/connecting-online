const Sequelize = require('sequelize');
require('dotenv').config();

//This section made seeds not work.

 let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else if (process.env.JAWSDB_BROWN_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_BROWN_URL);
} else { 
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}
module.exports = sequelize;