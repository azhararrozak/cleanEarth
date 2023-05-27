import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Clean-Earth Dicoding Team" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            strategy="beforeInteractive"
          />
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
            strategy="beforeInteractive"
          />
          
        </body>
      </Html>
    );
  }
}

export default MyDocument;
