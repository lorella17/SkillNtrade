const db = require('./../models');

const express = require('express');

const router = express.Router();

//get route for main page
router.get('/', (req, res) => {
    res.render(`index`)
});

//get route for skills api
router.get('/api/skills', (req, res) => {
    db.Skills.findAll({})
        .then(dbWant => {

            res.json(dbWant);
        }).catch( err => {
            if(err) {
                console.error(err);
            }
    })
});

router.get('/api/tasks', (req, res) => {
    db.Tasks.findAll({})
        .then(dbNeed => {
            res.json(dbNeed);
        }).catch( err => {
        if(err) {
            console.error(err);
        }
    })
});


//get route for tasks page
router.get('/skills', (req, res) => {
    db.Skills.findAll({}).then(dbSkill => {
        const hdbsObject = {
            skills: dbSkill
        };
        // console.log(dbNeed);
        res.render('skills', hdbsObject);
    }).catch(err => {
        if(err){
            console.error(err);
        }
    })
});
//get route for skills page
router.get('/tasks', (req, res) => {
    db.Tasks.findAll({}).then(dbTasks => {
        const hdbsObject = {
            tasks: dbTasks
        };
        res.render('tasks', hdbsObject);
    }).catch(err => {
        if(err){
            console.error(err);
        }
    });
});

//post route for want api
router.post('/api/skills', (req, res) => {
    console.log(req.body);
    db.Wants.create({
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

//post route for tasks api
router.post('/api/tasks', (req, res) => {
    console.log(req.body);
    db.Needs.create({
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


