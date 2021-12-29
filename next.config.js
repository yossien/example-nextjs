/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    devApiServer: 'http://localhost:4010',
    devImageRoot: '/images',
  },
}
