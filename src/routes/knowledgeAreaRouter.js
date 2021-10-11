/* eslint-disable import/no-unresolved */
const axios = require('axios');
require('../config/environment');

module.exports = {
    getKnowledgeAreas: (body) => {
        const projectUrl = `${global.URL_PROJECT}/areas-conhecimento`;
        const reqBody = body;
        return new Promise((resolve, reject) => {
            axios.get(projectUrl, reqBody).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    }
};
