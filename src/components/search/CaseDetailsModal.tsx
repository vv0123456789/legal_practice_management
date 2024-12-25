import React from 'react';
import { X } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';
import { getCourtName, getCategoryName } from '../../utils/courtMappings';

interface CaseDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseDetails: any;
  isLoading: boolean;
  error: string | null;
}

const CaseDetailsModal = ({ 
  isOpen, 
  onClose, 
  caseDetails, 
  isLoading,
  error 
}: CaseDetailsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4">
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
          onClick={onClose}
        />

        <div className="relative w-full sm:max-w-3xl bg-white rounded-t-lg sm:rounded-lg shadow-xl transform transition-all">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium">Case Details</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            {isLoading && (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-lg">
                {error}
              </div>
            )}

            {!isLoading && !error && caseDetails && (
              <div className="space-y-6">
                {/* Case header */}
                <div>
                  <h4 className="text-xl font-medium mb-2">
                    {caseDetails.PetitionerArray?.join(', ')} vs {caseDetails.Respondent}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div>Court: {getCourtName(caseDetails.CourtId)}</div>
                    <div>Category: {getCategoryName(caseDetails.CategoryId)}</div>
                    <div>Date: {formatDate(caseDetails.Date)}</div>
                  </div>
                </div>

                {/* Judgment text */}
                <div className="prose max-w-none">
                  <h5 className="text-lg font-medium mb-3">Judgment</h5>
                  <div className="whitespace-pre-wrap text-gray-700">
                    {caseDetails.Judgment}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetailsModal;