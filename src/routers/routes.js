const express = require('express');
const internship = require('../models/internship');

const router = new express.Router();

// __ User-Company Routes __
// 1. Home
router.get('/', async (req, res) => {
    
    res.send('Home-Dashboard');
});

// 2. Apprenticeship page
router.get('/appren', async (req, res) => {
    
    res.send('Apprenticeships.');
});

// 3. Internship page
router.get('/intern', async (req, res) => {
    
    res.send('Internships.');
});

// 4. Jobs page
router.get('/jobs', async (req, res) => {
    
    res.send('Jobs.');
});

// 5. user-settings
router.get('/', async (req, res) => {
    
    res.send('settings.');
});

// 6. Add new Internship
router.post('/intern/new', async (req, res) => {

    // test-case starting here
    const intern = new internship()
    
});


module.exports = router