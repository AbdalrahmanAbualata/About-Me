'use strict';

let str=['my major is electrical engineering ?','"Do i like programming ?','Do you think i studied at Alhashemih university ?','did i graduated in 2019','Is my goal to be professional in computer security '];

let q1,q2,q3,q4,q5;
let arr=[q1,q2,q3,q4,q5];

for(let i=0;i<arr.length;i++){
  arr[i]= prompt(str[i]);
  if(arr[i] =='y' || arr[i]=='yes' && i%2==0 ){
    
    alert("your answer is wrong ");
 }else if(arr[i] =='n' || arr[i]=='no' && i%2==0 ){
        
 alert("your answer is correct ");
  }else if(arr[i] =='y' || arr[i]=='yes' && i%2!=0 ){
    
    alert("your answer is correct ");
}else if(arr[i] =='n' || arr[i]=='no' && i%2==0 ){

 alert("your answer is wrong ");
}

}


// confirm("Hi there, my name is Dima Zeklam, living in Amman,Jordan");
// let firstName = prompt(" What is your name ?");
// confirm("Hi " + firstName + " You have to answer the questions by typing yes/no or y/n , let's get started");
// //question 1
// let Q1 = prompt(" my major is electrical engineering ?").toLowerCase();

// if(Q1 == 'y' || Q1 == 'yes' )
// {
//   //  console.log("wrong");
//     alert("your answer is wrong ");
// }else{
// //console.log("correct");
// alert("your answer is correct ");
// }

// //question 2
// let Q2 = prompt("Do i like programming ?").toLowerCase();
// switch(Q2){
//     case 'yes':
//         case 'y':
//            // console.log("correct");
//             alert("your answer is correct ");
//             break;
//             case 'no':
//                 case 'n':
//                     //console.log("wrong");
//                     alert("your answer is wrong ");
//                       break;

// }

// //question 3
// let Q3 = prompt("Do you think i studied at Alhashemih university ?").toLowerCase();
// if(Q3 == 'y' || Q3 == 'yes')
// {
//     //console.log("wrong");
//     alert("your answer is wrong ");
// }else{
// //console.log("correct");
// alert("your answer is correct ");
// }
// //question 4
// let Q4 = prompt("did i graduated in 2019 ?").toLowerCase();
// if(Q4 == 'y' || Q4 == 'yes')
// {
//     //console.log("correct");
//     alert("your answer is correct ");
// }else{

// //console.log("wrong");
// alert("your answer is wrong ");
// }
// //question 5
// let Q5 = prompt("Is my goal to be professional in computer security ?").toLowerCase();

// if(Q5 == 'y' || Q5 == 'yes')
// {
//     //console.log("wrong");
//     alert("your answer is wrong ");
// }else{
// //console.log("correct");
// alert("your answer is correct ");
// }

let numb =8;
let x= 4;
for(let i=1;i<=4;i++){
    let input = Number(prompt('Try to guess the number and type it belwo,you have just ' + x + ' attempts'));
    if(input < numb){
        alert('Too low , try again');
        x--;
    }else if(input >numb)
    {
        alert('Too high, try again');
        x--;
    }else if(input === numb){
        alert('That is correct , good job ');
        break;
    }
}

alert('The correct answer is 8');



let n= 6;
let arrnum=[5,80,8]; 
for(let y=1;y<=6;y++){
    
    let input2 = Number(prompt('Try to guess the any of the numbers and type it belwo,you have just' + n + ' attempts'));
    for(let z=0;z<arrnum.length;z++){
    if(input2 === arrnum[z] || input2 === arrnum[1] || input2 === arrnum[2]){
        alert('That is correct , good job ');
      y=7;
      break;
    } 
       
   }  
   if(y== 7)
   break;
   alert('try again ');
        n--;
   
    }

    alert('The correct answers are '+ arrnum); 

alert("Hello " + firstName + " thank you for visiting this site , see you again ^_^ " );