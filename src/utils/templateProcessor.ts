/**
 * Processes a template by replacing placeholders with actual data
 * @param content - The template content with placeholders
 * @param data - Key-value pairs of data to replace placeholders
 * @returns Processed content with replaced placeholders
 */
export const processTemplate = (
  content: string,
  data: Record<string, string>
): string => {
  let processedContent = content;
  
  // Replace placeholders in the content with actual data
  Object.entries(data).forEach(([key, value]) => {
    const regex = new RegExp(`\\[${key}\\]`, 'g');
    processedContent = processedContent.replace(regex, value);
  });
  
  return processedContent;
};