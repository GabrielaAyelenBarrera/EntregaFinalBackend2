export const authorizeRole = (allowedRoles) => {
    return (req, res, next) => {
      // Verificamos si el usuario tiene un rol válido
      const userRole = req.user?.role; // `req.user` proviene de authenticateToken
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: "Access denied. Insufficient permissions." });
      }
      next();
    };
  };
  