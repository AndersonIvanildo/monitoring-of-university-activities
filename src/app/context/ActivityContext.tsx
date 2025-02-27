"use client";
import { createContext, useContext, useState } from 'react';

interface Activity {
  id: string;
  name: string;
  responsible: string;
  date: string;
  description: string;
}

interface ActivityContextType {
  activities: Activity[];
  addActivity: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  updateActivity: (updatedActivity: Activity) => void; // Adicionado
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ActivityContext = createContext<ActivityContextType | null>(null);

export function ActivityProvider({ children }: { children: React.ReactNode }) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addActivity = (activity: Activity) => {
    setActivities((prev) => [...prev, activity]);
  };

  const deleteActivity = (id: string) => {
    setActivities(prev => prev.filter(activity => activity.id !== id));
  };

  // Função para atualizar atividade
  const updateActivity = (updatedActivity: Activity) => {
    setActivities(prev => 
      prev.map(activity => 
        activity.id === updatedActivity.id ? updatedActivity : activity
      )
    );
  };

  return (
    <ActivityContext.Provider value={{ 
      activities, 
      addActivity, 
      deleteActivity, 
      updateActivity, 
      searchQuery, 
      setSearchQuery 
    }}>
      {children}
    </ActivityContext.Provider>
  );
}

export function useActivities() {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error('useActivities must be used within an ActivityProvider');
  }
  return context;
}