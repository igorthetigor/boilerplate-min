import 'semantic-ui-css/semantic.min.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement } from 'react';

import Layout from '../Layout/_App/Layout';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
          key="viewport"
          charSet="UTF-8"
        />
        <title>nextjs Starter App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
