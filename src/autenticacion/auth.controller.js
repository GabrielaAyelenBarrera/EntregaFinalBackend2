import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserDAO from "../dao/classes/user.dao.js";

const userDAO = new UserDAO();

const AuthController = {
  register: async (req, res) => {
    try {
      const { username, password, email } = req.body;

      // Validar datos requeridos
      if (!username || !password || !email) {
        return res.status(400).json({ message: "All fields are required." });
      }

      // Verificar si el usuario ya existe
      const existingUser = await userDAO.getByUsername(username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists." });
      }

      // Cifrar la contraseña
      const hashedPassword = bcrypt.hashSync(password, 10);

      // Crear usuario
      const savedUser = await userDAO.create({
        username,
        email,
        password: hashedPassword,
      });

      res.status(201).json({ message: "User registered successfully", user: savedUser });
    } catch (error) {
      res.status(500).json({ message: "Error registering user", error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Validar datos requeridos
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
      }

      // Verificar si el usuario existe
      const user = await userDAO.getByUsername(username);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      // Comparar contraseñas
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials." });
      }

      // Generar token JWT
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      res.status(500).json({ message: "Error logging in", error: error.message });
    }
  },

  current: async (req, res) => {
    try {
      const user = await userDAO.findById(req.user.id); // Buscar usuario por ID del token
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      // Retornar datos del usuario
      const { _id, username, email, role } = user;
      res.json({
        id: _id,
        username,
        email,
        role,
        message: "Current user data retrieved successfully.",
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching user data", error: error.message });
    }
  },
};

export default AuthController;
