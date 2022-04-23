import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";
const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
            layout="responsive"
          />
          <div>
            <p>
              Morbi maximus ac sem sit amet tristique. Aliquam placerat ipsum
              turpis, a ullamcorper nisl molestie sollicitudin. Duis venenatis
              metus et arcu laoreet viverra. Sed nec sapien lectus. Vestibulum
              lobortis eleifend ex, sed vestibulum quam laoreet ut. Nulla auctor
              purus vel tellus feugiat semper. Praesent id luctus urna, sed
              facilisis massa. Nulla congue nunc sit amet nibh finibus
              porttitor. Nam porta, nisl ut vulputate fermentum, dolor lectus
              gravida metus, vitae eleifend ex enim ut urna. Curabitur aliquet
              luctus aliquam.{" "}
            </p>
            <p>
              Morbi maximus ac sem sit amet tristique. Aliquam placerat ipsum
              turpis, a ullamcorper nisl molestie sollicitudin. Duis venenatis
              metus et arcu laoreet viverra. Sed nec sapien lectus. Vestibulum
              lobortis eleifend ex, sed vestibulum quam laoreet ut. Nulla auctor
              purus vel tellus feugiat semper. Praesent id luctus urna, sed
              facilisis massa. Nulla congue nunc sit amet nibh finibus
              porttitor. Nam porta, nisl ut vulputate fermentum, dolor lectus
              gravida metus, vitae eleifend ex enim ut urna. Curabitur aliquet
              luctus aliquam.{" "}
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
