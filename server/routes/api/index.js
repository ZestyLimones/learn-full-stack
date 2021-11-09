const router = require('express').Router();
const userRoutes = require('./userRouters');

router.use('/user', userRoutes);

module.exports = router;
