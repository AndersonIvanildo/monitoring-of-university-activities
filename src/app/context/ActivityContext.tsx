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
}

const ActivityContext = createContext<ActivityContextType | null>(null);

export function ActivityProvider({ children }: { children: React.ReactNode }) {
  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = (activity: Activity) => {
    setActivities((prev) => [...prev, activity]);
  };

  return (
    <ActivityContext.Provider value={{ activities, addActivity }}>
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
