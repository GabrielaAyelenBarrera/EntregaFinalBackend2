import CartDAO from '../dao/classes/cart.dao.js';

class CartRepository {
  async getCartById(cid) {
    return await CartDAO.getCartById(cid).populate('products.product');
  }

  async updateCart(cid, updates) {
    return await CartDAO.updateCart(cid, updates);
  }
}

export default new CartRepository();
