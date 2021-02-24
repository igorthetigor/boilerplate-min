import React, { ReactElement } from 'react';
import StaticHeader from './StaticHeader';
import StaticFooter from './StaticFooter';
import styles from './Layout.module.css';

const Layout = ({ children }: { children: ReactElement }): ReactElement => {
  return (
    <div className={styles.wholeCake}>
      <StaticHeader />
      {children}
      <StaticFooter />
    </div>
  );
};

export default Layout;
