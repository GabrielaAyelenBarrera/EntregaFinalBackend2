import OrderDAO from '../dao/classes/order.dao.js';

class OrderRepository {
  async create(orderData) {
    const order = await OrderDAO.create(orderData);
    return order;
  }

  async getByUser(userId) {
    return await OrderDAO.getByUser(userId);
  }

  // Otros métodos como update, delete
}

export default new OrderRepository();

