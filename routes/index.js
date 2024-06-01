const router = require('express').Router();
const moviesRoute = require('./movies.route.js');

router.use('/movies', moviesRoute);

module.exports = router;