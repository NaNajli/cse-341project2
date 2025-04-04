const mongodb = require('../data/database');
//this is the unique object ID that mongo assigns to all this databases entries
const ObjebtId = require('mongodb').ObjectId;

const getAll = async (req ,res )=>
    { 
        try{
    // #swagger.tags =['Rooms']     
    const result = await mongodb.getDatabase().db().collection('rooms').find();
    result.toArray().then((rooms) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(rooms);
        

    }
)} catch{
    console.error('An error occurred while retrieving all rooms:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
}
}

const getSingle = async (req ,res )=>
    {   // #swagger.tags =['rooms']  
        try{
        const roomId = new ObjebtId (req.params.id)
        const result = await mongodb.getDatabase().db().collection('rooms').find({_id:roomId});
        result.toArray().then((rooms) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(rooms[0]);
            
        })}
        catch{
            console.error('An error occurred while retrieving room:', error);
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    
    };
const createRooms = async(req ,res )=>
    {   // #swagger.tags =['Rooms']
        try{
       const room = {               
       room : req.body.room,
       persons : req.body.persons,
       description: req.body.description,
       price : req.body.price,
       check_in : req.body.check_in,
       check_out: req.body.check_out
        };
        const response = await mongodb.getDatabase().db().collection('rooms').insertOne(room);
        if (response.acknowledged)
            {
                res.status(204).send();
            }
        else{
            res.status(500).json(response.error || 'Some error ocurred while updating the Room')
        }  
    }catch{
        console.error('Some error ocurred while created the Room:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }  
    }; 
        
        
        const updateRoom = async(req ,res )=>
            {   // #swagger.tags =['Rooms']  
                try{
                const roomId = new ObjebtId (req.params.id)
                const room = {
                    room : req.body.room,
                    persons : req.body.persons,
                    description: req.body.description,
                    price : req.body.price,
                    check_in : req.body.check_in,
                    check_out: req.body.check_out,
    
                };
                const response = await mongodb.getDatabase().db().collection('rooms').replaceOne({_id:roomId},room);
                if (response.modifiedCount > 0)
                    {
                        res.status(204).send();
                    }
                else{
                    res.status(500).json(response.error || 'Some error ocurred while updating the room')
                } }
                catch{
                    console.error('Some error ocurred while updating the Room:', error);
                    res.status(500).json({ error: 'An unexpected error occurred' });
                }   
            };
            
         
            const deleteRoom = async(req ,res )=>
                {   // #swagger.tags =['Rooms']  
                    try{
                    const roomId = new ObjebtId (req.params.id)
                    const room = {
                        room : req.body.room,
                        persons : req.body.persons,
                        description: req.body.description,
                        price : req.body.price,
                        check_in : req.body.check_in,
                        check_out: req.body.check_out
        
                    };
                    const response = await mongodb.getDatabase().db().collection('rooms').deleteOne({_id:roomId});
                    if (response.deletedCount> 0)
                        {
                            res.status(204).send();
                        }
                    else{
                        res.status(500).json(response.error || 'Some error ocurred while deleting the room')
                    } }
                    catch{
                        console.error('Error deleting room:', error);
                        res.status(500).json({ error: 'An unexpected error occurred' });
                    }   
                };       
    
         module.exports =
         {getAll,
          getSingle,
          createRooms,
          updateRoom,
          deleteRoom
         };