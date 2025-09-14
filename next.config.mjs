/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this 'images' configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qocppzhvizrcxyudwrvg.supabase.co", // <-- Your specific Supabase hostname
        port: "",
        pathname: "/storage/v1/object/public/media/**", // <-- Allows any image in your 'media' bucket
      },
    ],
  },
};

export default nextConfig;
