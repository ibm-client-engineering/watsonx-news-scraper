module.exports = {
  pathPrefix: "/solution-watsonx-news-scraper",
  siteMetadata: {
    title: 'Watsonx News Scraper',
    description: 'IBM Client Engineering | Watsonx News Scraper',
    keywords: 'IBM, Client Engineering, Watsonx News Scraper',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'IBM Client Engineering | Watsonx News Scraper',
        icon: 'src/images/favicon.svg',
        short_name: 'Watsonx News Scraper',
        start_url: '/solution-watsonx-news-scraper',
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
          baseUrl: 'https://github.com/ibm-client-engineering/solution-watsonx-news-scraper',
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
