// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'mystage',
      script: 'npm',
      args: 'run start -- -p 3031',
      env_production: {
        NODE_ENV: 'production',
        NEXTAUTH_URL: 'https://mystage.ssai.app',
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        AZURE_AD_CLIENT_ID: process.env.AZURE_AD_CLIENT_ID,
        AZURE_AD_CLIENT_SECRET: process.env.AZURE_AD_CLIENT_SECRET,
        AZURE_AD_TENANT_ID: process.env.AZURE_AD_TENANT_ID,
        PORT: 3031,
      },
    },
  ],
};
