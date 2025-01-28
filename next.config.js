/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/avatars/**',
      },
      {
        protocol: 'https',
        hostname: 'astrast.com',
        pathname: '/Images/**',
      },
      {
        protocol: 'https',
        hostname: 'astrast.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'panel.astrast.host',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tejaswa.is-a.dev',
        pathname: '/img/**',
      }
    ],
  },
}

module.exports = nextConfig
