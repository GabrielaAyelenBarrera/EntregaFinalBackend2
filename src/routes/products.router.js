import { Router } from 'express';
import { authorizeRole } from '../middlewares/auth.middleware.js';
import authenticateToken from '../middlewares/authenticateToken.js';
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
} from '../controllers/products.controller.js';

const router = Router();

// Obtener productos (acceso general)
router.get('/', getProducts);

// Crear producto (solo admin)
router.post('/', authenticateToken, authorizeRole(['admin']), createProduct);

// Actualizar producto (solo admin)
router.put('/:id', authenticateToken, authorizeRole(['admin']), updateProduct);

// Eliminar producto (solo admin)
router.delete('/:id', authenticateToken, authorizeRole(['admin']), deleteProduct);

export default router;
