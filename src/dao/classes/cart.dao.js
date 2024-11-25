import Cart from '../models/cart.model.js';

class CartDAO {
  async getCartById(cid) {
    return await Cart.findById(cid).populate('products.product');
  }

  async updateCart(cid, updates) {
    return await Cart.findByIdAndUpdate(cid, updates, { new: true });
  }
}

export default new CartDAO();
