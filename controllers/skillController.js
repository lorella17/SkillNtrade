const db = require('./../models');

const express = require('express');

const router = express.Router();

const mailgun =


//get route for main page
    router.get('/', (req, res) => {
        res.render(`index`)
    });

//get route for skills api
router.get('/api/skills', (req, res) => {
    db.Skills.findAll({})
        .then(dbWant => {

            res.json(dbWant);

        }).catch(err => {
        if (err) {
            console.error(err);
        }
    })
});

router.get('/api/tasks', (req, res) => {
    db.Task.findAll({})
        .then(dbNeed => {
            res.json(dbNeed);
        }).catch(err => {
        if (err) {
            console.error(err);
        }
    })
});


//get route for tasks page
router.get('/tasks', (req, res) => {
    console.log('hit /tasks');
    db.Task.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(dbTask => {
        const hdbsObject = {
            tasks: dbTask
        };
        // console.log(dbNeed);
        res.render('tasks', hdbsObject);
    }).catch(err => {
        if (err) {
            console.error(err);
        }
    })
});
//get route for skills page
router.get('/skills', (req, res) => {
    db.Skills.findAll({}).then(dbSkill => {
        const hdbsObject = {
            skills: dbSkill
        };
        res.render('skills', hdbsObject);
    }).catch(err => {
        if (err) {
            console.error(err);
        }
    });
});
// router.post('/skills', (req, res) => {
//
// })

//post route for skills api
router.post('/api/skills', (req, res) => {
    console.log(req.body);
    db.Skills.create({
        name: req.body.name,
        email: req.body.email,
        skills: req.body.skills,
        title: req.body.title,
        compensation: req.body.compensation,
        category: req.body.category,
        location: req.body.location,
        description: req.body.description

    }).then(dbWants => {
        res.json(dbWants);
        return dbWants;


    }).then(dbWants => {
        console.log(`email: ${dbWants.email}`);
        const api_key = process.env.MAILGUN_API_KEY;
        const domain = process.env.MAILGUN_DOMAIN;
        const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
        const data = {
            from: 'Mail Gun <postmaster@sandbox1b5e6382d43947a7868b05e04f5bdc23.mailgun.org>',
            to: `${dbWants.email}`,
            subject: `update`,
            text: `Your skill has been added to our site! Prepare to trade for what you need!`
        };
        console.log(`data: ${JSON.stringify(data, null, 2)}`);
        mailgun.messages().send(data, function (error, body) {
            console.log(error);
            console.log(`body: ${body}`)
        }).catch(err => {
            console.error(err);
        });

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
    }).then(dbNeeds => {
        res.json(dbNeeds);
        return dbNeeds;
    }).then(dbNeeds => {
        console.log(`email: ${dbNeeds.email}`);
        const api_key = process.env.MAILGUN_API_KEY;
        const domain = process.env.MAILGUN_DOMAIN;
        const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
        const data = {
            from: 'Mail Gun <postmaster@sandbox1b5e6382d43947a7868b05e04f5bdc23.mailgun.org>',
            to: `${dbNeeds.email}`,
            subject: `update`,
            text: `Your skill has been added to our site! Prepare to trade for what you need!`
        };
        console.log(`data: ${JSON.stringify(data, null, 2)}`);
        mailgun.messages().send(data, function (error, body) {
            console.log(error);
            console.log(`body: ${body}`)
        }).catch(err => {
            console.error(err);
        });
    });
})
module.exports = router;


