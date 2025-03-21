const swaggerAutogen = require('swagger-autogen')();

// create a document
const doc = {
    info:{
        title:'Rooms and reservations Api',
        description:'Rooms and reservations Api'
    },
    host:'https://cse-341project2-sy5s.onrender.com/',
    schemes :['https', 'http']
}

const outpustFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//will generate swagger.json
swaggerAutogen(outpustFile,endpointsFiles,doc)