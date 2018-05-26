const db = require('../models');

const express = require('express');

const router = express.Router();

router.get('/needs', (req, res) => {
    db.need.findAll({}).then(dbNeed => {
        const hdbsObject = {
            needs: dbNeed
        };
        console.log(dbNeed);
        res.render('needs', hdbsObject);
    }).catch(err => {
        if(err){
            console.error(err);
        }
    })
});
router.get('/wants', (req, res) => {
    db.want.findAll({}).then(dbWant => {
        const hdbsObject = {
            wants: dbWant
        };
        res.render('wants', hdbsObject);
    }).catch(err => {
        if(err){
            console.error(err);
        }
    });
});
router.post('/api/wants', (req, res) => {
    console.log(req.body);
    db.wants.create({
        name: req.body.name,
        email: req.body.email,
        skills: req.body.skills,
        location: req.body.location,
        category: req.body.category
    }).then( dbWants => {
        res.json(dbWants);
    }).catch( err => {
        console.error(err);
    });
});
router.post('/api/needs', (req, res) => {
    console.log(req.body);
    db.needs.create({
        name: req.body.name,
        email: req.body.email,
        skills: req.body.skills,
        location: req.body.location,
        category: req.body.category
    }).then( dbNeeds => {
        res.json(dbNeeds);
    }).catch(err => {
        console.error(err);
    });
});

module.exports = router;


