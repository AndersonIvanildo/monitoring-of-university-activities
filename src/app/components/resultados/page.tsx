// "use client";
// import styles from "@/app/components/resultados/resultado.module.css";
// import CardAtividade from "../cardAtividade/page";
// import { useActivities } from '@/app/context/ActivityContext';
// export default function Conteudo() {
//     const { activities } = useActivities();
  
//     return (
//       <div className={styles.conteudo}>
//         {activities.map((activity) => (
//           <CardAtividade key={activity.id} activity={activity} />
//         ))}
//       </div>
//     );
//   }

"use client";
import { useActivities } from '@/app/context/ActivityContext';
import CardAtividade from "../cardAtividade/page";
import styles from "@/app/components/resultados/resultado.module.css";

export default function Conteudo() {
  const { activities, searchQuery } = useActivities();

  const filteredActivities = activities.filter(activity => 
    activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    activity.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.conteudo}>
      {filteredActivities.map((activity) => (
        <CardAtividade key={activity.id} activity={activity} />
      ))}
    </div>
  );
}