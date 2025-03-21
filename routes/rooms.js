const express =require('express');
const router = express.Router();
const roomsController = require('../controllers/rooms.js');
const roomValidation = require('../utilities/validation.js')

router.get('/', roomsController.getAll);

router.get('/:id' , roomsController.getSingle);

// POST route to create a new contact
router.post('/' , 
    roomValidation.roomValidationRules(),
    roomValidation.validate,
    roomsController.createRooms);
        

// route to update a contact
router.put('/:id' ,
    roomValidation.roomValidationRules(),
    roomValidation.validate,
    roomsController.updateRoom);

// route to delete a contact
router.delete('/:id' , roomsController.deleteRoom);

module.exports = router;