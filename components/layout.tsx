import React, { FunctionComponent, ReactNode } from 'react';
import Navigation from './navigation';
import Footer from './footer';

type Props = {
    children: ReactNode
};

const Layout: FunctionComponent<Props>  = ({children}) => {
  return (
  <div>
      <Navigation/>
      {children}
      <Footer/>
  </div>
  );
};

export default Layout;
