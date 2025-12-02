# 🛋️ E‑commerce Mueblería Hermanos Jota — Sprint 7 & 8 (Full Stack MERN)

## 👥 Integrantes del equipo

* Aldave, Daniel
* Arrestegui, Tomás
* Avendaño Zacarias, Tomás
* Bardini, Eugenio
* Bauer, Agustín

---

## 📄 Descripción del Proyecto

Este proyecto corresponde a los **Sprints 7 y 8** del desarrollo de la plataforma de e‑commerce para *Mueblería Hermanos Jota*, parte del curso Full Stack Developer (ITBA).

En esta entrega final se implementaron:

* **Autenticación y autorización con JWT**, incluyendo registro, login, logout y rutas protegidas.
* **Carrito persistente sincronizado con backend**.
* **Gestión de pedidos**, con visualización de pedidos del usuario autenticado.
* **Contexto global de autenticación (AuthContext)** con persistencia en localStorage.
* **Rutas privadas en frontend** mediante `ProtectedRoute`.
* **Estilos renovados**, vista de login profesional y UI coherente.
* **Corrección de entorno (.env) y preparación para deploy**.

---

## ✨ Mejoras añadidas en Sprint 7 & 8

### 🔐 Autenticación (Backend + Frontend)

* Registro de usuarios con contraseña hasheada (`bcrypt`).
* Login con emisión de **JWT**.
* Middleware `authMiddleware` para proteger rutas privadas.
* Endpoint `/api/auth/profile` retorna datos del usuario autenticado.
* Contexto global `AuthContext`: login/logout, persistencia y protección.
* Navbar reactiva según autenticación.

### 🛒 Carrito y Pedidos

* Carrito sincronizado con backend.
* Endpoint `/api/pedidos` para crear y listar pedidos del usuario.
* Sección **Mis Pedidos** (vista privada).

### 🎨 Mejora visual

* Rediseño completo de la vista Login.
* Ajustes de estilo en Navbar, Carrito, Perfil y catálogo.

### 🚀 Preparación para Deploy

* Configuración `.env` separada para backend y frontend.
* Ajustes de CORS.
* Corrección de puertos.

---

## 🗂️ Estructura del repositorio

```
/client                 # Frontend (React)
/backend                # Backend (Express + MongoDB)
```

---

## 🔌 Endpoints del Backend

### 🔐 Autenticación

```
POST /api/auth/register     # Registro de usuario
POST /api/auth/login        # Login (retorna JWT)
GET  /api/auth/profile      # Datos del usuario autenticado
```

### 🛒 Pedidos

```
GET  /api/pedidos           # Lista pedidos del usuario (privado)
POST /api/pedidos           # Crea un nuevo pedido (privado)
```

### 📦 Productos

```
GET    /api/productos        # Listar productos
GET    /api/productos/:id    # Detalle de producto
POST   /api/productos        # Crear producto
PUT    /api/productos/:id    # Actualizar producto
DELETE /api/productos/:id    # Eliminar producto
```

---

## 🛠️ Tecnologías utilizadas

### Backend

* Node.js + Express
* MongoDB Atlas + Mongoose
* JWT + bcrypt
* dotenv
* CORS

### Frontend

* React + React Router DOM
* Context API (AuthContext)
* Fetch API + api wrapper (Authorization JWT)
* Hooks: `useState`, `useEffect`, `useContext`, `useParams`, `useNavigate`

---

## ⚙️ Configuración del entorno local

### 1️⃣ Backend

Crear `backend/.env`:

```
MONGODB_URI=your_mongodb_connection
PORT_BACK=5001
PORT_FRONT=http://localhost:3000
JWT_SECRET=un_secret_seguro
```

Instalar dependencias:

```
cd backend
npm install
npm start
```

Servidor: `http://localhost:5001`

---

### 2️⃣ Frontend

Crear `client/.env`:

```
REACT_APP_PORT_BACK=http://localhost:5001/api
```

Instalar dependencias:

```
cd client
npm install
npm start
```

App: `http://localhost:3000`

---

## 🧩 Checklist Sprint 7 & 8

### 🔐 Autenticación

* [x] Registro con bcrypt
* [x] Login con JWT
* [x] Middleware de protección
* [x] Rutas privadas: Perfil, Mis Pedidos
* [x] Logout funcional

### 🛍️ Carrito & Pedidos

* [x] Carrito conectado al backend
* [x] Crear pedido
* [x] Ver pedidos del usuario

### ⚛️ Frontend

* [x] AuthContext implementado
* [x] ProtectedRoute funcionando
* [x] Navbar sensible al estado del usuario
* [x] Vista Login rediseñada
* [x] Rutas nuevas: `/login`, `/perfil`, `/mis-pedidos`

### 🗄️ Backend

* [x] Nuevos modelos: User, Pedido
* [x] Nuevos routers: `authRoutes`, `pedidoRoutes`
* [x] Integración completa en `app.js`

---

## 🧪 Testing manual

* Verificación de registro/login
* Acceso a rutas protegidas sólo con token válido
* Navegación condicional en Navbar
* Carrito persistente entre recargas
* Creación y visualización de pedidos

---

## 🚀 Deploy

Backend Render: https://muebles-jota-express-react.onrender.com/
Frontend Vercel: https://muebles-jota-express-react-92u73wpss-mrmetapod2s-projects.vercel.app/

