const mongoose = require('mongoose');



var user = process.env.MONGO_USER;
var password = process.env.MONGO_PWD;
var dbName = process.env.MONGO_URL;


// useNewUrlParser ;)
var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true
 };
 

// --------------------- BDD -----------------------------------------------------
mongoose.connect(`mongodb+srv://${user}:${password}@${dbName}`,
   options,
   function(err) {
    if (err) {
      console.log(`error, failed to connect to the database because --> ${err}`);
    } else {
      console.info('*** Database NaliHair connection : Success ***');
    }
   }
);

module.exports = mongoose