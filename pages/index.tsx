import { GetServerSideProps } from 'next';
import NewsArticle from '@/models/NewsArticle';
import NewsResponse from '@/models/NewsArticle';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps<
  BreakingNewsPageProps
> = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
  );
  const newsResponse: NewsResponse = await response.json();

  return { props: { newsArticles: newsResponse.articles } };
};

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[];
}

const Home: React.FC = ({ newsArticles }: BreakingNewsPageProps) => {
  return (
    <div>
      <Head>
        <title key='title'>Breaking News - NextJS News Blog</title>
      </Head>

      <main>
        <h1>Breaking News</h1>
        <code>{JSON.stringify(newsArticles)}</code>
      </main>
    </div>
  );
};

export default Home;
