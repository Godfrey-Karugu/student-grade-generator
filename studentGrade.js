function gradeGenerator(){
  let grade;
  const mark = parseInt(prompt("Enter marks: "));

  if (mark >100 || mark <0){
    grade = "Invalid Marks"
  }
  else if(mark >=70){
    grade = "Grade: A";
  }
  else if(mark>=60){
    grade = "Grade: B";
  }
  else if(mark >=50){
    grade = "Grade: C";
  }
  else if(mark>=40){
    grade = "Grade: D";
  }
  else if(mark >=0){
    grade = "Grade: E";
  }
document.getElementById("display").innerHTML = grade;
}