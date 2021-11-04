/* eslint-disable import/no-unresolved */
const axios = require('axios');
const express = require('express');
const subjectController = require('../controller/subjectController');

require('../config/environment');

const routes = express.Router()
routes.get('/', async (req, res) => {
    subjectController.getSubjects(req.body).then((response) => {
        res.status(200).json({ response });
    }).catch((response) => {
        res.status(400).json({ response });
    });
});

routes.post('/', async (req, res) => {
    subjectController.addSubject(req.body).then((response) => {
        res.status(200).json({ response });
    }).catch((response) => {
        res.status(400).json({ response });
    });
});

routes.put('/', async (req, res) => {
    subjectController.updateSubject(req.body).then((response) => {
        res.status(200).json({ response });
    }).catch((response) => {
        res.status(400).json({ response });
    });
});

routes.get('/getSubject/:subjectId', async (req, res) => {
    subjectController.getSubject(req.params.subjectId).then((response) => {
        res.status(200).json({ response });
    }).catch((response) => {
        res.status(400).json({ response });
    });
});

routes.delete('/delete/:subjectId', async (req, res) => {
    subjectController.deleteSubject(req.params.subjectId).then((response) => {
        const data = response.data;
        res.status(200).json({ data });
    }).catch((response) => {
        const data = response.data;
        res.status(400).json({ data });
    });
});

module.exports = routes;

// module.exports = {
//     getSubjects: (body) => {
//         const Url = `${global.URL_USER}/disciplina`;
//         const reqBody = body;
//         return new Promise((resolve, reject) => {
//             axios.get(Url, reqBody).then((response) => {
//                 resolve(response);
//             }).catch((error) => {
//                 reject(error);
//             });
//         });
//     },
//     addSubject: (body) =>  {
//         const Url = `${global.URL_USER}/disciplina`;
//         const reqBody = body;
//         return new Promise((resolve, reject) => {
//             axios.post(Url, reqBody).then((response) => {
//                 resolve(response);
//             }).catch((error) => {
//                 reject(error);
//             });
//         });
//     },
//     getSubject: (subjectIdParam) => {
//         const url = `${global.URL_USER}/disciplina/` + subjectIdParam;
//         return new Promise((resolve, reject) => {
//             axios.get(url).then((response) => {
//                 resolve(response);
//             }).catch((error) => {
//                 reject(error);
//             });
//         });
//     },
//     updateSubject: (subject) => {
//         const url = `${global.URL_USER}/disciplina/` + subject.subjectid;
//         return new Promise((resolve, reject) => {
//             axios.put(url, subject).then((response) => {
//                 resolve(response);
//             }).catch((error) => {
//                 reject(error);
//             });
//         });
//     },
//     deleteSubject: (subjectId) => {
//         const url = `${global.URL_USER}/disciplina/` + subjectId;
//         return new Promise((resolve, reject) => {
//             axios.delete(url).then((response) => {
//                 resolve(response);
//             }).catch((error) => {
//                 reject(error);
//             });
//         });
//     },
//     updateSubject: (body) =>  {
//         const url = `${global.URL_USER}/disciplina`;
//         const reqBody = body;
//         return new Promise((resolve, reject) => {
//             axios.put(url, reqBody).then((response) => {
//                 resolve(response);
//             }).catch((error) => {
//                 reject(error);
//             });
//         });
//     },
// };
