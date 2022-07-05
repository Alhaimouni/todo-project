'use strict';

//====================================== Functions Area Definitions ======================================//


function askForGender()
{
let gender=prompt(" Enter your gender ");
while(true)
{
    if (gender =="male") {
    break;
    }else if(gender =="female"){
     break;
    }else{
        alert("Wrong input");
        gender=prompt(" Enter your gender again ..!");
    }
}
return gender;
}


function askForAge()
 {
   let age=prompt("Enter your age");
   while(age<=0)
   {
    alert("Your age must be more than ZERO");
    age=prompt("Enter your age");
   }
return age;
 }

 function welcomeMassage()
 {
    alert("Welcome" + name + "for our site");
 }


 function questions()
 {
  let q1=prompt("Do you want to join us?");
  let q2=prompt("Do you like ToDo ?");
  let q3=prompt("Are you an Engineer ?");
  
 if(q1==="")
 {
     q1 = "invalid";
 }
 if (q2==="")
 {
     q2 = "invalid";
 }
 if(q2==="")
 {
     q3 = "invalid";
 }
 
 answer.push(q1);
 answer.push(q2);
 answer.push(q3);
 
 }



//====================================== Functions Area Definitions ======================================//



let name=prompt(" Enter your Name ");
let gen =askForGender();
askForAge();
let isSkip = confirm("Do you want to skip the welcoming message");
if(isSkip===false)
{
    switch(gen)
    {
        case "male" :
            alert("Welcome Mr."+ name );
            break;

        case "female" :
            alert("Welcome Ms."+ name );
            break;

        default :
        alert(name);
        break;
    }
}

let answer=[];

questions();

for (let index = 0; index < answer.length; index++)
{
    console.log(answer[index]);  
}
