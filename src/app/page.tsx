import Image from "next/image";
import "./styles/home.css";
import MiData from "./components/MiData"; // Importando el componente

export default function Home() {
  return (
    <main className="my_main">
      <h1>
        Aprende a Conectar MySQL con Next.js
        <hr />
      </h1>
      <div className="my_logos">
        <Image src="/imgs/logo-mysql.webp" alt="MySQL Logo" width={150} height={150} />
        <Image src="/imgs/logo-nextjs.png" alt="Next.js Logo" width={250} height={150} />
      </div>
      <MiData />
    </main>
  );
}
