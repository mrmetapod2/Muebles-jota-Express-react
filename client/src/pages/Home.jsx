//este archivo es el equivalente a index.html

import styles from "../css/index.module.css";

import HeroBanner from "../componentes/HeroBanner";
import ProductosDestacados from "../componentes/productos";

function Home() {


  return (
    <>

      <main className={styles.main}>
        <HeroBanner />

        <ProductosDestacados />
      </main>

     
    </>
  );
}

export default Home;
