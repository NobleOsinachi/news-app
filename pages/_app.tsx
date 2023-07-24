import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styles from '@/styles/App.module.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <title key='title'>Next JS News Blog</title>
        <meta
          name='description'
          ls='noble'
          content='This blog fetches latest news from the News API.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
        {/* Add any other meta tags or link tags you need */}
      </Head>

      <Container>
        <div className={styles.red}>FLEHS</div>
        <Component {...pageProps} />
      </Container>
    </>
  );
};

export default App;
