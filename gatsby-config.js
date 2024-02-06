module.exports = {
  pathPrefix: "/solution-[Insert-Solution-Name]",
  siteMetadata: {
    title: '[Insert Solution Name]',
    description: 'IBM Client Engineering | [Insert Solution Name]',
    keywords: 'IBM, Client Engineering, [Insert Solution Name]',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'IBM Client Engineering | [Insert Solution Name]',
        icon: 'src/images/favicon.svg',
        short_name: '[Insert Solution Name]',
        start_url: '/solution-[Insert-Solution-Name]',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        theme: {
          homepage: 'g10',
          interior: 'g10',
        },
        isSwitcherEnabled: false,
        titleType: 'prepend',
        repository: {
          baseUrl: 'https://github.com/ibm-client-engineering/solution-[Insert-Solution-Name]',
        },
      },
    },
    { 
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          "G-GB0XWXF3GE",
        ],
        gtagConfig: {
          anonymize_ip: true
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-mermaid`,
            options: /** @type {import('gatsby-remark-mermaid').Options} */ ({
              mermaidConfig: {
                theme: 'neutral',
                themeCSS: '.node rect { fill: #fff; }'
              }
            })
          }
        ],
      },
    },
  ],
};
