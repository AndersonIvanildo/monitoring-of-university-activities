import styles from "@/app/components/cardAtividade/atividade.module.css";

interface Activity {
  id: string;
  name: string;
  responsible: string;
  date: string;
  description: string;
}

interface CardAtividadeProps {
  activity: Activity; // Prop para receber os dados da atividade
}

export default function CardAtividade({ activity }: CardAtividadeProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{activity.name}</h2>
      <p className={styles.responsible}>Responsável: {activity.responsible}</p>
      <p className={styles.date}>Data: {new Date(activity.date).toLocaleDateString()}</p>
      <p className={styles.description}>{activity.description}</p>
    </div>
  );
}