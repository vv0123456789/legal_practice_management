import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { DocumentTemplate } from '../../types/documents';
import { Client } from '../../types';

interface CreateDocumentModalProps {
  template: DocumentTemplate;
  onClose: () => void;
  isOpen: boolean;
}

const CreateDocumentModal = ({
  template,
  onClose,
  isOpen,
}: CreateDocumentModalProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [clientId, setClientId] = useState('');
  const [documentName, setDocumentName] = useState('');
  const [note, setNote] = useState('');
  const [isNewClient, setIsNewClient] = useState(false);
  const [newClientName, setNewClientName] = useState('');

  // Mock clients - replace with actual client data from your store
  const mockClients: Client[] = [
    { id: '1', name: 'John Smith', email: '', phone: '', address: '', cases: [], documents: [] },
    { id: '2', name: 'Jane Doe', email: '', phone: '', address: '', cases: [], documents: [] },
  ];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Navigate to the editor with template and form data
    navigate('/documents/edit', {
      state: {
        template,
        documentName,
        clientId: isNewClient ? newClientName : clientId,
        note
      }
    });
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
        
        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4">
                {t('documents.createNew')} - {template.name}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('documents.clientSelection')}
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="existingClient"
                        checked={!isNewClient}
                        onChange={() => setIsNewClient(false)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor="existingClient" className="ml-2 block text-sm text-gray-900">
                        {t('documents.existingClient')}
                      </label>
                    </div>
                    {!isNewClient && (
                      <select
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        required={!isNewClient}
                      >
                        <option value="">{t('documents.selectClient')}</option>
                        {mockClients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    )}

                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="newClient"
                        checked={isNewClient}
                        onChange={() => setIsNewClient(true)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor="newClient" className="ml-2 block text-sm text-gray-900">
                        {t('documents.newClient')}
                      </label>
                    </div>
                    {isNewClient && (
                      <input
                        type="text"
                        value={newClientName}
                        onChange={(e) => setNewClientName(e.target.value)}
                        placeholder={t('documents.enterClientName')}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        required={isNewClient}
                      />
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="documentName" className="block text-sm font-medium text-gray-700">
                    {t('documents.documentName')}
                  </label>
                  <input
                    type="text"
                    id="documentName"
                    value={documentName}
                    onChange={(e) => setDocumentName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                    {t('documents.note')} ({t('common.optional')})
                  </label>
                  <textarea
                    id="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                  >
                    {t('common.create')}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={onClose}
                  >
                    {t('common.cancel')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDocumentModal;