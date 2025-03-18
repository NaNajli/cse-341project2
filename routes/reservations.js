const express =require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservations');

router.get('/', reservationsController.getAll);

router.get('/:id' , reservationsController.getSingle);

// POST route to create a new contact
router.post('/' , reservationsController.createReservations);
// route to update a contact
router.put('/:id' , reservationsController.updateReservation);
// route to delete a contact
router.delete('/:id' , reservationsController.deleteReservation);

module.exports = router;