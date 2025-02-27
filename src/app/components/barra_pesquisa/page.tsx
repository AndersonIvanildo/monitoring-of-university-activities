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