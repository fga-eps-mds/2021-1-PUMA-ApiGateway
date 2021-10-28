const express = require('express');
const userRouter = require('./userRouter');
const projectRouter = require('./projectRouter');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(
    endpoints,
  );
});

module.exports = (app) => {
  app.use('/', [router]);
  app.use('/user', [userRouter]);
  app.use('/project', [projectRouter]);
};