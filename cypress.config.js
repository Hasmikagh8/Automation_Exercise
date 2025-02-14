import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();
const config = defineConfig({
  e2e: {
    baseUrl: process.env.globalUrl,
    env: {
      globalEmail: process.env.globalEmail,
      globalPassword: process.env.globalPassword,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

export default config;
