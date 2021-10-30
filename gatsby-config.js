module.exports = {
  siteMetadata: {
    title: `Couleurs de femmes`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Anthony Englebert`,
    language:"fr",
    siteUrl: `https://couleursdefemmes.be`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,  
    'gatsby-plugin-minify', 
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-webpack-bundle-analyzer',
    `gatsby-plugin-preload-fonts`,
    'gatsby-plugin-robots-txt',

{

    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'fr'
    }
  },

  {
    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'fr'
    }
  },

  {
    resolve: `gatsby-plugin-snipcart-advanced`,
    options: {
      version: "3.0.29",
      publicApiKey: "ODE0N2IyNzItZjFkMy00YjFkLWJhYmMtNjNhY2MxN2ZkODhlNjM3NDQ4NDY4NDkwMjUyMDA2", // use public api key here or in environment variable
      defaultLang: "fr",
      currency: "eur",
      openCartOnAdd: true,
      useSideCart: false,
      // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
      locales: {
        fr: {
          actions: {
            checkout: "Valider le panier",
          },
        },
      },
      templatesUrl:
        "path on your template file. Set file in the static folder, ex: '/snipcart/index.html'",
      // not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
      innerHTML: `
          <billing section="bottom">
          <snipcart-checkbox name="privacy-policy" required></snipcart-checkbox>
          <snipcart-label for="privacy-policy">J'ai lu et approuvé les;<a href="https://couleursdefemmes.be/condition">Conditions générales de vente</a></snipcart-label>          </billing>`,
    },
  },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cormorant\:300,400,400i,700`, // you can also specify font weights and styles
          `Nanum Gothic`
        ],
        display: 'swap'
      },
    },

        {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },





    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '4',
        matomoUrl: 'http://matomo.anthonyenglebert.be',
        siteUrl: 'https://couleursdefemmes.be/'
      }
    },



    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: `f33f61cb469ff3ca17faf360f637fa`,
  
        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,
  
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
  
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
  
        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',
  
        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ['en'],
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
  