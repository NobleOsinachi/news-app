import NewsArticlesGrid from '@/components/NewsArticlesGrid';
import NewsArticle from '@/models/NewsArticle';
import { log } from 'console';
import Head from 'next/head';
import { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';

const SearchNewsPage = () => {
  const [searchResults, setSearchResults] = useState<Array<NewsArticle> | null>(null);
  const [searchResultsLoading, setSearchResultsLoading] = useState<boolean>(false);
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert("correct!");

    /*
    In this code snippet, we first use the as keyword to type-cast e.target to an HTMLFormElement. This is safe because we know that e.target will be an HTML form element due to the event being triggered on a form submission.
   
    Then, we create a new instance of FormData by passing the form element to its constructor. Now you have the formData instance, and you can use it to handle the form submission with the necessary form data.
    */

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    /* const formData = new FormData(e.target as HTMLFormElement); */

    const searchQuery = formData.get("searchQuery")?.toString().trim();

    if (searchQuery) {
      // alert(searchQuery);

      try {
        //initlize my state variables
        setSearchResults(null);
        setSearchResultsLoading(true);
        setSearchResultsLoadingIsError(false);

        const response = await fetch(`/api/search-news/?q=${searchQuery}`);

        const articles: NewsArticle[] = await response.json();
        setSearchResults(articles);
      } catch (error) {
        console.error(error);
        setSearchResultsLoadingIsError(true);
      } finally {
        setSearchResultsLoading(false);
      }
    }
  }

  return (
    <>
      <Head>
        <title key='title'>Search News Blog - Next JS News App</title>
      </Head>
      <main>
        <h1>Search News</h1>
        <Form onSubmit={handleSubmit} > <Form.Group className='mb-3' controlId='search' > <Form.Label> Search Query </Form.Label>
          <Form.Control
            name='searchQuery'
            placeholder='e.g. politics, sports, business, etc.'
          />
        </Form.Group>
          <Button
            type='submit'
            className='mb-4'
            disabled={searchResultsLoading}
          >
            Submit
          </Button>
        </Form>

        <div className="flex flex-column align-items-center">

          {searchResultsLoading && <Spinner animation='border' />}

          {searchResultsLoadingIsError && <Alert variant='danger'>Please try again</Alert>}

          {searchResults?.length === 0 && <p>Nothing found, Try a different query</p>}

          {searchResults && <NewsArticlesGrid articles={searchResults} />}

          {/* <code>{JSON.stringify(searchResults)}</code> */}

        </div>
      </main>
    </>
  );
};

export default SearchNewsPage;
