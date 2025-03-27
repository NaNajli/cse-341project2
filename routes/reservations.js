const express =require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservations');
const reserValidation = require('../utilities/validation');
const {isAuthenticated} = require('../utilities/authenticate')

router.get('/', reservationsController.getAll);

router.get('/:id' , reservationsController.getSingle);

// POST route to create a new contact
router.post('/' ,
    reserValidation.reservationValidationRules(),
    reserValidation.validate,
    isAuthenticated,
    reservationsController.createReservations,
    );
// route to update a contact
router.put('/:id' , 
    reserValidation.reservationValidationRules(),
    reserValidation.validate,
    isAuthenticated,
    reservationsController.updateReservation
    );
    
// route to delete a contact
router.delete('/:id' ,
     isAuthenticated,
     reservationsController.deleteReservation);

module.exports = router;