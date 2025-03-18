const express =require('express');
const router = express.Router();
const roomsController = require('../controllers/rooms.js');

router.get('/', roomsController.getAll);

router.get('/:id' , roomsController.getSingle);

// POST route to create a new contact
router.post('/' , roomsController.createRooms);
// route to update a contact
router.put('/:id' , roomsController.updateRoom);
// route to delete a contact
router.delete('/:id' , roomsController.deleteRoom);

module.exports = router;