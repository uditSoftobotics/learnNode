var db =require("../models")
var Contact = db.contact
var addContact  = async (req, res) => {
  const jane = Contact.build({ permanentAddress: "-------" });
  console.log(jane instanceof Contact); // true
  console.log(jane.permanentAddress); // "Jane"
  await jane.save();
  res.status(200).json(jane.toJSON());
};
module.exports = {
    addContact
}
