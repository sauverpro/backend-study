let userDb = [];

/**
 * Retrieves all users from the userDb array and returns them in the response.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Object} - A JSON response containing the userDb array.
 */
export const getAllUsers = (req, res) => {
  res.status(200).json(userDb);
};

/**
 * Creates a new user in the userDb array.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} req.body - The user data to be created.
 * @param {Object} res - The HTTP response object.
 * @returns {Object} - A JSON response with a success message and the updated userDb array.
 */
export const createUser = (req, res) => { // Creation of user
  const user = req.body; // Extract user data from request body
  console.log(user);

  userDb.push(user); // Pushing new user in the array
  res.status(201).json({ message: "New user registered successfully", userDb }); // Returning created user details
};

export const getUserById = (req, res) => { // Getting user details
  const { id } = req.params;
  const foundUser = userDb.find((user) => user.id == parseInt(id));
  res.status(200).json({ message: "user found", foundUser });
};

export const updateUserById = (req, res)=>{
    const {id} = req.params
    const {names, email} = req.body;
    const user = userDb.find((user)=> user.id == id)
    if(names) user.names = names
    if(email) user.email = email
    res.status(200).json({message: "user updated successfully", user})
}

export const deleteUser = (req, res) => {
  const { id } = req.params;
  console.log(id, typeof id);

  const index = userDb.findIndex((user) => user.id === parseInt(id));
  if (index !== -1) {
    const deleteUser = userDb.splice(index, 1);
    res.status(200).json({ message: "user deleted", deleteUser });
  } else {
    res.status(404).json({ message: "user not found" });
  }
};
