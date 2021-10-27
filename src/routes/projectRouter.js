const axios = require('axios');

module.exports = {
  addProject: (body) => {
    const projectUrl = `${global.URL_PROJECT}/projeto/cadastro`;
    const reqBody = body;
    return new Promise((resolve, reject) => {
      axios.post(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  addFile: (body) => {
    const projectUrl = `${global.URL_PROJECT}/upload`;
    const reqBody = body;
    return new Promise((resolve, reject) => {
      axios.post(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  deleteProject: (projectIdParam) => {
    const projectUrl = `${global.URL_PROJECT}/projeto/deletar/:projectId`;
    const reqBody = projectIdParam;
    return new Promise((resolve, reject) => {
      axios.post(projectUrl, reqBody).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },
};
