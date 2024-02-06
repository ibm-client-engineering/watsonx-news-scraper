import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';
import { siteMetadata } from '../../../../gatsby-config';

const CustomHeader = (props) => (
  <Header {...props}>
    IBM Client Engineering |&nbsp;<span>{siteMetadata.title}</span>
  </Header>
);

export default CustomHeader;
