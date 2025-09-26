    
    async function loadPart(id, file) {
      const el = document.getElementById(id);
      const res = await fetch(file);
      el.innerHTML = await res.text();
    }

    loadPart("header", "public/inc/header.inc.html").then(() => {
      initCarrito();
      // Add event listener for reset cart button
      const resetBtn = document.getElementById('reset-cart');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          // Dynamically import carritoReset.js and call resetCartCount
          import('./carritoReset.js').then(module => {
            module.resetCartCount();
          });
        });
      }
    });
    loadPart("footer", "public/inc/footer.inc.html");


