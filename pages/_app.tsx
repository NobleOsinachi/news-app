import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ProgressBar } from 'react-bootstrap';
import styles from '@/styles/App.module.css';
import CustomNavbar from '@/components/CustomNavbar';
import CustomProgressBar from '@/components/CustomProgressBar';
import NextNProgress from "nextjs-progressbar";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <title key='title'>Next JS News Blog</title>
        <meta
          name='description'
          content='This blog fetches latest news from the News API.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
        {/* Add any other meta tags or link tags you need */}
      </Head>

      <NextNProgress />

      {/* <CustomProgressBar /> */}

      <CustomNavbar />

      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
};

export default App;
