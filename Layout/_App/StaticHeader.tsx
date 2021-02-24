import React, { ReactElement } from 'react';
import { Divider } from 'semantic-ui-react';
import styles from './Layout.module.css';

const StaticHeader = (): ReactElement => {
  return (
    <header>
      <h1 className={styles.regular}>header</h1>
      <Divider />
    </header>
  );
};

export default StaticHeader;
