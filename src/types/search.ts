export interface SearchInfo {
  totalResults: number;
  totalPages: number;
  currentPage: number;
  categoryCounts: Array<{
    categoryId: number;
    count: number;
  }>;
}

export interface SearchResultItem {
  _index: string;
  _id: string;
  _score: number;
  _source: {
    CategoryId: number;
    PetitionerArray: string[];
    Date: string;
    CourtId: number;
    Respondent: string;
  };
  highlight: {
    Judgment: string[];
  };
  sort: [number, number, string];
}

export interface SearchResult {
  info: SearchInfo;
  results: SearchResultItem[];
}