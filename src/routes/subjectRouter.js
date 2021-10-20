/* eslint-disable import/no-unresolved */
const axios = require('axios');

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
        const url = `${global.URL_USER}/disciplina/` + subjectIdParam;
        return new Promise((resolve, reject) => {
            axios.get(url).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    },
    deleteSubject: (subjectId) => {
        const url = `${global.URL_USER}/disciplina/` + subjectId;
        return new Promise((resolve, reject) => {
            axios.delete(url).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    }
};
