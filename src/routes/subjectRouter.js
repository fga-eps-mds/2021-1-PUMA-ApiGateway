/* eslint-disable import/no-unresolved */
const axios = require('axios');

require('../config/environment');
const url = require("url");

module.exports = {
    getSubjects: (body) => {
        const Url = `${global.URL_USER}/disciplina`;
        const reqBody = body;
        return new Promise((resolve, reject) => {
            axios.get(Url, reqBody).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    },
    addSubject: (body) =>  {
        const Url = `${global.URL_USER}/disciplina/cadastro`;
        const reqBody = body;
        return new Promise((resolve, reject) => {
            axios.post(Url, reqBody).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    },
    getSubject: (subjectIdParam) => {
        const url = `${global.URL_USER}/disciplina/consulta/` + subjectIdParam;
        return new Promise((resolve, reject) => {
            axios.get(url).then((response) => {
                resolve(response);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    },
};
