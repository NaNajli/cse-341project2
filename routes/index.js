const passport = require('passport');

const router = require('express').Router();
router.use('/', require('./swagger'));

// #swagger.tags =['Hello World']
// router.get('/', (req , res)=>{res.send('Hello World');});

router.use('/rooms', require('./rooms'));

router.use('/reservations', require('./reservations'));

router.get('/login', passport.authenticate('github'),(req,res)=>{});

router.get('/logout' , function(req , res,next)
{
    req.logout(function(err){
        if(err){return next(err);}
        res.redirect('/')
    });
});

module.exports = router;