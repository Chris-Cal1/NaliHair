const mongoose = require('mongoose');

// useNewUrlParser ;)
var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true
 };
 

// --------------------- BDD -----------------------------------------------------
mongoose.connect('mongodb+srv://chris:QQB6LdVrSohl5NI8@cluster0.pxzni.mongodb.net/NailyHair?retryWrites=true&w=majority',
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