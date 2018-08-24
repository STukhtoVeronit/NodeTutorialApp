const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('updating db tests', function () {

    var char;

    beforeEach(function (done) {
        char = new MarioChar({
            name: "Mario1",
            weight: 50
        });

        char.save().then(function (err) {
            done();
        });
    });

    it('should update one record by name in the db', function (done) {
        MarioChar.findOneAndUpdate({name: 'Mario1'}, {name: 'Mario5'}).then(function () {
           MarioChar.findOne({_id: char._id}).then(function (result) {
               assert(result.name === 'Mario5');
               done();
           });
        });
    });

    it('should increments the weight by 1 in the db', function (done) {
        MarioChar.update({},{$inc:{weight: 1} }).then(function () {
            MarioChar.findOne({name:'Mario1'}).then(function (result) {
                assert(result.weight === 51);
                done();
            })
        })
    });



});