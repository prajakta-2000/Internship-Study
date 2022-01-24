const Sequelize = require('sequelize');
const sequelize = new Sequelize('books', 'prajakta', 'Praj@2000', {
    host: 'localhost',
    dialect: 'mysql'
  });

const Author = sequelize.define('author', {
name: {
    type: Sequelize.STRING,
},
city: {
    type: Sequelize.STRING
},
}, {
timestamps: false
});
  
Author.findAll().then(author => {
    console.log("All authors:", JSON.stringify(author, null, 4));
});
async function myfunction() {
    Author.drop();
    console.log("User table dropped!");
  }
  
  (async() => {
    console.log('before start');
  
    await myfunction();
    
    console.log('after start');
})();
