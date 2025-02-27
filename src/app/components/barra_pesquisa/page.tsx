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

// // app/components/barra_pesquisa/barra_pesquisa.tsx
// "use client";
// import { useState } from 'react';
// import styles from "@/app/components/barra_pesquisa/barra_pesquisa.module.css";
// import RegistrationForm from "@/app/components/adicionarAtividade/page";

// export default function BarraPesquisa() {
//   const [showForm, setShowForm] = useState(false);

//   // Função para fechar o formulário
//   const handleCloseForm = () => {
//     setShowForm(false);
//   };

//   return (
//     <div>
//       <div className={styles.secaoPesquisa}>
//         <input type="text" placeholder="Digite um Evento ou Clique em Adicionar" />
//         <button onClick={() => setShowForm(!showForm)}> Adicionar Um Evento </button>
//       </div>

//       {/* Exibe o formulário se showForm for true */}
//       {showForm && <RegistrationForm onClose={handleCloseForm} />}
//     </div>
//   );
// }

// app/components/barra_pesquisa/page.tsx
// "use client";
// import { useActivities } from '@/app/context/ActivityContext';
// import styles from "@/app/components/barra_pesquisa/barra_pesquisa.module.css";
// import RegistrationForm from "@/app/components/adicionarAtividade/page";
// import { useState } from 'react';

// export default function BarraPesquisa() {
//   const [showForm, setShowForm] = useState(false);
//   const { searchQuery, setSearchQuery } = useActivities();

//   const handleCloseForm = () => {
//     setShowForm(false);
//   };

//   return (
//     <div>
//       <div className={styles.secaoPesquisa}>
//         <input
//           type="text"
//           placeholder="Digite um Evento ou Clique em Adicionar"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button onClick={() => setShowForm(!showForm)}> 
//           Adicionar Um Evento 
//         </button>
//       </div>
//       {showForm && <RegistrationForm onClose={handleCloseForm} />}
//     </div>
//   );
// }

// app/components/barra_pesquisa/page.tsx
"use client";
import { useActivities } from '@/app/context/ActivityContext';
import Link from 'next/link';
import styles from "@/app/components/barra_pesquisa/barra_pesquisa.module.css";

export default function BarraPesquisa() {
  const { searchQuery, setSearchQuery } = useActivities();

  return (
    <div className={styles.secaoPesquisa}>
      <input
        type="text"
        placeholder="Pesquisar atividades..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className={styles.searchButton}>
        Buscar
      </button>
    </div>
  );
}