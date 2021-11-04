const express = require('express');
const subjectRouter = require('./subjectRouter');
// const subareaRouter = require('./subareaRouter');
const endpoints = require('../utils/endpoints');
const userRouter = require('./userRouter');
const projectRouter = require('./projectRouter');
const knowledgeAreaRouter = require('./knowledgeAreaRouter');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(
    endpoints,
  );
});

module.exports = (app) => {
  // app.use('/', [router, userRouter, projectRouter]);
  app.use('/', [router]);
  app.use('/user', [userRouter]);
  app.use('/project', [projectRouter]);
  app.use('/areas-conhecimento', [knowledgeAreaRouter]);
  app.use('/subject', [subjectRouter]);
};
