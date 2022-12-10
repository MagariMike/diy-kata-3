const humanCatDogYears = (number) => {
    let humanYears = number;
    
    let catYears = 0;
    for (let i = 1; i <= number; i++) {
       if (i === 1) {
        catYears += 15
       } else if   (i === 2) {
        
      catYears += 9
       } else {
        catYears += 4
       }
    
    }
  
  let dogYears = 0;
  for (let i = 1; i <= 1; i++) {
    if (i === 1) {
        dogyears += 15
    } else if (i === 2) {
        dogYears += 9
    } else {
        dogYears += 5
    }
  }

  
};

module.exports = humanCatDogYears;
