module.exports = {
    siteMetadata: {
        title: 'animation-test',
        description: "anime test",
        siteUrl: "https://main.d1rx47vmsl7fry.amplifyapp.com",
        author: "chiba",
        lang: "ja",
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images`,
        },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
    ],
}
