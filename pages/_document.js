import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="dicoding:email" content="sarahlarasti2002@gmail.com">
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossOrigin=""
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
          <Script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" defer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
