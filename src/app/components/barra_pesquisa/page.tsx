// import styles from "@/app/components/barra_pesquisa/barra_pesquisa.module.css"
// import Link from "next/link";

// export default function BarraPesquisa() {
//     return (
//         <div className={styles.secaoPesquisa}>
//             <input type="text" placeholder="Digite um Evento ou Clique em Adicionar"/>
//             <Link href="/src/app/components/adicionar_evento/page.tsx">
//                 <button> Adicionar Um Evento </button>
//             </Link>
//         </div>
//     );
// }

// app/components/barra_pesquisa/barra_pesquisa.tsx
"use client";
import { useState } from 'react';
import styles from "@/app/components/barra_pesquisa/barra_pesquisa.module.css";
import RegistrationForm from "@/app/components/adicionarAtividade/page";

export default function BarraPesquisa() {
  const [showForm, setShowForm] = useState(false);

  // Função para fechar o formulário
  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <div className={styles.secaoPesquisa}>
        <input type="text" placeholder="Digite um Evento ou Clique em Adicionar" />
        <button onClick={() => setShowForm(!showForm)}> Adicionar Um Evento </button>
      </div>

      {/* Exibe o formulário se showForm for true */}
      {showForm && <RegistrationForm onClose={handleCloseForm} />}
    </div>
  );
}