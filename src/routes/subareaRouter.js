/* eslint-disable import/no-unresolved */
const axios = require('axios');

require('../config/environment');

module.exports = {
    getSubareas: (body) => {
        const Url = `${global.URL_USER}/subareas-conhecimento`;
        const reqBody = body;
        return new Promise((resolve, reject) => {
            axios.get(Url, reqBody).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    },
};
