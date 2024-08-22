/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['nobero.com'],
      },
      webpack(config, options) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
    
        return config;
      },
};



export default nextConfig;
