const quarterOf = (month) => {
  if (month >= 1 && month <= 3) { 
    return '1 quater' ;
  }
  else if (month > 3 && month <=6) {
    return '2 quater';
  }
    else if (month > 6 && month <=9) {
       return '3 quater'; 
      }   
  else if (month > 9 && month <=12) {
    return '4 quater';
  }
};

const quatr = quarterOf;
console.log(quarterOf(1));