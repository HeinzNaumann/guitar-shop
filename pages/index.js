import Blog from "../components/Blog";
import Curso from "../components/Curso";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

export default function Home({ guitarras, cursos, blogs }) {
  return (
    <Layout pagina="Incio">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado guitarras={guitarras} />
      </main>

      <Curso cursos={cursos} />
      <Blog blogs={blogs} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=created_at:desc`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resGuitarras, resCursos, resBlogs] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlogs),
  ]);

  const [guitarras, cursos, blogs] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlogs.json(),
  ]);

  return {
    props: {
      guitarras,
      cursos,
      blogs,
    },
  };
}
