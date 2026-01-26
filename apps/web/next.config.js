
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@badgemint/shared', '@badgemint/base-adapter', '@badgemint/stacks-adapter'],
};

module.exports = nextConfig;
