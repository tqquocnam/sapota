/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],

    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'assets.example.com',
    //     port: '',
    //     pathname: '/account123/**',
    //   },
    // ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: [{ key: "s-maxage", value: "31536000" }],
  //     },
  //   ];
  // },
  // experimental: {
  //   scrollRestoration: true,
  // },
};

module.exports = nextConfig;
