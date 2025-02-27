// // "use client";
// // import { createContext, useContext, useState } from 'react';

// // interface Activity {
// //   id: string;
// //   name: string;
// //   responsible: string;
// //   date: string;
// //   description: string;
// // }

// // interface ActivityContextType {
// //   activities: Activity[];
// //   addActivity: (activity: Activity) => void;
// // }

// // const ActivityContext = createContext<ActivityContextType | null>(null);

// // export function ActivityProvider({ children }: { children: React.ReactNode }) {
// //   const [activities, setActivities] = useState<Activity[]>([]);

// //   const addActivity = (activity: Activity) => {
// //     setActivities((prev) => [...prev, activity]);
// //   };

// //   return (
// //     <ActivityContext.Provider value={{ activities, addActivity }}>
// //       {children}
// //     </ActivityContext.Provider>
// //   );
// // }

// // export function useActivities() {
// //   const context = useContext(ActivityContext);
// //   if (!context) {
// //     throw new Error('useActivities must be used within an ActivityProvider');
// //   }
// //   return context;
// // }

// // app/context/ActivityContext.tsx
// "use client";
// import { createContext, useContext, useState } from 'react';

// interface Activity {
//   id: string;
//   name: string;
//   responsible: string;
//   date: string;
//   description: string;
// }

// interface ActivityContextType {
//   activities: Activity[];
//   addActivity: (activity: Activity) => void;
//   searchQuery: string;
//   setSearchQuery: (query: string) => void;
// }

// const ActivityContext = createContext<ActivityContextType | null>(null);

// export function ActivityProvider({ children }: { children: React.ReactNode }) {
//   const [activities, setActivities] = useState<Activity[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   const addActivity = (activity: Activity) => {
//     setActivities((prev) => [...prev, activity]);
//   };

//   return (
//     <ActivityContext.Provider value={{ activities, addActivity, searchQuery, setSearchQuery }}>
//       {children}
//     </ActivityContext.Provider>
//   );
// }

// export function useActivities() {
//   const context = useContext(ActivityContext);
//   if (!context) {
//     throw new Error('useActivities must be used within an ActivityProvider');
//   }
//   return context;
// }

// app/context/ActivityContext.tsx
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
  deleteActivity: (id: string) => void; // Adicione esta linha
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

  // Função para deletar atividade
  const deleteActivity = (id: string) => {
    setActivities(prev => prev.filter(activity => activity.id !== id));
  };

  return (
    <ActivityContext.Provider value={{ activities, addActivity, deleteActivity, searchQuery, setSearchQuery }}>
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