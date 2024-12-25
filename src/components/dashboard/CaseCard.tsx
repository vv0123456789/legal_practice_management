import React from 'react';
import { Case } from '../../types';

interface CaseCardProps {
  case_: Case;
}

const CaseCard = ({ case_ }: CaseCardProps) => {
  return (
    <div className="flex items-center text-sm">
      <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
      <span className="truncate">{case_.title}</span>
    </div>
  );
};

export default CaseCard;