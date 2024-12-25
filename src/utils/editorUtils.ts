interface EditableElement {
  id: string;
  label?: string;
  content: string;
}

export const findEditableElements = (content: string): EditableElement[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const editableElements = doc.querySelectorAll('[contenteditable="true"]');
  
  return Array.from(editableElements).map((el, index) => ({
    id: `editable-${index}`,
    label: el.getAttribute('data-label') || el.getAttribute('placeholder'),
    content: el.textContent || ''
  }));
};

export const updateEditableContent = (
  container: HTMLElement,
  elementId: string,
  value: string
): void => {
  const element = container.querySelector(`[data-editable-id="${elementId}"]`);
  if (element) {
    element.textContent = value;
  }
};

export const setupEditableFields = (container: HTMLElement): void => {
  const editableElements = container.querySelectorAll('[contenteditable="true"]');
  
  editableElements.forEach((element, index) => {
    const elementId = `editable-${index}`;
    element.setAttribute('data-editable-id', elementId);
    
    // Set initial placeholder if empty
    if (!element.textContent?.trim()) {
      element.textContent = element.getAttribute('placeholder') || '';
    }

    // Handle focus event
    element.addEventListener('focus', () => {
      if (element.textContent === element.getAttribute('placeholder')) {
        element.textContent = '';
      }
      element.classList.add('ring-2', 'ring-blue-500');
    });
    
    // Handle blur event
    element.addEventListener('blur', () => {
      if (!element.textContent?.trim()) {
        element.textContent = element.getAttribute('placeholder') || '';
      }
      element.classList.remove('ring-2', 'ring-blue-500');
    });

    // Handle content changes
    element.addEventListener('input', () => {
      const event = new CustomEvent('editable-content-change', {
        detail: {
          id: elementId,
          content: element.textContent
        }
      });
      container.dispatchEvent(event);
    });

    // Prevent line breaks in inline editable fields
    element.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
      }
    });
  });
};