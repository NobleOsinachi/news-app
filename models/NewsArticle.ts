export default interface NewsArticle {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string | Date;
  content: string;
}

export default interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Array<NewsArticle>;
}
