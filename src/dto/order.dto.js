class OrderDTO {
  constructor(userId, products, total, status = 'pending') {
    this.userId = userId;
    this.products = products;  // Array de objetos { productId, quantity, price }
    this.total = total;        // Monto total del pedido
    this.status = status;      // Estado del pedido, por defecto 'pending'
    this.date = new Date();    // Fecha actual del pedido
  }

  // Validación de los datos del pedido
  validate() {
    // Verificar que los productos estén presentes y sean un array
    if (!Array.isArray(this.products) || this.products.length === 0) {
      throw new Error('At least one product is required');
    }

    // Verificar que el usuario esté presente
    if (!this.userId) {
      throw new Error('User ID is required');
    }

    // Verificar que el total sea un número positivo
    if (this.total <= 0) {
      throw new Error('Total must be a positive number');
    }

    // Verificar el estado del pedido
    const validStatuses = ['pending', 'processing', 'shipped', 'delivered'];
    if (!validStatuses.includes(this.status)) {
      throw new Error('Invalid order status');
    }
  }
}

// Exportar con ES Modules
export default OrderDTO;
