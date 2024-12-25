import { SearchError } from './searchService';

const API_URL = 'https://techlegal.ddns.net/judgment-details';
const AUTH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MjY5NDY5MDMsImV4cCI6MTc1ODQ4MjkwMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.3clZzY21WDhKx7OSNSgIYw43lkbW6Ci21NLHBB-S7lI';

export const getCaseDetails = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTH_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new SearchError(
        'Failed to fetch case details',
        response.status,
        response.statusText
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof SearchError) {
      throw error;
    }
    throw new SearchError(
      error instanceof Error ? error.message : 'Failed to fetch case details'
    );
  }
};