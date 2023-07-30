import NewsArticlesGrid from '@/components/NewsArticlesGrid';
import Category from '@/models/Category';
import NewsArticle from '@/models/NewsArticle';
import NewsResponse from '@/models/NewsResponse';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Component, FunctionComponent, useState } from 'react';
import { Alert } from 'react-bootstrap';

interface CategoryNewsPageProps {
    newsArticles: NewsArticle[];
}

export const getStaticPaths: GetStaticPaths = async () => {

    const categorySlugs = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
    const paths = categorySlugs.map(slug => ({ params: { category: slug } }));

    /*
       // replace with data from /api/category
       const response = await fetchCategoryData();
       const categorySlugs = categories;// await response.json();
       const paths = categorySlugs?.map(category => ({ params: { category: category.name } }));
   
       // update: Tried all means possible. If it is not from an external API, it isn't gonna work, unless you use getServerSideProps
    */

    return {
        paths, fallback: false
    };
};


export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({ params }) => {
    const category = params?.category?.toString();

    const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
    );

    const newsResponse: NewsResponse = await response.json();

    return {
        props: { newsArticles: newsResponse.articles }
        , revalidate: 5 * 60
    };
};

const CategoryNewsPage: FunctionComponent<CategoryNewsPageProps> = ({ newsArticles }: CategoryNewsPageProps) => {

    const router = useRouter();
    const categoryName = router.query.category?.toString();
    const title = `Category: ${categoryName}`;

    return (
        <>
            <Head>
                <title key="title">{`${title} - Next JS News App`}</title>
            </Head>
            <main>

                <h1>{title}</h1>
                <Alert dismissible>
                    Using getStaticProps
                </Alert>
                <NewsArticlesGrid articles={newsArticles} />
            </main>
        </>
    );
};

export default CategoryNewsPage;
