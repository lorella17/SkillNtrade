const db = require('./../models');

const express = require('express');

const router = express.Router();

//get route for main page
router.get('/', (req, res) => {
    res.send(`This shit's working`)
});
//     .then().catch( err => {
//     console.error(err);
// })

//get route for wants api
router.get('/api/wants', (req, res) => {
    db.Wants.findAll({})
        .then(dbWant => {

            res.json(dbWant);
        }).catch( err => {
            if(err) {
                console.error(err);
            }
    })
});

router.get('/api/needs', (req, res) => {
    db.Needs.findAll({})
        .then(dbNeed => {
            res.json(dbNeed);
        }).catch( err => {
        if(err) {
            console.error(err);
        }
    })
});


//get route for needs page
router.get('/needs', (req, res) => {
    db.Needs.findAll({}).then(dbNeed => {
        const hdbsObject = {
            needs: dbNeed
        };
        // console.log(dbNeed);
        res.render('needs', hdbsObject);
    }).catch(err => {
        if(err){
            console.error(err);
        }
    })
});
//get route for wants page
router.get('/wants', (req, res) => {
    db.Wants.findAll({}).then(dbWant => {
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

//post route for want api
router.post('/api/wants', (req, res) => {
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

//post route for needs api
router.post('/api/needs', (req, res) => {
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


