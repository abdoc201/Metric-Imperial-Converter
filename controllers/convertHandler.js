function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    if(input.match(/^([\d\/\.]+)([\w]+)$/)==null){
      return 1
    }
    if(/\/.*\//.test(input)){
      return 'invalid number'
    }
    result = eval(input.match(/^([\d\/\.]+)([\w]+)$/)[1])
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    if(input=="") return 'invalid unit'
    const units = ['gal','l','km','kg','lbs','mi']
    if(input.match(/^([\d\/\.]+)([\w]+)$/)==null){
      input = 1 + input
    }
    result = input.match(/^([\d\/\.]+)([\w]+)$/)[2]
    if(!units.includes(result.toLowerCase()))
      return 'invalid unit'

    return result.toLowerCase()=='l'?result.toUpperCase():result.toLowerCase();
  };
  
  this.getReturnUnit = function(initUnit) {
    let result
    switch(initUnit.toLowerCase()){
      case 'gal':
        result = 'l'.toUpperCase()
        break
      case 'l':
        result = 'gal'
        break
      case 'lbs':
        result = 'kg'
        break
      case 'kg':
        result = 'lbs'
        break
      case 'mi':
        result = 'km'
        break
      case 'km':
        result = 'mi'
        break
      default:
        return 'invalid unit'
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit.toLowerCase()){
      case 'gal':
        result = 'gallons'
        break
      case 'l':
        result = 'liters'
        break
      case 'lbs':
        result = 'pounds'
        break
      case 'kg':
        result = 'kilograms'
        break
      case 'mi':
        result = 'miles'
        break
      case 'km':
        result = 'kilometers'
        break
      default:
        break
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if(/\//.test(initNum)){
      initNum = eval(initNum)
    }
    switch(initUnit.toLowerCase()){
      case 'gal':
        result = initNum * galToL
        break
      case 'l':
        result = initNum / galToL 
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'km':
        result = initNum / miToKm
        break
      default:
        return 0
    }
    // toFixed() returns a string , so we add + so it returns a number
    return +result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
    return result;
  };
  
}

module.exports = ConvertHandler;