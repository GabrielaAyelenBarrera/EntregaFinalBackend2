import { Router } from 'express';
import { authorizeRole } from '../middlewares/auth.middleware.js';
import authenticateToken from '../middlewares/authenticateToken.js';
import { purchaseCart } from '../controllers/carts.controller.js';

const router = Router();

// Ruta para realizar la compra
router.post('/:cid/purchase', authenticateToken, authorizeRole(['user']), purchaseCart);

export default router;
