import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserDAO from '../dao/classes/user.dao.js';

const { JWT_SECRET } = process.env;

const AuthService = {
  // Registro de un nuevo usuario
  register: async (username, password, email) => {
    // Verificar si el usuario ya existe
    const existingUser = await UserDAO.getByUsername(username);
    if (existingUser) {
      throw new Error('Username already exists');
    }

    // Cifrado de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    // Guardar el usuario en la base de datos
    const newUser = await UserDAO.create({ username, password: hashedPassword, email });
    return newUser;
  },

  // Inicio de sesión de usuario
  login: async (username, password) => {
    const user = await UserDAO.getByUsername(username);
    if (!user) {
      throw new Error('User not found');
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // Crear un token JWT con los datos del usuario
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    return token;
  },
};

export default AuthService;
