
function BMICalculator (w, h) {

  const BMI_Long = w / Math.pow (h, 2);
  const BMI = BMI_Long.toFixed(2); 
  
  return  BMI == Infinity ?  " Height cannot be 0 or empty !!!" 

    : BMI < 0 ? "Negative numbers are not allowed !!!"
  
    : BMI > 0 && BMI < 18.5 ? "Your BMI is " + BMI + ", so you are underweight!"
    
    : BMI >= 18.5 && BMI <= 24.9? "Your BMI is " + BMI + ", so you have a normal weight."

    : BMI > 24.9 ? "Your BMI is " + BMI + ", so you are overweight!!"

    : BMI == 0.00 ? "Weight cannot be 0 or empty !!!"

    :  " Both fields must have input !!!"
  
}


function displayBMI() {
  const Weight = document.getElementById("weight").value;
  const Height = document.getElementById("height").value;
  
  const bmi1 = BMICalculator(Weight,Height)
  document.getElementById("result").innerHTML = bmi1; 

}