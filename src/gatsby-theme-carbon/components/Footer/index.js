import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      Last Updated: {buildTime}
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/client-engineering', linkText: 'IBM Client Engineering' },
    { href: 'https://ibm.com', linkText: 'IBM Homepage' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
