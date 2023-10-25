var db =require("../models")
var User = db.user
var addUser  = async (req, res) => {
  const jane = User.build({ firstName: "Jane",lastName:"peter" });
  console.log(jane instanceof User); // true
  console.log(jane.firstName); // "Jane"
  await jane.save();
  res.status(200).json(jane.toJSON());
};
module.exports = {
    addUser
}
