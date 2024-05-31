import styles from "./page.module.css";
import MiData from "./components/MiData";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Conectar MySQL con Next.js</h1>
      <MiData />
    </main>
  );
}
