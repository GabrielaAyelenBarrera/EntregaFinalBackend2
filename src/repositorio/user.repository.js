import UserDAO from '../dao/classes/user.dao.js';

class UserRepository {
  constructor(dao) {
    this.dao = dao; // Inicializa el DAO
  }

  async create(userData) {
    try {
      return await this.dao.create(userData); // Llama al método del DAO
    } catch (error) {
      throw new Error("Error creating user: " + error.message);
    }
  }

  async getByUsername(username) {
    return await this.dao.getByUsername(username);
  }

  async getUsers() {
    return await this.dao.getUsers();
  }

  async findById(id) {
    return await this.dao.findById(id); // Asegúrate de que este método está en tu DAO
  }

  // Otros métodos como update, delete
}

export default new UserRepository(new UserDAO()); // Exporta la instancia del repositorio
