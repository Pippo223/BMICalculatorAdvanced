
function BMICalculator (w, h) {

  const BMI = w / Math.pow (h, 2);
 
  if (BMI > 0 && BMI < 18.5)    
  return ("Your BMI is " + BMI + " so you are underweight.")
  
  else if (BMI >= 18.5 && BMI <= 24.9)
  return ("Your BMI is " + BMI + " so you have a normal weight.")

  else if (BMI > 24.9)
  return ("Your BMI is " + BMI + " so you are overweight.");
   
   else 
  return ("Input format not supported") 
}




function displayBMI() {
  const Weight = document.getElementById("weight").value;
  const Height = document.getElementById("height").value;
  const bmi1 = BMICalculator(Weight,Height)
  document.getElementById("result").innerHTML = bmi1; 
 

}