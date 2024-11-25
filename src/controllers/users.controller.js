import UserRepository from "../repositorio/user.repository.js";
import UserDTO from "../dto/user.dto.js";

const UserController = {
  getUsers: async (req, res) => {
    try {
      const users = await UserRepository.getUsers();
      res.status(200).json({ status: "success", users });
    } catch (error) {
      res.status(500).json({ status: "error", message: "Error fetching users.", error: error.message });
    }
  },

  // Función que obtiene un usuario por ID
  getUserById: async (req, res) => {
    try {
      const { uid } = req.params;

      if (!uid) {
        return res.status(400).json({ message: "User ID is required." });
      }

      const user = await UserRepository.findById(uid); // Llamada al repositorio
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      res.status(200).json({ status: "success", user });
    } catch (error) {
      res.status(500).json({ status: "error", message: "Error fetching user.", error: error.message });
    }
  },

  saveUser: async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      if (!username || !email || !password) {
        return res.status(400).json({ message: "Name, email, and password are required." });
      }

      const userDTO = new UserDTO({ name, email, password, role: role || "user" });
      const newUser = await UserRepository.create(userDTO);
      res.status(201).json({ status: "success", user: newUser });
    } catch (error) {
      res.status(400).json({ status: "error", message: "Error saving user.", error: error.message });
    }
  },
};

// Exportando el controlador completo
export default UserController;
