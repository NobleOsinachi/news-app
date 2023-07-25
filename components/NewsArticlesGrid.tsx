import NewsArticle from '@/models/NewsArticle';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FC, FunctionComponent } from 'react';
import NewsArticleEntry from './NewsArticleEntry';

interface NewsArticlesGridProps {
  articles: Array<NewsArticle>;
}

const NewsArticlesGrid: FunctionComponent<NewsArticlesGridProps> = ({
  articles,
}: NewsArticlesGridProps) => {
  return (
    <Row xs={1} sm={2} xl={3} className="g-4">
      {articles.map((article: NewsArticle) => (
        <Col key={article.url}>
          <NewsArticleEntry article={article}></NewsArticleEntry>
        </Col>
      ))}
    </Row>
  );
};

export default NewsArticlesGrid;
