const express =require('express');
const router = express.Router();
const roomsController = require('../controllers/rooms.js');
const roomValidation = require('../utilities/validation.js');
const {isAuthenticated} = require('../utilities/authenticate');

router.get('/', roomsController.getAll);

router.get('/:id' , roomsController.getSingle);

// POST route to create a new contact
router.post('/' , 
    roomValidation.roomValidationRules(),
    roomValidation.validate,
    isAuthenticated,
    roomsController.createRooms);
        

// route to update a contact
router.put('/:id' ,
    roomValidation.roomValidationRules(),
    roomValidation.validate,
    isAuthenticated,
    roomsController.updateRoom);

// route to delete a contact
router.delete('/:id' ,
    isAuthenticated, 
    roomsController.deleteRoom);

module.exports = router;