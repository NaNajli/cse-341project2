const { body , validationResult } = require('express-validator');

const roomValidationRules =()=>{ 
    return [
    body('room', 'Name of room is required').not().isEmpty(),
    body('persons', 'Number of person is required').not().isEmpty(),
    body('description', 'Description must be 4 or more characters').isLength({ min: 4 }),
    body('price', 'Price is required').not().isEmpty(),
   
]}
const reservationValidationRules = ()=> { 
    return [
    body('first_name', 'Name is required').not().isEmpty(),
    body('last_name', 'Last Name is required').not().isEmpty(),
    // body('reservation_date', 'Date must be 6 or more characters').isLength({ min: 6 })
     
]}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })

  }
    
  
module.exports = {roomValidationRules , reservationValidationRules , validate}