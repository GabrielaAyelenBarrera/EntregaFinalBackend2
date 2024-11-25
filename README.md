EntregaFinalBackend2

┣ src

┃ ┣ autenticacion

┃ ┃ ┣ auth.controller.js        # Lógica para la autenticación de usuarios.

┃ ┃ ┣ auth.middleware.js        # Middleware para verificar el JWT.

┃ ┃ ┣ auth.router.js            # Rutas de autenticación.

┃ ┃ ┣ auth.service.js           # Servicios de autenticación.

┃ ┃ ┗ jwtUtils.js               # Utilidades para manejar JWT.

┃ ┣ controllers

┃ ┃ ┣ business.controller.js    # Controlador de negocios.

┃ ┃ ┣ carts.controller.js       # Controlador de carritos.

┃ ┃ ┣ orders.controller.js      # Controlador de pedidos.

┃ ┃ ┣ products.controller.js    # Controlador de productos.

┃ ┃ ┣ tickets.controller.js     # Controlador de tickets.

┃ ┃ ┗ users.controller.js       # Controlador de usuarios.

┃ ┣ dao

┃ ┃ ┣ classes

┃ ┃ ┃ ┣ business.dao.js         # Operaciones de negocio en la base de datos.

┃ ┃ ┃ ┣ cart.dao.js             # Operaciones de carrito en la base de datos.

┃ ┃ ┃ ┣ order.dao.js            # Operaciones de pedidos en la base de datos.

┃ ┃ ┃ ┣ product.dao.js          # Operaciones de productos en la base de datos.

┃ ┃ ┃ ┣ ticket.dao.js           # Operaciones de tickets en la base de datos.

┃ ┃ ┃ ┗ user.dao.js             # Operaciones de usuarios en la base de datos.

┃ ┃ ┗ models

┃ ┃ ┃ ┣ business.model.js       # Modelo de negocio.

┃ ┃ ┃ ┣ order.model.js          # Modelo de pedido.

┃ ┃ ┃ ┣ ticket.model.js         # Modelo de ticket.

┃ ┃ ┃ ┗ user.model.js           # Modelo de usuario.

┃ ┣ dto

┃ ┃ ┣ order.dto.js              # DTO para pedidos.

┃ ┃ ┣ ticket.dto.js             # DTO para tickets.

┃ ┃ ┗ user.dto.js               # DTO para usuarios.

┃ ┣ middlewares

┃ ┃ ┣ auth.middleware.js        # Middleware para autenticar usuarios.

┃ ┃ ┗ authenticateToken.js      # Middleware para validar el token JWT.

┃ ┣ repositorio

┃ ┃ ┣ cart.repository.js        # Repositorio de carritos.

┃ ┃ ┣ order.repository.js       # Repositorio de pedidos.

┃ ┃ ┣ product.repository.js     # Repositorio de productos.

┃ ┃ ┣ ticket.repository.js      # Repositorio de tickets.

┃ ┃ ┗ user.repository.js        # Repositorio de usuarios.

┃ ┣ routes

┃ ┃ ┣ authRouter.js             # Rutas de autenticación.

┃ ┃ ┣ business.router.js        # Rutas de negocios.

┃ ┃ ┣ carts.router.js           # Rutas de carritos.

┃ ┃ ┣ orders.router.js          # Rutas de pedidos.

┃ ┃ ┣ products.router.js        # Rutas de productos.

┃ ┃ ┣ tickets.router.js         # Rutas de tickets.

┃ ┃ ┗ users.router.js           # Rutas de usuarios.

┃ ┗ app.js                      # Archivo principal para iniciar la aplicación.

┣ .env                          # Variables de entorno.

┣ .env.example                  # Ejemplo de archivo .env.

┣ .gitignore                    # Archivos y carpetas a ignorar por Git.

┣ package-lock.json             # Bloqueo de versiones de dependencias.

┗ package.json                  # Dependencias y scripts de la aplicación.

Descripción
Este proyecto es una API RESTful que permite realizar operaciones CRUD sobre usuarios, productos, pedidos y tickets. 
Además, la autenticación se maneja con JWT y las rutas están protegidas por middleware.

Características
Autenticación JWT: El sistema permite registrar, iniciar sesión y verificar usuarios mediante JWT.
Gestión de productos: Puedes crear, listar, actualizar y eliminar productos.
Gestión de carritos y pedidos: Los usuarios pueden agregar productos a su carrito y realizar pedidos.
Gestión de tickets: Los tickets se generan para cada pedido realizado.
Envío de SMS: Integración con Twilio para enviar mensajes SMS de prueba.

Configuración del Proyecto

Instala las dependencias:
npm install
Configura el archivo .env:
Con los datos que se encuentran en .env.example

Inicia el servidor:
npm start
El servidor debería estar corriendo en http://localhost:8080.

Rutas de la API
A continuación, se presentan algunas rutas clave de la API:

Autenticación
POST /auth/register: Registra un nuevo usuario.
POST /auth/login: Inicia sesión con el email y la contraseña.
GET /auth/verify: Verifica el JWT del usuario.

Usuarios
GET /api/users: Lista todos los usuarios (requiere autenticación).
GET /api/users/:id: Obtiene los detalles de un usuario específico (requiere autenticación).

Productos
GET /api/products: Lista todos los productos.
POST /api/products: Crea un nuevo producto.
GET /api/products/:id: Obtiene los detalles de un producto específico.

Pedidos
GET /api/orders: Lista todos los pedidos (requiere autenticación).
POST /api/orders: Crea un nuevo pedido.
GET /api/orders/:id: Obtiene los detalles de un pedido específico.

Tickets
POST /api/tickets: Crea un nuevo ticket.
GET /api/tickets: Lista todos los tickets.
SMS
GET /sms: Envia un SMS de prueba usando Twilio.

