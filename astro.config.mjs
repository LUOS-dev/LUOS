// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
//import vercel from '@astrojs/vercel';
import vercel from '@astrojs/vercel/serverless';
//import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    site: 'https://misitio.com',
    output: "server",
    adapter: vercel({
    webAnalytics: { enabled: true } // Opcional, Vercel tiene buenas métricas
  }),
    //adapter: node({ mode: 'standalone' }),
});
