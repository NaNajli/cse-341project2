const express =require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservations');
const reserValidation = require('../utilities/validation');

router.get('/', reservationsController.getAll);

router.get('/:id' , reservationsController.getSingle);

// POST route to create a new contact
router.post('/' ,
    reserValidation.reservationValidationRules(),
    reserValidation.validate,
    reservationsController.createReservations,
    );
// route to update a contact
router.put('/:id' , 
    reserValidation.reservationValidationRules(),
    reserValidation.validate,
    reservationsController.updateReservation
    );
    
// route to delete a contact
router.delete('/:id' , reservationsController.deleteReservation);

module.exports = router;