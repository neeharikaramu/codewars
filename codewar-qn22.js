// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:
//Let P be the Principal = 1000.00      
//Let I be the Interest Rate = 0.05      
//Let T be the Tax Rate = 0.18      
//Let D be the Desired Sum = 1100.00


//After 1st Year -->
//P = 1041.00
//After 2nd Year -->
//P = 1083.86
//After 3rd Year -->
//P = 1128.30

// P: takes in 4 number values. prin, inte, tax and desired
// R: a number. number of years it takes to get desired sum of money after investing
// E: see above
// P: 




// let count=0;
// function calculateYears(principal, interest, tax, desired) {
//   if(principal<desired){
//     let interestForMoney = principal*interest;
//     let principalWithInterest = principal+(interestForMoney);
//     let taxOverInterest = interestForMoney*tax;
//     let sumForThatYear = principalWithInterest-taxOverInterest;
//     count++
//     calculateYears(sumForThatYear,interest,tax,desired);
//   }
//     return count;

// }

// console.log(calculateYears(1000, 0.05, 0.18, 1100));


// function calculate(principal,interest,tax,desired){
//   let count = 0;
//   years(principal,interest,tax,desired,count)
// }

// function years(principal,interest,tax,desired,count) {
//   if(principal<desired){
//     let interestForMoney = principal*interest;
//     let principalWithInterest = principal+(interestForMoney);
//     let taxOverInterest = interestForMoney*tax;
//     let sumForThatYear = principalWithInterest-taxOverInterest;
//     count++
//     console.log(count);
//     years(sumForThatYear,interest,tax,desired,count);
//   }
//   return count;
// }

// console.log(calculate(1000, 0.05, 0.18, 1100));
// // console.log(calculate(1000,0.01625,0.18,1200));



function calculateYears(principal, interest, tax, desired) {
    for(years=0;principal<desired;years++){
      principal+=principal*interest*(1-tax) //When you pay taxes you dont get the 100% of your money, you get 100% - TAX(in percent, its the same as 1 - 0.18(in example)
    }
    return years;
  }
  
  
  console.log(calculateYears(1000, 0.05, 0.18, 1100));
  console.log(calculateYears(1000,0.01625,0.18,1200));
  
  //with while loop
  // function calculate(principal,interest,tax,desired){
  //   let years=0;
  //   while(principal<desired){
  //     principal+=principal*interest*(1-tax);
  //     years++
  //   }
  //   return years;
  // }
  
  // console.log(calculate(1000, 0.05, 0.18, 1100));
  // console.log(calculate(1000,0.01625,0.18,1200));
  
  // function calculateYears(principal, interest, tax, desired) {
  //   for (var years = 0; principal < desired; years++) { //only works for var for some reason. if i do let it doesn work google it.
  //     principal += principal * interest * (1 - tax);
  //   }
  //   return years;
  // }
  
  
  
  
  
  // function calculateYears(principal, interest, tax, desired) {
  //   return Math.ceil(
  //     Math.log(desired / principal) / 
  //     Math.log(1 + interest * (1 - tax))
  //   );
  // }