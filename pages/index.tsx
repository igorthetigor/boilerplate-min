import Head from 'next/head';
import { ReactElement } from 'react';
import { Grid } from 'semantic-ui-react';
import styles from '../styles/Home.module.css';

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Basic, all-purpose App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid centered>
        <Grid.Column width="10" className={styles.main} textAlign="center">
          Welcome, friend
        </Grid.Column>
      </Grid>
    </div>
  );
}
