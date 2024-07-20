/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
  env: {
    LOCALHOST: 'http://localhost:3000',
    DEPLOY: 'https://physiotrends.vercel.app/',
    CASHFEE_API_KEY: '7253322be58d82f5ff1e61fe52233527',
    CASHFEE_SECKRET_KEY: 'cfsk_ma_prod_c501199e41230c036c8a78a41cfe16b9_ab125276'
  },
}

module.exports = nextConfig