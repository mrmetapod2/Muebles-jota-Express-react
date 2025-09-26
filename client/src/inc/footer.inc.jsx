import React from "react";
import "../css/footer.inc.css"; // adjust path if needed

function Footer() {
  return (
    <footer>
      <div className="section" id="Showroom">
        <div className="column">
          <p>Hermanos Jota — Casa Taller</p>
        </div>
        <div className="column">
          <p>
            Av. San Juan 2847<br />
            C1232AAB — Barrio de San Cristóbal<br />
            Ciudad Autónoma de Buenos Aires<br />
            Argentina
          </p>
        </div>
        <div className="column">
          <p>
            Horarios:<br />
            Lunes a Viernes: 10:00 - 19:00
          </p>
        </div>
      </div>

      <div className="section" id="Contacto">
        <div className="column">
          <b>Sitio web</b>
          <p>www.hermanosjota.com.ar</p>
        </div>
        <div className="column">
          <b>Email general</b>
          <p>info@hermanosjota.com.ar</p>
        </div>
        <div className="column">
          <b>Ventas</b>
          <p>ventas@hermanosjota.com.ar</p>
        </div>
        <div className="column">
          <b>Instagram</b>
          <p>@hermanosjota_ba</p>
        </div>
        <div className="column">
          <b>WhatsApp</b>
          <p>+54 11 4567-8900</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
