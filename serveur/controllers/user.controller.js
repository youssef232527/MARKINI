const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

module.exports.userInfo = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("id unknown :" + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
  }).select("-password");
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("id unknown :" + req.params.id);
  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          status: req.body.kind,
          email: req.body.email,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        if (err) return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("id unknown :" + req.params.id);
  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "successfully deleted" });
  } catch (err) {
    return res.status(400).send("id unknown :" + req.params.id);
  }
};
module.exports.likeEvent = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
  return res.status(400).send("id unknown :" + req.params.id);
try {
  await UserModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $addToSet: {
        events:req.body.id
      },
    },
    { new: true, upsert: true },
    (err, docs) => {
      if (!err) return res.send("succesful");
      if (err) return res.status(500).send("ereer");
    }
  );
} catch (err) {
  return res.status(500).send("erer");
}
};
