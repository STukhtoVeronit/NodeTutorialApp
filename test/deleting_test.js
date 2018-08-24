const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('deleting db tests', function () {

    var char;

    beforeEach(function (done) {
        char = new MarioChar({
            name: "Mario1"
        });

        char.save().then(function (err) {
            done();
        });
    });

    it('should delete one record by name from the db', function (done) {
        MarioChar.findOneAndRemove({name: 'Mario1'}).then(function () {
            MarioChar.findOne({name: 'Mario1'}).then(function (result) {
                assert(result === null);
                done();
            })
        });
    });



});