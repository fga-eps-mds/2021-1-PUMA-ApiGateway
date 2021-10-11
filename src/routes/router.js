const express = require('express');
const user = require('./userRouter');
const project = require('./projectRouter');
const knowledgeArea = require('./knowledgeAreaRouter');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    Project: 'Puma',
    Service: 'API Gateway',
  });
});

// User routes

router.post('/register', (req, res) => {
  user.registerUser(req.body).then(() => {
    console.log('res 200');
    res.status(200).json({ });
  }).catch(() => {
    console.log('res 400');
    res.status(400).json({ });
  });
});

router.post('/login', (req, res) => {
  user.logUserIn(req.body).then((token) => {
    res.status(200).json({ auth: true, token });
  }).catch((error) => {
    res.status(400).json({ auth: false, token: null, error });
  });
});

router.get('/aluno/:matriculaId', (req, res) => {
  user.getAluno(req.params.matriculaId).then((response) => {
    res.json(response);
  });
});

// Project routes

router.post('/projeto/cadastro', (req, res) => {
  project.addProject(req.body).then((response) => {
    let data = response.data;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.post('/upload', (req, res) => {
  project.addFile(req.body).then((response) => {
    // console.log(response.data);
    let data = response.data;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.post('/projeto/deletar/:projectId', (req, res) => {
  project.deleteProject(req.params.projectId).then((response) => {
    let data = response.data;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.get('/areas-conhecimento', (req, res) => {
  knowledgeArea.getKnowledgeAreas(req.body).then((response) => {
    let data = response.data;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

module.exports = (app) => app.use('/', router);
