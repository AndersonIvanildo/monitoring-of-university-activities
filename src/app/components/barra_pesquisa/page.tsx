import styles from "@/app/components/barra_pesquisa/barra_pesquisa.module.css"

export default function BarraPesquisa() {
    return (
        <div className={styles.secaoPesquisa}>
            <div></div>
            <input type="text" placeholder="Digite um Evento" />
            <button> Buscar </button>
        </div>
    )
}
