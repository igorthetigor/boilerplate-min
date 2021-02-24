import React, { ReactElement } from 'react';
import { Divider } from 'semantic-ui-react';
import styles from './Layout.module.css';

const StaticFooter = (): ReactElement => {
  return (
    <footer className={`${styles.footer}`}>
      <Divider />
      <h4 className={`${styles.regular}`}>Footer</h4>
    </footer>
  );
};

export default StaticFooter;
