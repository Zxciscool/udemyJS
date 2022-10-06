const quarterOf = (month) => {
  if (month >= 1 && month <= 3) { 
    return 'first quater' ;
  }
  else if (month > 3 && month <=6) {
    return 'second quater';
  }
    else if (month > 6 && month <=9) {
       return 'third quater'; 
      }   
  else if (month > 9 && month <=12) {
    return 'fouth quater';
  }
};

const quatr = quarterOf;
console.log(quarterOf(1));