import NewsArticle from "./NewsArticle";

export default interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Array<NewsArticle>;
}
  