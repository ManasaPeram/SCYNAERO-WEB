// images: {
//   domains: ['arthurgrand.com', 'i.pinimg.com', 'media.licdn.com','static.vecteezy.com','img.freepik.com','st2.depositphotos.com','watermark.lovepik.com','agcdn-1d97e.kxcdn.com','t3.ftcdn.net','encrypted-tbn0.gstatic.com','t4.ftcdn.net', 'www.shutterstock.com'],

// },



/** @type {import('next').NextConfig} */
const nextConfig = {

  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/nextjs-github-pages",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
 images: {
  domains: ['arthurgrand.com', 'i.pinimg.com', 'media.licdn.com','static.vecteezy.com','img.freepik.com','st2.depositphotos.com','watermark.lovepik.com','agcdn-1d97e.kxcdn.com','t3.ftcdn.net','encrypted-tbn0.gstatic.com','t4.ftcdn.net', 'www.shutterstock.com'],
},
};

export default nextConfig;