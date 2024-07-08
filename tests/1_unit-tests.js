const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');
const { init } = require('../server.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('read a whole number input',()=>{
        assert.equal(convertHandler.getNum('5L'),5)
    })
    test('read a decimal number input',()=>{
        assert.equal(convertHandler.getNum('2.3gal'),2.3)
    })
    test('read a fractional input',()=>{
        assert.equal(convertHandler.getNum('5/2kg'),2.5)
    })
    test('read a fractional input with a decimal',()=>{
        assert.equal(convertHandler.getNum('5.2/1mi'),5.2)
    })
    test('return an error on a double-fraction',()=>{
        assert.equal(convertHandler.getNum('3/2/3'),'invalid number')
    })
    test('default numerical input of 1 when no numerical input is provided',()=>{
        assert.equal(convertHandler.getNum('L'),1)
    })

    test('read each valid input unit',()=>{
        assert.equal(convertHandler.getUnit('4gal'),'gal')
    })
    test('return an error for an invalid input unit',()=>{
        assert.equal(convertHandler.getUnit('gals'),'invalid unit')
    })
    test('return the correct return unit for each valid input unit',()=>{
        assert.equal(convertHandler.getReturnUnit('gal'),'L')
    })
    test('correctly return the spelled-out string unit for each valid input unit',()=>{
        assert.equal(convertHandler.spellOutUnit('gal'),'gallons')
    })

    test('correctly convert gal to L',()=>{
        assert.equal(convertHandler.convert('4', 'gal'),'15.14164')
    })
    test('correctly convert L to gal',()=>{
        assert.equal(convertHandler.convert('2', 'L'),'0.52834')
    })
    test('correctly convert mi to km',()=>{
        assert.equal(convertHandler.convert('3.1', 'mi'),'4.98895')
    })
    test('correctly convert km to mi',()=>{
        assert.equal(convertHandler.convert('1', 'Km'),'0.62137')
    })
    test('correctly convert lbs to kg',()=>{
        assert.equal(convertHandler.convert('5.4/31', 'lbs'),'0.07901')
    })
    test('correctly convert kg to lbs',()=>{
        assert.equal(convertHandler.convert('2','Kg'),'4.40925')
    })

});