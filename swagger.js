const swaggerAutogen = require('swagger-autogen')();

// create a document
const doc = {
    info:{
        title:'Rooms and reservations Api',
        description:'Rooms and reservations Api'
    },
    host:'localhost:3000',
    schemes :['http', 'https']
}

const outpustFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//will generate swagger.json
swaggerAutogen(outpustFile,endpointsFiles,doc)