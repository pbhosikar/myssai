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
        NEXTAUTH_SECRET: 'some-random-secret',
        GOOGLE_CLIENT_ID: 'your_google_client_id',
        GOOGLE_CLIENT_SECRET: 'your_google_client_secret',
        PORT: 3031,
      },
    },
  ],
};
