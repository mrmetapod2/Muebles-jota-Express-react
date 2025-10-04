# 🛋️ E-commerce Mueblería Hermanos Jota (Sprint 3 y 4)

## 👥 Integrantes del equipo
- **Aldave, Daniel**  
- **Arrestegui, Tomas**  
- **Avendaño Zacarias, Tomas**  
- **Bardini, Eugenio**  
- **Bauer, Agustin**  

---

## 📄 Descripción del proyecto
Este proyecto corresponde al **Sprint 3 y 4** del desarrollo de la plataforma de e-commerce para **Mueblería Hermanos Jota**. 

El objetivo principal fue evolucionar la maqueta inicial hacia una aplicación **full stack** simple:
- **Backend** en **Node.js + Express**, que expone una API REST con los productos desde un **array local**.
- **Frontend** en **React (Create React App)**, que consume esa API, renderiza el catálogo, gestiona un carrito básico y un formulario de contacto controlado.

### ✨ Funcionalidades implementadas
- 🛍️ **Catálogo** cargado dinámicamente desde el backend (`GET /api/productos`).  
- 🔎 **Detalle de producto** por renderizado condicional (sin React Router).  
- 🛒 **Carrito básico**: contador en la barra de navegación que refleja productos agregados.  
- 📬 **Formulario de contacto controlado** en React, con validación mínima y confirmación en pantalla.  
- ⚙️ **Manejo de estados de carga y error** al consumir la API.  
- 📡 **API modularizada en Express** con middlewares para logging, 404 y manejo de errores.  

---

## 🛠️ Tecnologías utilizadas
### Backend
- **Node.js (v18.20.8 LTS) + Express** → API REST.  
- **CORS y middlewares propios** → logging, 404 y errores.  
- **Array local** → fuente de datos de productos.  

### Frontend
- **React (CRA)** → Renderizado de componentes.  
- **Hooks (`useState`, `useEffect`)** → manejo de estados, efectos y formularios.  
- **Fetch API** → consumo del backend.  
- **CSS base** → estilos simples y diseño responsivo. 
