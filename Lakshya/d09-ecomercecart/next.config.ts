import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[{
      hostname:"**"
    }]
  }
};
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
export default nextConfig;


