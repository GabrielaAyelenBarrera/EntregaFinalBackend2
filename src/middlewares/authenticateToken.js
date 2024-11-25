// src/middlewares/authenticateToken.js
import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  // Extraemos el token del header Authorization
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied. Invalid token format." });
  }
  const token = authHeader.split(" ")[1];
  

  // Si no hay token, devolvemos un error 401
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  // Verificamos el token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token." });
    }

    // Si el token es válido, agregamos el usuario al objeto req
    req.user = user;
    next(); // Pasamos al siguiente middleware o controlador
  });
};

export default authenticateToken;
