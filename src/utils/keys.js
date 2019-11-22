module.exports = {
  SETTINGS: {
    PORT: process.env.PORT,
    APP_NAME: process.env.APP_NAME,
    NODE_ENV: process.env.NODE_ENV,
    MAINTENANCE: process.env.MAINTENANCE,
    LANGUAGE: process.env.LANGUAGE
  },
  REPOSITORIES: {
    DATA_SRC: process.env.DATA_SRC
  },
  APP_KEYS: {
    PORT: 'port',
    ENV: 'env',
    APP_NAME: 'app_name'
  }
}
