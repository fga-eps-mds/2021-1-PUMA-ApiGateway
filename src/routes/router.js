const express = require('express');
const project = require('./projectRouter');
const knowledgeArea = require('./knowledgeAreaRouter');
const subjectRouter = require('./subjectRouter');
const subareaRouter = require('./subareaRouter');
const userRouter = require('./userRouter');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    Project: 'Puma',
    Service: 'API Gateway',
  });
});

// User routes

router.post('/register', (req, res) => {
  userRouter.registerUser(req.body).then(() => {
    res.status(200).json({ });
  }).catch(() => {
    console.log('res 400');
    res.status(400).json({ });
  });
});

router.post('/login', (req, res) => {
  userRouter.logUserIn(req.body).then((token) => {
    res.status(200).json({ auth: true, token });
  }).catch((error) => {
    res.status(400).json({ auth: false, token: null, error });
  });
});

router.get('/aluno/:matriculaId', (req, res) => {
  userRouter.getAluno(req.params.matriculaId).then((response) => {
    res.json(response);
  });
});

// Project routes

router.post('/projeto/cadastro', (req, res) => {
  project.addProject(req.body).then((response) => {
    const data = response.data;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.post('/upload', (req, res) => {
  project.addFile(req.body).then((response) => {
    const data = response.data;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.post('/projeto/deletar/:projectId', (req, res) => {
  project.deleteProject(req.params.projectId).then((response) => {
    const data = response.data;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.get('/areas-conhecimento', (req, res) => {
  knowledgeArea.getKnowledgeAreas(req.body).then((response) => {
    const data = response.data;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

// Subject Routes

router.get('/disciplina', (req, res) => {
  subjectRouter.getSubjects(req.body).then((response) => {
    const data = response.data;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.post('/disciplina/cadastro', (req, res) => {
  subjectRouter.addSubject(req.body).then((response) => {
    const data = response.data;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.get('/disciplina/:subjectId', (req, res) => {
  subjectRouter.getSubject(req.params.subjectId).then((response) => {
    const data = response.data;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.delete('/disciplina/:subjectId', (req, res) => {
  subjectRouter.deleteSubject(req.params.subjectId).then((response) => {
    const data = response.data;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.put('/disciplina', (req, res) => {
  subjectRouter.updateSubject(req.body).then((response) => {
    const data = response.data;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

// Subarea routes

router.get('/subareas-conhecimento', (req, res) => {
  subareaRouter.getSubareas(req.body).then((response) => {
    const data = response.data;
    res.status(200).json( data );
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

module.exports = (app) => app.use('/', router);
