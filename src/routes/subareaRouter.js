/* eslint-disable import/no-unresolved */
const axios = require('axios');
const { response } = require('express');

require('../config/environment');

module.exports = {
    getSubareas: () => {
        const Url = `${global.URL_USER}/subareas-conhecimento`;
        return new Promise((resolve, reject) => {
            axios.get(Url).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    },
};
