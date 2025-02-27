"use client";
import styles from "@/app/components/resultados/resultado.module.css";
import CardAtividade from "../cardAtividade/page";
import { useActivities } from '@/app/context/ActivityContext';
export default function Conteudo() {
    const { activities } = useActivities();
  
    return (
      <div className={styles.conteudo}>
        {activities.map((activity) => (
          <CardAtividade key={activity.id} activity={activity} />
        ))}
      </div>
    );
  }
