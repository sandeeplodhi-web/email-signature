import User from "../models/User.js";

// GET /api/users
export const getUsers = async (req, res) => {
  const users = await User.find().sort({ createdAt: 1 });
  res.json(users);
};

// GET /api/users/:id
export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// POST /api/users
export const createUser = async (req, res) => {
  const payload = req.body;
  const newUser = new User(payload);
  await newUser.save();
  res.status(201).json(newUser);
};

// PUT /api/users/:id
export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// DELETE /api/users/:id
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
