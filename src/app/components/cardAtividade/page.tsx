// import styles from "@/app/components/cardAtividade/atividade.module.css";

// interface Activity {
//   id: string;
//   name: string;
//   responsible: string;
//   date: string;
//   description: string;
// }

// interface CardAtividadeProps {
//   activity: Activity; // Prop para receber os dados da atividade
// }

// export default function CardAtividade({ activity }: CardAtividadeProps) {
//   return (
//     <div className={styles.card}>
//       <h2 className={styles.title}>{activity.name}</h2>
//       <p className={styles.responsible}>Responsável: {activity.responsible}</p>
//       <p className={styles.date}>Data: {new Date(activity.date).toLocaleDateString()}</p>
//       <p className={styles.description}>{activity.description}</p>
//     </div>
//   );
// }

// app/components/cardAtividade/page.tsx
"use client";
import { useState } from 'react';
import { useActivities } from '@/app/context/ActivityContext';
import styles from "@/app/components/cardAtividade/atividade.module.css";

interface Activity {
  id: string;
  name: string;
  responsible: string;
  date: string;
  description: string;
}

interface CardAtividadeProps {
  activity: Activity;
}

export default function CardAtividade({ activity }: CardAtividadeProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteActivity } = useActivities();

  const handleDelete = () => {
    deleteActivity(activity.id);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.card} onClick={() => setIsModalOpen(true)}>
      <h2 className={styles.title}>{activity.name}</h2>
      <p className={styles.responsible}>Responsável: {activity.responsible}</p>
      <p className={styles.date}>Data: {new Date(activity.date).toLocaleDateString()}</p>
      <p className={styles.description}>{activity.description}</p>

      {/* Modal de Confirmação */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p>Tem certeza que deseja excluir esta atividade?</p>
            <div className={styles.modalButtons}>
              <button className={styles.modalButton} onClick={handleDelete}>
                Sim, excluir
              </button>
              <button className={styles.modalButton} onClick={() => setIsModalOpen(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}