import Product from '../models/product.model.js';

class ProductDAO {
  async getProductById(pid) {
    return await Product.findById(pid);
  }

  async updateProduct(pid, updates) {
    return await Product.findByIdAndUpdate(pid, updates, { new: true });
  }
}

export default new ProductDAO();
