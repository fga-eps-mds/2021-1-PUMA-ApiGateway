require('dotenv').config();

module.exports = {
  configUser: () => {
    if (process.env.ENVIRONMENT === 'dev') {
      global.URL_USER = `http://${process.env.IP_ADDRESS}:3001`;
      global.SECRET = process.env.SECRET;
    }
  },
  configProject: () => {
    if (process.env.ENVIRONMENT === 'dev') {
      global.URL_PROJECT = `http://${process.env.IP_ADDRESS}:3000`;
      global.SECRET = process.env.SECRET;
    }
  }

};
