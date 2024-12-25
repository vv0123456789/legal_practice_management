export const courts: Record<number, string> = {
  32: 'Gujarat High Court',
  46: 'Karnataka High Court',
  // Add more courts as needed
};

export const categories: Record<number, string> = {
  1: 'Income Tax',
  2: 'Civil',
  3: 'Criminal',
  4: 'Constitutional',
  5: 'Corporate',
  // Add more categories as needed
};

export const getCourtName = (courtId: number): string => {
  return courts[courtId] || `Court ${courtId}`;
};

export const getCategoryName = (categoryId: number): string => {
  return categories[categoryId] || `Category ${categoryId}`;
};