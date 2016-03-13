function updateDisplay(){
  document.getElementById('answer').innerHTML = CR.getNumber();
}

document.getElementById('add').onclick = function(){

  if(operator === 0){
    operator += 1;
    CR.setNumber(document.getElementById('answer').innerHTML);
    document.getElementById('answer').innerHTML += "+";

  }

};

document.getElementById('3').onclick = function(){
  if(operator === 0){
    document.getElementById('answer').innerHTML += "3";
  }
  else if (operator === 1){
    document.getElementById('answer').innerHTML = "3";
    operator = 0;
  }
};

document.getElementById('4').onclick = function(){
  if(operator === 0){
    document.getElementById('answer').innerHTML += "4";
  }
  else if (operator === 1){
    document.getElementById('answer').innerHTML = "4";
    operator = 0;
  }
};

document.getElementById('=').onclick = function(){
  CR.setToBeAdded(document.getElementById('answer').innerHTML);
  document.getElementById('answer').innerHTML = myCalc.add(CR.getToBeAdded(),CR.getNumber());
};