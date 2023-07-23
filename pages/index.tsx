import Head from 'next/head';

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>New Blog using Next JS</title>
                <meta name="description" content="This blog fetches latest news from the News API." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Your page content goes here */}
            <main>
                <h1>Welcome to the Default Page</h1>
                <p>This is the content of the default index page.</p>
            </main>

            {/* Add any other components, footer, etc. */}
        </div>
    );
};

export default Home;




