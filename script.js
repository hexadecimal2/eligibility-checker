 function checkEligibility(age, member){           
  if (age >= 65){
   alert("Senior Discount");
  }
  else if (age >= 18 && member == true){
   alert("Member Discount");
  }
  else {
   alert("No discount");
  }
 }