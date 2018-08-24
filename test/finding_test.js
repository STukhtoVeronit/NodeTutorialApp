const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('finding db tests', function () {

    var char;

    beforeEach(function (done) {
        char = new MarioChar({
            name: "Mario1"
        });

        char.save().then(function (err) {
            done();
        });
    });

    it('should finds one record by name from the db', function (done) {
        MarioChar.findOne({name: 'Mario1'}).then(function (result) {
            assert(result.name === 'Mario1');
            done();
        });
    });

    it('should finds one record by ID from the db', function (done) {
        MarioChar.findOne({_id: char._id}).then(function (result) {
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });



});