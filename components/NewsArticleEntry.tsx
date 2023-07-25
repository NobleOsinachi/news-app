import NewsArticle from '@/models/NewsArticle';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { FC, FunctionComponent } from 'react';
import Link from 'next/link';

interface NewsArticleEntryProps {
  article: NewsArticle;
}

const NewsArticleEntry: FC<NewsArticleEntryProps> = ({
  article: { title, url, urlToImage, description },
}: NewsArticleEntryProps) => {
  const validImageUrl =
    urlToImage?.startsWith('http://') || urlToImage?.startsWith('https://')
      ? urlToImage
      : '/images/default.png';
  return (
    <Link href={url}
      className="no-underline"

    >
      <Card className='h-100'>
        <Card.Img src={validImageUrl} variant='top' />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default NewsArticleEntry;
