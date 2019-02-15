const express = require('express');
const router = express.Router();

const errorHandler = require('./errorHandler');
const { projects } = require('./data/projects.json');
const { profile } = require('./data/profile.json');

router.get('/', (req,res) => {
    res.render('index', {profile, projects});
});
