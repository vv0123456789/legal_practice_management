/**
 * Extracts unique placeholders from template content
 * Placeholders are identified by [placeholder] format
 */
export const extractPlaceholders = (content: string): string[] => {
  const regex = /\[([^\]]+)\]/g;
  const matches = content.match(regex) || [];
  const uniquePlaceholders = [...new Set(matches.map(m => m.slice(1, -1)))];
  return uniquePlaceholders;
};

/**
 * Replaces placeholders in content with provided values
 */
export const replacePlaceholders = (
  content: string,
  values: Record<string, string>
): string => {
  let result = content;
  Object.entries(values).forEach(([key, value]) => {
    const regex = new RegExp(`\\[${key}\\]`, 'g');
    result = result.replace(regex, value || `[${key}]`);
  });
  return result;
};