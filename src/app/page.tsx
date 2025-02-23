import styles from "@/app/page.module.css"
import Menu from "./components/menu/page";
import BarraPesquisa from "./components/barra_pesquisa/page";
import Conteudo from "./components/resultados/page";

export default function Home() {
  return (
    <div className={styles.all}>
      <Menu />
      <BarraPesquisa />
      <Conteudo />
    </div>
  );
}
