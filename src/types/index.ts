export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'lawyer' | 'paralegal';
  avatar?: string;
}

export interface Case {
  id: string;
  title: string;
  clientId: string;
  description: string;
  status: 'active' | 'pending' | 'closed';
  priority: 'high' | 'medium' | 'low';
  assignedTo: string[];
  createdAt: string;
  updatedAt: string;
  nextHearing?: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  cases: string[];
  documents: Document[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  caseId?: string;
  assignedTo: string;
  assignedBy: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  createdAt: string;
}

export interface Document {
  id: string;
  title: string;
  content: string;
  caseId?: string;
  clientId?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}