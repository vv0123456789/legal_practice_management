import { Case, Client, Task, Document, User } from '../../types';

// Base API configuration
const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

// Generic API request handler
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, {
    ...options,
    headers: {
      ...API_CONFIG.headers,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

// API Services
export const userService = {
  getCurrentUser: () => apiRequest<User>('/users/me'),
  updateProfile: (data: Partial<User>) => 
    apiRequest<User>('/users/me', {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
};

export const caseService = {
  getCases: () => apiRequest<Case[]>('/cases'),
  getCase: (id: string) => apiRequest<Case>(`/cases/${id}`),
  createCase: (data: Omit<Case, 'id'>) =>
    apiRequest<Case>('/cases', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  updateCase: (id: string, data: Partial<Case>) =>
    apiRequest<Case>(`/cases/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
};

export const taskService = {
  getTasks: () => apiRequest<Task[]>('/tasks'),
  getTask: (id: string) => apiRequest<Task>(`/tasks/${id}`),
  createTask: (data: Omit<Task, 'id'>) =>
    apiRequest<Task>('/tasks', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  updateTask: (id: string, data: Partial<Task>) =>
    apiRequest<Task>(`/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
};

export const clientService = {
  getClients: () => apiRequest<Client[]>('/clients'),
  getClient: (id: string) => apiRequest<Client>(`/clients/${id}`),
  createClient: (data: Omit<Client, 'id'>) =>
    apiRequest<Client>('/clients', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  updateClient: (id: string, data: Partial<Client>) =>
    apiRequest<Client>(`/clients/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
};

export const documentService = {
  getDocuments: () => apiRequest<Document[]>('/documents'),
  getDocument: (id: string) => apiRequest<Document>(`/documents/${id}`),
  createDocument: (data: Omit<Document, 'id'>) =>
    apiRequest<Document>('/documents', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  updateDocument: (id: string, data: Partial<Document>) =>
    apiRequest<Document>(`/documents/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
};