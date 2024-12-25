import { DocumentTemplate, DocumentType } from '../types/documents';

export const mockTemplates: DocumentTemplate[] = [
  {
    id: 'blank',
    name: 'New Blank Document',
    category: 'Blank',
    content: '',
    description: 'Start with a blank document',
    thumbnail: null,
    isBlank: true
  },
  {
    id: '1',
    name: 'Board Resolution',
    category: 'Contracts',
    content: "<!DOCTYPE html>\n<html lang='en'>\n<head>\n  <meta charset='UTF-8'>\n  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n  <title>Board Resolution Format</title>\n  <style>\n    body {\n      font-family: Arial, sans-serif;\n      margin: 40px;\n      line-height: 1.6;\n      color: #000;\n    }\n    .container {\n      max-width: 800px;\n      margin: 0 auto;\n    }\n    .header {\n      text-align: center;\n      margin-bottom: 20px;\n    }\n    .header h1 {\n      font-size: 20px;\n      font-weight: bold;\n    }\n    .header p {\n      font-size: 12px;\n      font-style: italic;\n    }\n    .content {\n      margin-bottom: 20px;\n    }\n    .bold {\n      font-weight: bold;\n    }\n    .editable {\n      display: inline-block;\n      min-width: 100px;\n      border-bottom: 1px dashed #aaa;\n      outline: none;\n    }\n    .editable:focus {\n      border-bottom: 2px solid #007BFF;\n    }\n    .signature {\n      margin-top: 40px;\n    }\n  </style>\n</head>\n<body>\n  <div class='container'>\n    <div class='header'>\n      <h1>Board Resolution Format</h1>\n      <p>(To be printed on organization letter head)</p>\n    </div>\n    <div class='content'>\n      <p>\n        CERTIFIED TRUE COPY OF THE RESOLUTION PASSED AT THE MEETING OF THE BOARD OF DIRECTORS\n        OF <span contenteditable='true' class='editable' placeholder='Company Name'></span> HELD ON (Date)\n        <span contenteditable='true' class='editable' placeholder='Date'></span> AT (Address)\n        <span contenteditable='true' class='editable' placeholder='Address'></span>.\n      </p>\n      <p class='bold'>RESOLVED THAT</p>\n      <p>\n        The company has decided to authorize, Mr. / Ms.\n        <span contenteditable='true' class='editable' placeholder='Authorized Person Name'></span> having Permanent Account Number (PAN)\n        <span contenteditable='true' class='editable' placeholder='PAN Number'></span> and is hereby authorized to sign and submit all the necessary papers, letters,\n        forms, etc., to be submitted by the company in connection with 'authorizing any of the personnel of the company\n        (applicant) to enrol for Digital Certificate (DSC/eSign)'. The acts done and documents shall be binding on the company,\n        until the same is withdrawn by giving written notice thereof.\n      </p>\n      <p class='bold'>RESOLVED FURTHER THAT</p>\n      <p>\n        A copy of the above resolution duly certified as true by designated director/authorized signatory of the company be\n        furnished to eMudhra Limited and such other parties as may be required from time to time in connection with the above matter.\n      </p>\n    </div>\n    <div class='signature'>\n      <p>(Seal & Signature)</p>\n      <p>Name: <span contenteditable='true' class='editable' placeholder='Name'></span></p>\n      <p>Designation: <span contenteditable='true' class='editable' placeholder='Designation'></span></p>\n    </div>\n  </div>\n</body>\n</html>",
    description: 'Standard legal agreement template',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&h=400&q=80'
  },
  {
    id: '2',
    name: 'Power of Attorney',
    category: 'Legal Forms',
    content: '# Power of Attorney\n\nKnow all men...',
    description: 'General power of attorney document',
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=300&h=400&q=80'
  },
  {
    id: '3',
    name: 'Settlement Agreement',
    category: 'Settlements',
    content: '# Settlement Agreement\n\nThis settlement agreement...',
    description: 'Standard settlement agreement',
    thumbnail: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=300&h=400&q=80'
  },
  {
    id: '4',
    name: 'Non-Disclosure Agreement',
    category: 'Contracts',
    content: '# Non-Disclosure Agreement\n\nThis NDA...',
    description: 'Confidentiality agreement template',
    thumbnail: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=300&h=400&q=80'
  },
  {
    id: '5',
    name: 'Employment Contract',
    category: 'Employment',
    content: '# Employment Contract\n\nThis employment agreement...',
    description: 'Standard employment contract',
    thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=300&h=400&q=80'
  },
  {
    id: '6',
    name: 'Will Template',
    category: 'Estate Planning',
    content: '# Last Will and Testament\n\nI, [Name]...',
    description: 'Basic will template',
    thumbnail: 'https://images.unsplash.com/photo-1565619624098-cf4168a7cd9d?auto=format&fit=crop&w=300&h=400&q=80'
  },
  // Additional templates with reused content and new IDs/names
  {
    id: '7',
    name: 'Partnership Agreement',
    category: 'Contracts',
    content: '# Legal Agreement Template\n\nThis agreement...',
    description: 'Agreement for forming a partnership',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&h=400&q=80'
  },
  {
    id: '8',
    name: 'Confidentiality Agreement',
    category: 'Legal Forms',
    content: '# Non-Disclosure Agreement\n\nThis NDA...',
    description: 'Template for confidentiality agreements',
    thumbnail: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=300&h=400&q=80'
  },
  {
    id: '9',
    name: 'Termination Agreement',
    category: 'Settlements',
    content: '# Settlement Agreement\n\nThis settlement agreement...',
    description: 'Standard termination agreement',
    thumbnail: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=300&h=400&q=80'
  },
  {
    id: '10',
    name: 'Offer Letter',
    category: 'Employment',
    content: '# Employment Contract\n\nThis employment agreement...',
    description: 'Offer letter template for new hires',
    thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=300&h=400&q=80'
  },
  {
    id: '11',
    name: 'Living Will',
    category: 'Estate Planning',
    content: '# Last Will and Testament\n\nI, [Name]...',
    description: 'Living will template for medical decisions',
    thumbnail: 'https://images.unsplash.com/photo-1565619624098-cf4168a7cd9d?auto=format&fit=crop&w=300&h=400&q=80'
  },
  // Repeated structure to reach 30 templates
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `${12 + i}`,
    name: `Template ${12 + i}`,
    category: ['Contracts', 'Legal Forms', 'Settlements', 'Employment', 'Estate Planning'][i % 5],
    content: [
      '# Legal Agreement Template\n\nThis agreement...',
      '# Power of Attorney\n\nKnow all men...',
      '# Settlement Agreement\n\nThis settlement agreement...',
      '# Non-Disclosure Agreement\n\nThis NDA...',
      '# Employment Contract\n\nThis employment agreement...',
      '# Last Will and Testament\n\nI, [Name]...'
    ][i % 6],
    description: 'Generated template for demo purposes',
    thumbnail: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&h=400&q=80',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=300&h=400&q=80',
      'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=300&h=400&q=80',
      'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=300&h=400&q=80',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=300&h=400&q=80',
      'https://images.unsplash.com/photo-1565619624098-cf4168a7cd9d?auto=format&fit=crop&w=300&h=400&q=80'
    ][i % 6]
  }))
];


export const mockDocuments: DocumentType[] = [
  {
    id: '1',
    title: 'Smith vs Johnson - Settlement Agreement',
    content: 'Settlement agreement content...',
    templateId: '3',
    clientId: '1',
    caseId: '1',
    createdBy: '1',
    createdAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-15T11:30:00Z',
    tags: ['settlement', 'contract'],
    status: 'draft'
  },
  {
    id: '2',
    title: 'Brown Estate - Will',
    content: 'Last will and testament content...',
    templateId: '6',
    clientId: '2',
    caseId: '2',
    createdBy: '1',
    createdAt: '2024-03-14T15:00:00Z',
    updatedAt: '2024-03-14T16:45:00Z',
    tags: ['will', 'estate'],
    status: 'review'
  },
  {
    id: '3',
    title: 'Tech Corp NDA',
    content: 'Non-disclosure agreement content...',
    templateId: '4',
    clientId: '3',
    createdBy: '1',
    createdAt: '2024-03-13T09:00:00Z',
    updatedAt: '2024-03-13T10:15:00Z',
    tags: ['nda', 'confidentiality'],
    status: 'final'
  }
];