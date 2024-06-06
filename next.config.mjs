/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*', // Matches all API routes
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' }, // Allow requests from any origin (be cautious with this)
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          }, // Allowed HTTP methods
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, jwt , Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          }, // Allowed headers
        ],
      },
    ];
  },
};

export default nextConfig;
