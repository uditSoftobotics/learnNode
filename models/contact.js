module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "Contact",
    {
      // Model attributes are defined here
      permanentAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      localAddress: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      tableName: "contacts",
    }
  );

  // `sequelize.define` also returns the model
  console.log(Contact === sequelize.models.Contact); // true
  return Contact;
};
