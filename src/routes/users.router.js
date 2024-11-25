import { Router } from "express";
import UserController from "../controllers/users.controller.js"; // Importamos el controlador completo

const router = Router();

router.get("/", UserController.getUsers);
router.get("/:uid", UserController.getUserById);  // Usamos el controlador para obtener un usuario por ID
router.post("/", UserController.saveUser);

export default router;
