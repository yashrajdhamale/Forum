/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Required for GitHub Pages
    basePath: "/Forum", // Change this to your GitHub repository name
    trailingSlash: true, // Ensures proper routing
};

export default nextConfig;

