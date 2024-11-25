import jwt from 'jsonwebtoken';
const { JWT_SECRET } = process.env;

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  console.log('Token recibido:', token);  // Verifica si el token llega correctamente

  if (!token) return res.status(401).json({ message: 'Access denied' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user; // Decodificamos el token para obtener los datos del usuario
    next();
  });
};


export default authenticateToken;
