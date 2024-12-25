import { SearchResult } from '../../types/search';

const API_URL = 'https://techlegal.ddns.net/judgment-search';
const AUTH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MjY5NDY5MDMsImV4cCI6MTc1ODQ4MjkwMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.3clZzY21WDhKx7OSNSgIYw43lkbW6Ci21NLHBB-S7lI';

export class SearchError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
    public readonly statusText?: string
  ) {
    super(message);
    this.name = 'SearchError';
  }
}

export const searchJudgments = async (query: string, page = 1): Promise<SearchResult> => {
  if (!query.trim()) {
    return {
      info: {
        totalResults: 0,
        totalPages: 0,
        currentPage: 1,
        categoryCounts: []
      },
      results: []
    };
  }

  try {
    const url = `${API_URL}?s=${encodeURIComponent(query)}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTH_TOKEN}`
      },
      body: JSON.stringify({
        page_index: page
      }),
      credentials: 'omit'
    });

    if (!response.ok) {
      throw new SearchError(
        'Search request failed',
        response.status,
        response.statusText
      );
    }

    const data = await response.json();
    
    if (!data || !Array.isArray(data.results)) {
      throw new SearchError('Invalid response format from search API');
    }

    return data;
  } catch (error) {
    if (error instanceof SearchError) {
      throw error;
    }
    throw new SearchError(
      error instanceof Error ? error.message : 'An unexpected error occurred'
    );
  }
};