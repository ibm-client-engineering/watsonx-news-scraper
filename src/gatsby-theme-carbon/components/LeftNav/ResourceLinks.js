import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';
import { pathPrefix } from '../../../../gatsby-config';

const links = [
  {
    title: 'Github',
    href: 'https://github.com/ibm-client-engineering/'+pathPrefix,
  },
  {
    title: 'IBM Client Engineering',
    href: 'https://www.ibm.com/client-engineering',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
