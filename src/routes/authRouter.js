// src/routes/authRouter.js
import express from 'express';
import AuthController from '../autenticacion/auth.controller.js';
import authenticateToken from '../middlewares/authenticateToken.js'; // Importamos el middleware

const router = express.Router();

// Ruta para obtener el usuario autenticado (protegida)
router.get('/current', authenticateToken, AuthController.current);

// Otras rutas como el login y el registro
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

export default router;
