
function even(number){
  var numbers = [];
  for(var i = 0; i <= number; i++){
    numbers[i] = i;
  }
  var evens = numbers.filter(function(i){return i % 2 === 0;});
  return evens;
}
