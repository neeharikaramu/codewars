// Write function bmi that calculates body mass index (bmi = weight / height2).

//P:weight so its a number 
//R:returns given strings based on the bmi which we have to calculate
//E: if bmi <= 18.5 return "Underweight" ; if bmi <= 25.0 return "Normal";  if bmi <= 30.0 return "Overweight";if bmi > 30 return "Obese"
//P:


function bmi(weight, height) {
    // let bmiValue=weight/(height*height);
    // if(bmiValue<=18.5){
    //     return 'underweight'
    // }
    // else if(bmiValue>18.5 && bmiValue<=25){
    //     return 'normal'
    // }
    // else if(bmiValue>25 && bmiValue<=30){
    //     return 'oveeweight'
    // }
    // else{
    //     return 'obese'
    // }

    let bmiValue=weight/(height*height);
    return (bmiValue<=18.5) ? 'Underweight' 
    :(bmiValue>18.5 && bmiValue<=25) ?  'Normal'
    :(bmiValue>25 && bmiValue<=30) ? 'Overweight' 
    :'Obese';
  }

console.log(bmi(80,1.80));