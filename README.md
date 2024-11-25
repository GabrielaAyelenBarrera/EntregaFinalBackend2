EntregaFinalBackend2
 ┣ src
 ┃ ┣ autenticacion
 ┃ ┃ ┣ auth.controller.js
 ┃ ┃ ┣ auth.middleware.js
 ┃ ┃ ┣ auth.router.js
 ┃ ┃ ┣ auth.service.js
 ┃ ┃ ┗ jwtUtils.js
 ┃ ┣ controllers
 ┃ ┃ ┣ business.controller.js
 ┃ ┃ ┣ carts.controller.js
 ┃ ┃ ┣ orders.controller.js
 ┃ ┃ ┣ products.controller.js
 ┃ ┃ ┣ tickets.controller.js
 ┃ ┃ ┗ users.controller.js
 ┃ ┣ dao
 ┃ ┃ ┣ classes
 ┃ ┃ ┃ ┣ business.dao.js
 ┃ ┃ ┃ ┣ cart.dao.js
 ┃ ┃ ┃ ┣ order.dao.js
 ┃ ┃ ┃ ┣ product.dao.js
 ┃ ┃ ┃ ┣ ticket.dao.js
 ┃ ┃ ┃ ┗ user.dao.js
 ┃ ┃ ┗ models
 ┃ ┃ ┃ ┣ business.model.js
 ┃ ┃ ┃ ┣ order.model.js
 ┃ ┃ ┃ ┣ ticket.model.js
 ┃ ┃ ┃ ┗ user.model.js
 ┃ ┣ dto
 ┃ ┃ ┣ order.dto.js
 ┃ ┃ ┣ ticket.dto.js
 ┃ ┃ ┗ user.dto.js
 ┃ ┣ middlewares
 ┃ ┃ ┣ auth.middleware.js
 ┃ ┃ ┗ authenticateToken.js
 ┃ ┣ repositorio
 ┃ ┃ ┣ cart.repository.js
 ┃ ┃ ┣ order.repository.js
 ┃ ┃ ┣ product.repository.js
 ┃ ┃ ┣ ticket.repository.js
 ┃ ┃ ┗ user.repository.js
 ┃ ┣ routes
 ┃ ┃ ┣ authRouter.js
 ┃ ┃ ┣ business.router.js
 ┃ ┃ ┣ carts.router.js
 ┃ ┃ ┣ orders.router.js
 ┃ ┃ ┣ products.router.js
 ┃ ┃ ┣ tickets.router.js
 ┃ ┃ ┗ users.router.js
 ┃ ┗ app.js
 ┣ .env
 ┣ .env.example
 ┣ .gitignore
 ┣ package-lock.json
 ┗ package.json

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

