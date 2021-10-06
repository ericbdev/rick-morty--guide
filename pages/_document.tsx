import Document, { Html, Head, Main, NextScript } from 'next/document';
import Navigation from '@wiki/structure/Navigation';

class DocumentBase extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Navigation />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentBase;
