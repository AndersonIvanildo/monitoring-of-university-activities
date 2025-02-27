import styles from "@/app/components/resultados/resultado.module.css"
import BarraPesquisa from "../barra_pesquisa/page"
import CardAtividade from "../cardAtividade/page"

export default function Conteudo() {
    return (
        <div className={styles.conteudo}>
            <CardAtividade />
        </div>
    )
}