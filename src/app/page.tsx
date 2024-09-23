import Image from "next/image";
import styles from "./page.module.css";
import MiData from "./components/MiData";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        Aprende a Conectar MySQL con Next.js
        <hr />
      </h1>
      <Image src="/logo-nextjs.png" alt="Next.js Logo" width={250} height={150} />
      <MiData />
    </main>
  );
}
