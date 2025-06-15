export type Pagination = {
  next: number | null;
  prev: number | null;
  total_count: number;
  page: number;
  page_size: number;
  total_pages: number;
};
