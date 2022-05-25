const express = require('express');
const router = express.Router();
const advisers = require('../services/advisers');

/* GET advisers. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await advisers.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting advisers `, err.message);
        next(err);
    }
});

/* GET single adviser profile. */
router.get('/adviser/:id', async function(req, res, next) {
    try {
        res.json(await advisers.readAdviserProfile(req.params.id));
    } catch (err) {
        console.error(`Error reading adviser profile `, err.message);
        next(err);
    }
});

/* Create adviser profile. */
router.post('/createAdviserProfile/', async function(req, res, next) {
    try {
        res.json(await advisers.createAdviserProfile(req.body));
    } catch (err) {
        console.error(`Error creating adviser profile `, err.message);
        next(err);
    }
});

// create new user
router.post('/', async function(req,res,next){
   try {
       res.json(await advisers.createUser(req.body));
   } catch ( error) {
       console.error('Error while creating a new user ', error.message);
       next(error);
   }
});

module.exports = router;