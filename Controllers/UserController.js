const User = require('../Models/User');

// Create a new user
async function createUser() {
  const user = await User.create({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'securepassword',
  });
  console.log(user.toJSON());
  return user;
}

// Read users
async function getUsers() {
  const users = await User.findAll();
  console.log(users);
}

// Update a user
async function updateUser(id, newName) {
  const user = await User.findByPk(id);
  if (user) {
    user.name = newName;
    await user.save();
  }
}

// Delete a user
async function deleteUser(id) {
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
  }
}

// Export functions
module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
  };
