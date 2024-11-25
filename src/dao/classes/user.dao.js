import UserModel from "../models/user.model.js"; // Asegúrate de que la ruta sea correcta

class UserDAO {
    /**
     * Crea un nuevo usuario.
     * @param {Object} userData - Datos del usuario a crear.
     * @returns {Object} - Usuario creado.
     */
    async create(userData) {
        try {
            return await UserModel.create(userData);
        } catch (error) {
            throw new Error("Error creating user: " + error.message);
        }
    }

    /**
     * Obtiene un usuario por su nombre de usuario.
     * @param {string} username - Nombre de usuario.
     * @returns {Object|null} - Usuario encontrado o null si no existe.
     */
    async getByUsername(username) {
        try {
            return await UserModel.findOne({ username });
        } catch (error) {
            throw new Error("Error finding user by username: " + error.message);
        }
    }

    /**
     * Obtiene todos los usuarios.
     * @returns {Array} - Lista de usuarios.
     */
    async getUsers() {
        try {
            return await UserModel.find();
        } catch (error) {
            throw new Error("Error getting users: " + error.message);
        }
    }

    /**
     * Obtiene un usuario por su ID.
     * @param {string} id - ID del usuario.
     * @returns {Object|null} - Usuario encontrado o null si no existe.
     */
    async findById(id) {
        try {
            return await UserModel.findById(id);
        } catch (error) {
            throw new Error("Error finding user by ID: " + error.message);
        }
    }
}

export default UserDAO;
