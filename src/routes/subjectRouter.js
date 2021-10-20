/* eslint-disable import/no-unresolved */
const axios = require('axios');

require('../config/environment');

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
        const Url = `${global.URL_USER}/disciplina/consulta/` + subjectIdParam;
        const reqBody = subjectIdParam;
        console.log(reqBody);
        console.log(Url);
        return new Promise((resolve, reject) => {
            axios.get(Url, reqBody).then((response) => {
                resolve(response);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    },
};
