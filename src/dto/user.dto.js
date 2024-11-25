class UserDTO {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Validación simple
  validate() {
    if (!this.username || !this.email || !this.password) {
      throw new Error('All fields are required');
    }
    // Validar que el email tenga formato correcto
    if (!/\S+@\S+\.\S+/.test(this.email)) {
      throw new Error('Invalid email format');
    }
  }
}

// Exportar con ES Modules
export default UserDTO;
