import { create } from 'zustand';
import { User, Case, Client, Task, Document } from '../types';
import { mockUser, mockCases, mockTasks } from '../data/mockData';

interface AppState {
  user: User | null;
  cases: Case[];
  clients: Client[];
  tasks: Task[];
  documents: Document[];
  setUser: (user: User | null) => void;
  addCase: (newCase: Case) => void;
  updateCase: (caseId: string, updates: Partial<Case>) => void;
  addTask: (task: Task) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  addDocument: (document: Document) => void;
  updateDocument: (documentId: string, updates: Partial<Document>) => void;
}

export const useStore = create<AppState>((set) => ({
  user: mockUser, // Initialize with mock user
  cases: mockCases, // Initialize with mock cases
  clients: [],
  tasks: mockTasks, // Initialize with mock tasks
  documents: [],
  
  setUser: (user) => set({ user }),
  
  addCase: (newCase) =>
    set((state) => ({ cases: [...state.cases, newCase] })),
  
  updateCase: (caseId, updates) =>
    set((state) => ({
      cases: state.cases.map((c) =>
        c.id === caseId ? { ...c, ...updates } : c
      ),
    })),
  
  addTask: (task) =>
    set((state) => ({ tasks: [...state.tasks, task] })),
  
  updateTask: (taskId, updates) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId ? { ...t, ...updates } : t
      ),
    })),
  
  addDocument: (document) =>
    set((state) => ({ documents: [...state.documents, document] })),
  
  updateDocument: (documentId, updates) =>
    set((state) => ({
      documents: state.documents.map((d) =>
        d.id === documentId ? { ...d, ...updates } : d
      ),
    })),
}));