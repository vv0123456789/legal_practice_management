import { User, Case, Task } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@legalpro.com',
  role: 'lawyer',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'
};

export const mockCases: Case[] = [
  {
    id: '1',
    title: 'Smith vs. Johnson',
    clientId: '1',
    description: 'Contract dispute case',
    status: 'active',
    priority: 'high',
    assignedTo: ['1'],
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-15T14:30:00Z',
    nextHearing: '2024-04-01T09:00:00Z'
  },
  {
    id: '2',
    title: 'Brown Estate Planning',
    clientId: '2',
    description: 'Estate planning and will preparation',
    status: 'active',
    priority: 'medium',
    assignedTo: ['1'],
    createdAt: '2024-03-12T11:00:00Z',
    updatedAt: '2024-03-14T16:45:00Z'
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Prepare court documents for Smith case',
    description: 'Draft and review initial court filing documents',
    caseId: '1',
    assignedTo: '1',
    assignedBy: '2',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2024-03-20T17:00:00Z',
    createdAt: '2024-03-15T09:00:00Z'
  },
  {
    id: '2',
    title: 'Client meeting - Brown Estate',
    description: 'Review estate planning documents with client',
    caseId: '2',
    assignedTo: '1',
    assignedBy: '2',
    status: 'todo',
    priority: 'medium',
    dueDate: '2024-03-22T14:00:00Z',
    createdAt: '2024-03-15T10:30:00Z'
  }
];