import Entrada from "./Entrada";
import styles from "../styles/Blog.module.css";

const Blog = ({ blogs }) => {
  return (
    <section className="contenedor">
      <h2 className="heading">Blog</h2>

      <div className={styles.blog}>
        {blogs.map((entrada) => (
          <Entrada key={entrada.id} entrada={entrada} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
