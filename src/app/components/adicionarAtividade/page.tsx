"use client";
import { useState } from 'react';
import { useActivities } from '@/app/context/ActivityContext';
import styles from './form_atividade.module.css';
interface Activity {
  id: string;
  name: string;
  responsible: string;
  date: string;
  description: string;
}

export let activities: Activity[] = [];

interface RegistrationFormProps {
  onClose: () => void;
}

export default function RegistrationForm({ onClose }: RegistrationFormProps) {
  const { addActivity } = useActivities();
  const [name, setName] = useState('');
  const [responsible, setResponsible] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) newErrors.name = 'Activity name is required';
    if (!responsible.trim()) newErrors.responsible = 'Responsible person is required';
    if (!date) newErrors.date = 'Date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newActivity = {
        id: Date.now().toString(),
        name,
        responsible,
        date,
        description,
      };

      // Adiciona a atividade ao contexto
      addActivity(newActivity);

      // Fecha o formulário
      onClose();
      
      // Limpa o formulário
      resetForm();
      
      alert('Activity saved successfully!');
    }
  };

  const resetForm = () => {
    setName('');
    setResponsible('');
    setDate('');
    setDescription('');
    setErrors({});
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Academic Activity Registration</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
           <label htmlFor="name">Activity Name:</label>
           <input
             id="name"
             type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
             className={errors.name ? styles.errorInput : ''}
           />
           {errors.name && <span className={styles.error}>{errors.name}</span>}
         </div>

         <div className={styles.inputGroup}>
           <label htmlFor="responsible">Responsible Person:</label>
           <input
             id="responsible"
             type="text"
             value={responsible}
             onChange={(e) => setResponsible(e.target.value)}
             className={errors.responsible ? styles.errorInput : ''}
           />
           {errors.responsible && <span className={styles.error}>{errors.responsible}</span>}
         </div>

         <div className={styles.inputGroup}>
           <label htmlFor="date">Date:</label>
           <input
             id="date"
             type="date"
             value={date}
             onChange={(e) => setDate(e.target.value)}
             className={errors.date ? styles.errorInput : ''}
           />
           {errors.date && <span className={styles.error}>{errors.date}</span>}
         </div>

         <div className={styles.inputGroup}>
           <label htmlFor="description">Description:</label>
           <textarea
             id="description"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
             rows={4}
           />
         </div>

         <div className={styles.buttonGroup}>
           <button type="submit" className={styles.saveButton}>
             Save Activity
           </button>
           <button type="button" onClick={resetForm} className={styles.clearButton}>
             Clear Entries
           </button>
         </div>
      </form>
    </div>
  );
}
