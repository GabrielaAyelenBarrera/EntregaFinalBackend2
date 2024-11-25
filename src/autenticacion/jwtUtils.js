import jwt from 'jsonwebtoken';
const { JWT_SECRET } = process.env;

const authenticateToken = (req, res, next) => {
  // Verificamos el encabezado Authorization
  const token = req.header('Authorization')?.split(' ')[1];
  console.log('Token recibido:', token);
  
  
  // Si no hay token, retornamos un error
  if (!token) return res.status(401).json({ message: 'Access denied, token missing' });

  // Intentamos verificar el token con la clave secreta
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.error('Token verification error:', err);
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    // Guardamos los datos del usuario decodificados en la solicitud
    req.user = user; 
    next();
  });
};

export default authenticateToken;
