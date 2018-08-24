const mongoose = require('mongoose');

//es6 promise
//hook
before(function (done) {
    //connect to MDB
    mongoose.connect('mongodb://localhost:27017/testaroo',{ useNewUrlParser: true });
    //events listeners for connection
    mongoose.connection.once('open', function () {
        console.log('connection susses');
        done();
    }).on('error', function (error) {
        console.log(error);
    });
});

beforeEach(function (done) {
   //drop the collection
   mongoose.connection.collections.mariochars.drop(function () {
       done();
   });

});
