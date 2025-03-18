const router = require('express').Router();

// router.use('/', require('./swagger'));
// #swagger.tags =['Hello World']
router.get('/', (req , res)=>{res.send('Hello World');});

router.use('/rooms', require('./rooms'));

module.exports = router;