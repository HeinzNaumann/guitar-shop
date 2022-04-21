import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>Desde Index</h1>
      <Link href="/nosotros">Ir a nosotros</Link>
    </Layout>
  );
}
