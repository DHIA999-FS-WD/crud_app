const User = require("../models/UserModel");

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const { email } = req.body;
    const exist = await User.findOne({ email });
    if (exist) {
      res.status(400).json("user with this eamil existe");
      console.log("user esist");
    } else {
      const newUser = await user.save();
      return res.status(201).json(newUser);
    }
  } catch (error) {
    console.log("errrr", error);
  }
};
const getUsers = async (req, res) => {
  try {
    const usersList = await User.find();
    res.json(usersList);
  } catch (error) {
    console.log("errr", error);
  }
};
const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.json(user);
  } catch (error) {
    console.log("errr", error);
  }
};
const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { email, name, age } = req.body;

    console.log("user", user);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.age = age || user.age;

      const updateUser = await user.save();
      res.json({
        updateUser,
      });
      console.log("updateUser", updateUser);
    }
    await user.save();
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: "user not found try again" });
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      await user.deleteOne();
      res.status(200).json("user deleted");
    } else {
      return res.status(400).json("user not found");
    }
  } catch (error) {
    console.log("errr", error);
  }
};
module.exports = { createUser, getUsers, getUser, updateUser, deleteUser };
