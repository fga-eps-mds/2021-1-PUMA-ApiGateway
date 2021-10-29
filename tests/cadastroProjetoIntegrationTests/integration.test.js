const axios = require('axios');
const environment = require('../../src/config/environment');

environment.configEnv();

const cadastroProjects = require('./constants');

const cadastroProjectsUrl = `${global.URL_GATEWAY}/projeto/cadastro`;

const failedToRegisterProject = 'Failed to register the project';
const failedToRegisterProjectBy1 = 'Failed to register the project, titulo was not found';
const failedToRegisterProjectBy2 = 'Failed to register the project, descricao was not found';
const failedToRegisterProjectBy3 = 'Failed to register the project, resultadoEsperado was not found';
const failedToRegisterProjectBy4 = 'Failed to register the project, areasConhecimento was not found';

describe('Register Project Success', () => {
    it('Should register Projeto', (done) => {
        axios.post(cadastroProjectsUrl, cadastroProjects.success.projeto).then(() => {
            done();
        }).catch(() => {
            done(new Error(failedToRegisterProject));
        });
    });
});

describe('Register Project Fail', () => {
    it('Should not register Projeto', (done) => {
        axios.post(cadastroProjectsUrl, cadastroProjects.fail.projeto1).then(() => {
            done(new Error(failedToRegisterProjectBy1));
        }).catch(() => {
            done();
        });
    });

    it('Should not register Projeto', (done) => {
        axios.post(cadastroProjectsUrl, cadastroProjects.fail.projeto2).then(() => {
            done(new Error(failedToRegisterProjectBy2));
        }).catch(() => {
            done();
        });
    });

    it('Should not register Projeto', (done) => {
        axios.post(cadastroProjectsUrl, cadastroProjects.fail.projeto3).then(() => {
            done(new Error(failedToRegisterProjectBy3));
        }).catch(() => {
            done();
        });
    });

    it('Should not register Projeto', (done) => {
        axios.post(cadastroProjectsUrl, cadastroProjects.fail.projeto4).then(() => {
            done(new Error(failedToRegisterProjectBy4));
        }).catch(() => {
            done();
        });
    });
});