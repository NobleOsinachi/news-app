
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Next.js App</title>
                {/* Add any other meta tags or link tags you need */}
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
