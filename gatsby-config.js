require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Legacy Homes Group',
    description: 'Helping Ohio Home Buyers and Sellers Fulfill Their Legacy',
    contact: {
      phone: 'XXX XXX XXX',
      email: 'tom@legacyohiohomes.com',
    },
    menuLinks: [
      {
        name: 'Sell A Home',
        link: '/sellhome',
      },
      {
        name: 'Buy A Home',
        link: '/buyhome',
      },
      {
        name: 'Join Buyers List',
        link: '/joinlist',
      },
      {
        name: 'About Us',
        link: '/aboutus',
      }
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
  ],
};
