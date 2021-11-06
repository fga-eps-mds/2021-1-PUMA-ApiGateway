/* eslint-disable import/no-unresolved */
const axios = require('axios');
const express = require('express');
const subjectController = require('../controller/subjectController');

require('../config/environment');

const routes = express.Router()
routes.get('/', async (req, res) => {
    subjectController.getSubjects(req.body).then((response) => {
        res.status(200).json(response.data);
    }).catch((response) => {
        res.status(400).json({ response });
    });
});

routes.post('/', async (req, res) => {
    subjectController.addSubject(req.body).then((response) => {
        res.status(200).json(response.data);
    }).catch((response) => {
        res.status(400).json({ response });
    });
});

routes.put('/', async (req, res) => {
    subjectController.updateSubject(req.body).then((response) => {
        res.status(200).json(response.data);
    }).catch((response) => {
        res.status(400).json({ response });
    });
});

routes.get('/getSubject/:subjectId', async (req, res) => {
    subjectController.getSubject(req.params.subjectId).then((response) => {
        console.log(response.data);
        res.status(200).json(response.data);
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
