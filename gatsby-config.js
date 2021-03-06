	module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
	`gatsby-plugin-catch-links`,
	`gatsby-plugin-manifest`,
	`gatsby-plugin-offline`,
	`gatsby-plugin-netlify-cache`,
	`gatsby-plugin-dark-mode`,



  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-responsive-iframe`],
    },
  },




        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-stackbit-static-sass`,
            options: {
                inputFile: `${__dirname}/src/sass/main.scss`,
                outputFile: `${__dirname}/public/assets/css/main.css`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {

            }
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
                menus: require('./src/data/menus.json'),
            }
        },
	{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
	{
    resolve: "gatsby-plugin-preconnect",
    options: {
      domains: [
        "https://fonts.googleapis.com",
        "https://cdnjs.cloudflare.com",
	"https://cdn.rawgit.com",
      ]
    }
  },
	{
  resolve: `gatsby-plugin-amp`,
  options: {
    analytics: {
      type: 'gtag',
      dataCredentials: 'include',
      config: {
      },
    },
    canonicalBaseUrl: 'https://sharp-pike-48a08f.netlify.com/',
    components: ['amp-form'],
    excludedPaths: ['/404*', '/'],
    pathIdentifier: '/amp/',
    relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
    useAmpClientIdApi: true,
  },
},

    ],
};
