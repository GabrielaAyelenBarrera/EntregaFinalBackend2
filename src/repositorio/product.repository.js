import ProductDAO from '../dao/classes/product.dao.js';

class ProductRepository {
  async getProductById(pid) {
    return await ProductDAO.getProductById(pid);
  }

  async updateProduct(pid, updates) {
    return await ProductDAO.updateProduct(pid, updates);
  }
}

export default new ProductRepository();
