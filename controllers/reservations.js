const mongodb = require('../data/database');
//this is the unique object ID that mongo assigns to all this databases entries
const ObjebtId = require('mongodb').ObjectId;

const getAll = async (req ,res )=>
    {
    // #swagger.tags =['Reservations']     
    const result = await mongodb.getDatabase().db().collection('reservations').find();
    result.toArray().then((reservations) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(reservations);
        

    })}

    const getSingle = async (req ,res )=>
        {   // #swagger.tags =['reservations']  
            const reservationId = new ObjebtId (req.params.id)
            const result = await mongodb.getDatabase().db().collection('reservations').find({_id:reservationId});
            result.toArray().then((reservations) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(reservations[0]);
                
        
            })};

    const createReservations = async(req ,res )=>
        {   // #swagger.tags =['Reservations']  
            const reservation = {               
            reservation_id : req.body.reservation_id,
            reservation_date : req.body.reservation_date,
            first_name : req.body.first_name,
            last_name : req.body.last_name,

            };
            const response = await mongodb.getDatabase().db().collection('reservations').insertOne(reservation);
            if (response.acknowledged)
                {
                    res.status(204).send();
                }
            else{
                res.status(500).json(response.error || 'Some error ocurred while updating the Reservation')
            }    
        }; 
        
        
        const updateReservation = async(req ,res )=>
            {   // #swagger.tags =['Reservation']  
                const reservationId = new ObjebtId (req.params.id)
                const reservation = {
                reservation_id : req.body.reservation_id,
                reservation_date : req.body.reservation_date,
                first_name : req.body.first_name,
                last_name : req.body.last_name,
    
                };
                const response = await mongodb.getDatabase().db().collection('reservations').replaceOne({_id:reservationId},reservation);
                if (response.modifiedCount > 0)
                    {
                        res.status(204).send();
                    }
                else{
                    res.status(500).json(response.error || 'Some error ocurred while updating the reservation')
                }    
            };
            
         
            const deleteReservation = async(req ,res )=>
                {   // #swagger.tags =['Reservation']  
                    const reservationId = new ObjebtId (req.params.id)
                    const reservation = {
                        reservation_id : req.body.reservation_id,
                        reservation_date : req.body.reservation_date,
                        first_name : req.body.first_name,
                        last_name : req.body.last_name,
        
                    };
                    const response = await mongodb.getDatabase().db().collection('reservations').deleteOne({_id:reservationId});
                    if (response.deletedCount> 0)
                        {
                            res.status(204).send();
                        }
                    else{
                        res.status(500).json(response.error || 'Some error ocurred while deleting the reservation')
                    }    
                };       
    
         module.exports =
         {getAll,
          getSingle,
          createReservations,
          updateReservation,
          deleteReservation
         };