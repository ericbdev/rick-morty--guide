module.exports = {
  reactStrictMode: true,
  // https://dev.to/ivanms1/next-js-graphql-typescript-setup-5bog
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  images: {
    domains: ['rickandmortyapi.com'],
  },
};
