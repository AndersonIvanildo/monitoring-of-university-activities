// components/menu/Menu.jsx
import Link from 'next/link';
import styles from '@/app/components/menu/menu.module.css';

// export default function Menu() {
//     return (
//       <header className={styles.header}>
//         <nav className={styles.menuContainer}>
//           <Link href="/" className={styles.menuItem}>Home</Link>
//           <Link href="" className={styles.menuItem}> Atividades </Link>
//           <a href="https://github.com/AndersonIvanildo" target="_blank" rel="noopener noreferrer" className={styles.menuItem}>
//             GitHub
//           </a>
//         </nav>
//       </header>
//     );
//   }

export default function Menu() {
  return (
    <header className={styles.header}>
      <nav className={styles.menuContainer}>
        {/* Link para a página inicial */}
        <Link href="/" className={styles.menuItem}>
          Home
        </Link>

        {/* Link para a página de adicionar atividades */}
        <Link href="/pages/adicionarAtividade" className={styles.menuItem}>
          Adicionar Atividade
        </Link>

        {/* Link externo para o GitHub */}
        <a
          href="https://github.com/AndersonIvanildo"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.menuItem}
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}