export interface DocumentTemplate {
  id: string;
  name: string;
  category: string;
  content: string;
  description?: string;
  thumbnail?: string | null;
  isBlank?: boolean;
}

export interface DocumentType {
  id: string;
  title: string;
  content: string;
  templateId?: string;
  clientId?: string;
  caseId?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  status: 'draft' | 'review' | 'final';
}