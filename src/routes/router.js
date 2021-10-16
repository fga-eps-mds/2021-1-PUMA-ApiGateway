const express = require('express');
const endpoints = require('../utils/endpoints.js')
const userRouter = require('./userRouter');
const projectRouter = require('./projectRouter');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(
    endpoints
  );
});



module.exports = (app) => {
  // app.use('/', [router, userRouter, projectRouter]);
  app.use('/', [router]);
  app.use('/user', [userRouter]);
  app.use('/project', [projectRouter]);
};
