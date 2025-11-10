const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts',
    version: '1.0.0'
  },
  host: 'cse341-ks3d.onrender.com',
  schemes: ['https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Contacts',
      description: 'Endpoints for managing contacts'
    }
  ],
  definitions: {
    Contact: {
      firstName: 'Aya',
      lastName: 'Rose',
      email: 'aya.rose@example.com',
      favoriteColor: 'purple',
      birthday: '1995-10-12'
    }
  }
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc).then(() => {
  console.log('Swagger documentation generated successfully!');
});