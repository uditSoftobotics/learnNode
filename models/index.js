const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("testdb", "root", "Udit@1234", {
  host: "localhost",
  dialect:
    "mysql"
});
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db ={};
db.sequelize = sequelize;
db.contact = require("./contact")(sequelize,DataTypes)
db.user = require('./user')(sequelize,DataTypes)

sequelize.sync();
module.exports= db
