// components/menu/Menu.jsx
import Link from 'next/link';
import styles from '@/app/components/menu/menu.module.css';

export default function Menu() {
  return (
    <header className={styles.header}>
      <nav className={styles.menuContainer}>
        <Link href="/" className={styles.menuItem}>
          Home
        </Link>

        <Link href="/pages/adicionarAtividade" className={styles.menuItem}>
          Adicionar Atividade
        </Link>

        <a
          href="https://github.com/AndersonIvanildo/monitoring-of-university-activities"
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
