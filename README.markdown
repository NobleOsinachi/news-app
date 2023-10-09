# News App

This is a simple News App built with Next.js and Tailwind CSS, fetching news content from the News API.

## Live Deployment

[![screenshot](screenshot.png)](https://news-app.vercel.app/)

You can access the live deployment of the News App at [https://news-app.vercel.app/](https://news-app.vercel.app/).

## Features

- View the latest news articles from various sources.
- Search for news articles by keywords.
- Click on news articles to read the full content.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [News API](https://newsapi.org/)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/NobleOsinachi/news-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd news-app
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

4. Create a `.env.local` file in the project root and add your News API key:

   ```env
   NEXT_PUBLIC_NEWS_API_KEY=your_api_key_here
   ```

   You can obtain an API key by signing up at [News API](https://newsapi.org/).

5. Start the development server:

   ```shell
   npm run dev
   ```

6. Open your browser and visit [http://localhost:3000/](http://localhost:3000/) to view the app.

## How to Use

- The app displays a list of the latest news articles by default.
- Use the search bar to search for news articles by keywords.
- Click on a news article to read the full content.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add feature'`.
4. Push to your fork: `git push origin feature-name`.
5. Create a pull request to the `main` branch of the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
