function cashRegModule() {
  var number = 0;

  var toBeAdded = 0;

  function getNumber() {
    return number;
  }

  function setNumber(x){
    number = x;
  }

  function getToBeAdded(){
    return toBeAdded;
  }

  function setToBeAdded(x){
    toBeAdded = x;
  }

  return{
    getNumber : getNumber,
    setNumber : setNumber,
    getToBeAdded : getToBeAdded,
    setToBeAdded : setToBeAdded
  };
}

var CR = cashRegModule();
var myCalc = calculator();

var operator = 0;