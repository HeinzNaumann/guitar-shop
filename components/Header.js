import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = ({ guitarras }) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/" passHref>
            <Image
              src="/img/logo.svg"
              width={400}
              height={100}
              alt="image logo"
            />
          </Link>

          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>

        {guitarras && (
          <div className={styles.modelo}>
            <h2>Modelo {guitarras.nombre}</h2>
            <p>{guitarras.descripcion}</p>
            <p className={styles.precio}>{guitarras.precio}€</p>
            <Link href={`/guitarras/${guitarras.url}`}>
              <a className={styles.enlace}>Ver producto</a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname === "/" && (
        <div className={styles.guitarra}>
          <Image
            layout="fixed"
            width={500}
            height={1200}
            src="/img/header_guitarra.png"
            alt="imagen header guitarra"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
