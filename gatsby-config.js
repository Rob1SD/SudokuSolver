const path = require("path");

module.exports = {
    siteMetadata: {
        title: "My Gatsby Site",
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        "gatsby-plugin-styled-components",
        "gatsby-plugin-typescript",
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
};
