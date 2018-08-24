const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('saving db tests', function () {

    it('save a record to the db', function (done) {

        var char = new MarioChar({
            name: "Mario1"
        });

        char.save().then(function (err) {
            assert(char.isNew === false);
            done();
        });

    });



});