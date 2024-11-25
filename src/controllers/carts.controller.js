import cartRepository from '../repositorio/cart.repository.js';
import productRepository from '../repositorio/product.repository.js';
import ticketRepository from '../repositorio/ticket.repository.js';

export const purchaseCart = async (req, res) => {
  try {
    const { cid } = req.params;

    // 1. Obtener el carrito
    const cart = await cartRepository.getCartById(cid);
    if (!cart) {
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }

    const purchasedProducts = [];
    const failedProducts = [];

    // 2. Validar y actualizar el stock de los productos
    for (const item of cart.products) {
      const product = await productRepository.getProductById(item.product._id);

      if (product.stock >= item.quantity) {
        // Reducir el stock del producto
        product.stock -= item.quantity;
        await productRepository.updateProduct(product._id, { stock: product.stock });

        // Agregar al listado de productos comprados
        purchasedProducts.push({ product, quantity: item.quantity });
      } else {
        // Agregar al listado de productos que no se pudieron comprar
        failedProducts.push(item);
      }
    }

    // 3. Crear un ticket para los productos comprados
    let ticket = null;
    if (purchasedProducts.length > 0) {
      const totalAmount = purchasedProducts.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

      const ticketData = {
        amount: totalAmount,
        purchaser: req.user.email, // Supón que tienes un usuario autenticado
      };

      ticket = await ticketRepository.create(ticketData);
    }

    // 4. Filtrar el carrito para dejar los productos no comprados
    cart.products = failedProducts;
    await cartRepository.updateCart(cart._id, { products: failedProducts });

    // 5. Retornar la respuesta
    res.status(200).json({
      message: 'Compra procesada',
      purchasedProducts,
      failedProducts,
      ticket,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
