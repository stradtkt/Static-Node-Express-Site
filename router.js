const express = require('express');
const router = express.Router();
const errorHandler = require('./errorHandler');
const { projects } = require('./data/projects.json');
const { profile } = require('./data/profile.json');

router.get('/', (req,res) => {
    res.render('index', {profile, projects});
});

router.get('/about', (req,res) => {
    res.render('about', {profile});
});

router.get('/project/:ID', (req, res) => {
    const ID = req.params.ID;
    if(ID <= 0 || ID > projects.length) {
        res.redirect('/error');
    } else {
        res.render('project', {profile, project: projects[ID - 1]});
    }
});

router.get('/error', (req,res) => {
    const error = errorHandler.throwPageNotFoundError(req, res);
    res.render('error', {profile, error});
});

router.use('/', (req, res, next) => {
    res.redirect('/error');
});

module.exports = router;
