# 🛋️ E-commerce Mueblería Hermanos Jota — Sprint 5 & 6 (Full Stack MERN)

## 👥 Integrantes del equipo
- **Aldave, Daniel**  
- **Arrestegui, Tomas**  
- **Avendaño Zacarias, Tomas**  
- **Bardini, Eugenio**  
- **Bauer, Agustin**  

---

## 📄 Descripción del proyecto
Este proyecto corresponde al **Sprint 5 y 6** del desarrollo de la plataforma de e-commerce para **Mueblería Hermanos Jota**. 

El objetivo fue conectar el frontend en React con un backend en Express y base de datos en MongoDB Atlas, cumpliendo con los requisitos de persistencia, CRUD completo y consumo de API real.

## ✨ Principales mejoras respecto al Sprint anterior

📡 **Conexión real a MongoDB Atlas** (persistencia en la nube).

🧩 **API CRUD completa** para productos con Express y Mongoose.

🧭 **React Router DOM** para navegación dinámica entre páginas.

🧾 **Formulario controlado** para crear productos nuevos desde el frontend.

🗑️ **Eliminación de productos** desde el detalle con confirmación y redirección automática.

⚙️ **Estados de carga y error** al consumir la API.

---

## 🛠️ Tecnologías utilizadas
### Backend
- **Node.js + Express** → Servidor y API REST.
- **MongoDB Atlas + Mongoose** → Base de datos en la nube 
- **dotenv** → Variables de entorno
- **CORS** → Permitir peticiones del frontend

### Frontend
- **React (CRA)** → Renderizado de componentes.  
- **React Router DOM** → Rutas dinámicas y navegación.
- **Fetch API** → consumo del backend.  
- **Hooks** →  (`useState`, `useEffect`,`useParams`,`useNavigate`)
---

## 📁 Estructura del repositorio
/client                # `Frontend (React)`
/backend               # `Backend (Express + Mongoose)`
README.md

---

## 🔌 Endpoints de la API
- `GET /api/productos` → Devuelve todos los productos.
- `GET /api/productos/:id` → Devuelve un producto por su _id.
- `POST /api/productos` → Crea un nuevo producto.
- `PUT /api/productos/:id` → Actualiza un producto existente.
- `DELETE /api/productos/:id` → Elimina un producto de la base de datos.   

---
## ⚙️ Configuración del entorno local

**1️⃣ Variables de entorno**

## 📂 Crea el archivo backend/.env

`MONGODB_URI=mongodb+srv://<usuario>:<password>@<cluster>/<db>?retryWrites=true&w=majority
PORT=5001
PORT_FRONT=http://localhost:3000`

## 📂 Crea el archivo client/.env
`REACT_APP_PORT_BACK=http://localhost:5001/api/productos`

### 1) Backend
```bash
cd backend
npm install
npm run start
# Servidor en http://localhost:5001   
```

### 2) Frontend
En otra terminal:
```bash
cd client
npm install
npm start
# App en http://localhost:3000
```

---

## ✅ Checklist de la consigna
## 🧩 Backend (API)
- [x] Conexión a MongoDB Atlas usando `.env`
- [x] Modelo Mongoose Product con `nombre`, `descripcion`, `precio`, `stock`, `imagenUrl`  
- [x] CRUD completo en `routes/productRoutes.js`  
- [x] Endpoints implementados correctamente
      
## ⚛️ Frontend (React)
- [x] Enrutamiento con **React Router DOM**
- [x] Catálogo con **fetch real** a la API 
- [x] Detalle dinámico con `useParams`
- [x] Formulario de creación de producto (controlado)
- [x] Redirección con `useNavigate`
- [x] Botón de eliminación con confirmación

