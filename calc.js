function calculator(){
  function add(x, y){
    return Number(x) + Number(y);
  }

  return{
    add: add
  };
}