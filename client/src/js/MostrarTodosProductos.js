  // Función que simula la carga asíncrona
  function cargarProductos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000); // 1 segundo de "espera"
    });
  }

  // Función para renderizar
  async function renderizarProductos(limite = null) {
    console.log("renderizarProductos called with limite =", limite);
    const contenedor = document.getElementById("productos-container");
    contenedor.innerHTML = "<p>Cargando productos...</p>"; // mensaje de carga

    let lista = await cargarProductos(); // espera la carga asíncrona
    contenedor.innerHTML = ""; // limpiar mensaje de carga
    
    if (limite) {
      lista = lista
        .sort(() => 0.5 - Math.random()) // mezclar aleatoriamente
        .slice(0, limite); // tomar "limite" elementos
    }

    lista.forEach(p => {//por cada elemento en la lista
      console.log(limite);
      const card = document.createElement("div"); // se crea la carta
      card.classList.add("producto-card");

      const img = document.createElement("img"); // se añande la imagen
      img.src = p.img;
      img.alt = p.nombre;

      const nombre = document.createElement("h3"); // el nombre
      nombre.textContent = p.nombre;

      const precio = document.createElement("p"); // el precio
      precio.classList.add("precio");
      precio.textContent = p.precio;

      const boton = document.createElement("button"); // el boton
      boton.textContent = "Ver más";
      boton.addEventListener("click", () => {
        location.href = `producto.html?id=${p.id}`;
      });

      // armar la tarjeta
      card.appendChild(img);
      card.appendChild(nombre);
      card.appendChild(precio);
      card.appendChild(boton);

      contenedor.appendChild(card);
    });
  }

