const db = require('./../models');

const express = require('express');

const router = express.Router();

//get route for main page
router.get('/', (req, res) => {
    res.render(`index`)
});

//get route for skills api
router.get('/api/skills', (req, res) => {
    db.Skill.findAll({order:['updatedAt', 'DESC']})
        .then(dbWant => {

            res.json(dbWant);
        }).catch( err => {
            if(err) {
                console.error(err);
            }
    })
});

router.get('/api/tasks', (req, res) => {
    db.Task.findAll({
        order:
            [sequelize.fn('max', sequelize.col('updatedAt')), 'DESC']} )
        .then(dbNeed => {
            res.json(dbNeed);
        }).catch( err => {
        if(err) {
            console.error(err);
        }
    })
});


//get route for tasks page
router.get('/tasks', (req, res) => {
    db.Task.findAll({}).then(dbTask => {
        const hdbsObject = {
            tasks: dbTask
        };
        // console.log(dbNeed);
        res.render('tasks', hdbsObject);
    }).catch(err => {
        if(err){
            console.error(err);
        }
    })
});
//get route for skills page
router.get('/skills', (req, res) => {
    db.Skill.findAll({}).then(dbSkill => {
        const hdbsObject = {
            skills: dbSkill
        };
        res.render('skills', hdbsObject);
    }).catch(err => {
        if(err){
            console.error(err);
        }
    });
});

//post route for skills api
router.post('/api/skills', (req, res) => {
    console.log(req.body);
    db.Skill.create({
        name: req.body.name,
        email: req.body.email,
        skills: req.body.skills,
        title: req.body.title,
        compensation: req.body.compensation,
        deadline: req.body.deadline,
        category: req.body.category
    }).then( dbSkills => {
        res.json(dbSkills);
    }).catch( err => {
        console.error(err);
    });
});

//post route for tasks api
router.post('/api/tasks', (req, res) => {
    console.log(req.body);
    db.Task.create({
        name: req.body.name,
        email: req.body.email,
        tasks: req.body.tasks,
        title: req.body.title,
        compensation: req.body.compensation,
        deadline: req.body.deadline,
        category: req.body.category
    }).then( dbNeeds => {
        res.json(dbNeeds);
    }).catch(err => {
        console.error(err);
    });
});

module.exports = router;


