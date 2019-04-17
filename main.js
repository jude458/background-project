

// var firstName = 'john ';
// var age = 54;


// console.log (firstName +''+ age );


// var  lastName , job, ismarried,


// lastName = 'Akpofure';
// job = 'Programmer';
// isMarried = true;

// document.write('My Name is ' + ' ' + firstName + ''+ lastName +' i am a '+ job + ' is he  married ' + isMarried); 



// var Name = prompt('what is your middleName ')

// console.log(firstName + Name  );




/* var markMass, markHeight;
    markMass = 85;
    markHeight = 1.85;

var johnMass , johnHeight;
    johnMass = 75;
    johnHeight= 1.89;


    markBmi = markMass / (markHeight * markHeight);
    johnBmi = johnMass / (johnHeight * johnHeight);

    if(markBmi > johnBmi){
      console.log('Mark\'s BMI is higher Than John\'s');
    }else{
        console.log('john\'s BMI is higher Than mark\'s');
    }

    //console.log('is Mark BMI higher than Jonh ? ' + '' +isHigher);



      
 var firstName = 'jude ';
 var age = 18;

  if (age < 16){
      console.log(firstName + 'he is a Boy');
  }else if (age > 13  && age < 20){
      console.log(firstName + 'He is a teenager');
  }else{
      console.log(firstName + 'he is a adult')
  }

 var drink = age >= 15 ? 'beer': 'juice';
 console.log(drink);


 johnTotalScore = (89 + 120 + 103) / 3;
 mikeTotalScore = (116 + 94 + 125) /3;
 maryTotalScore = (97 + 134 + 105) /3;


//function 

function calculateAge(birthYear ,firstName){
    return 2019 - birthYear;
}
  var ageMike =  calculateAge(1979);
  var ageJohn =  calculateAge(1971);
  var ageLen =  calculateAge(1989);
  
  console.log(ageMike,ageJohn,ageLen);


// function Decalration  
  function yearsUntilRetirement(year , firstName){
      var age = calculateAge(year)
      var retirement = 65 - age ;

      if (retirement > 0 ){
        console.log(firstName + ' Retires in ' + retirement + 'year')
      }else{
          console.log(firstName +' Has Retired');
      }
     
  }
     yearsUntilRetirement(1979 , 'jude')
     yearsUntilRetirement(1945 , 'john')
     yearsUntilRetirement(1979 , 'len')
     
   

    // Function Expression  
     var whatDoYouDon = function(job ,firstName){
          switch(job){
              case 'teacher':
              return firstName + ' teaches kid how to code';
              case 'Drive':
              return firstName +' drive a cab in lagos';
              default:
              return firstName + ' does somthing else';
          }

     }
     var program = whatDoYouDon('teacher', 'Jude' );
     var program1 = whatDoYouDon('Drive', 'ken' );
     var program2 = whatDoYouDon('Prgrammer', 'mike' );
    
        console.log(program);
        console.log(program1);
        console.log(program2);
        




        var john  = {
            fullName : 'John Paul',
            mass : 105,
            height : 1.5,
            calBIM: function(){
                this.BIM = this.mass / (this.height * this.height)
                return this.BIM;
            }

        }

        var mark  = {
            fullName : 'mark Ken ',
            mass : 125,
            height : 1.9,
            calBIM: function(){
                this.BIM = this.mass / (this.height * this.height)
                return this.BIM;
            }

        }
        john.calBIM();
        mark.calBIM();

        console.log(john ,mark);

        if(john.BIM > mark.BIM){
            console.log('john\'s BMI is higher Than mark\'s');
          }else if (mark.BIM > john.BIM){
              console.log('mark\'s BMI is higher Than john\'s');
          }else {
              console.log('they both have the same body Mass');
              
          } */


//      const firstName = ' jude ';
//      const lastName = 'paul';
//      yearOfBirth = 1979;

//      function calcAge(yearOfBirth){
//     return  2019 - yearOfBirth ;

//         console.log(`${firstName} ${lastName} is ${calcAge()} `)
//      }


//   let i = 23;

//   for(let i = 0; i < 5 ; +i++) {
//       console.log(i)
//   }

//   console.log(i)


//   function driverlincese(){
//       let firstName ='jude'
//       const yearOfBirth = 1979;

//       console.log(firstName +' born in ' + yearOfBirth + 'is now officaly allowed to drive a car')

//   }
//   driverlincese(true)



//   const years = [1967,1995,1985]


//   var ages5 = years.map(function(year){
//       return 2019 - year;
//   });
//   console.log(ages5);




// let ages6 = years.map(el => 2019 - el);
//   console.log(ages6);


//   ages6 = years.map((el, index) => `age element ${index + 1}: ${2019 - el}`);
//   console.log(ages6);




//   ages6 = years.map((el, index) => {
//       const now = new Date().getFullYear();
//       const age = now - el;
//       return `age element ${index + 1}: ${age}`;
//   });

//   console.log(ages6)



// boxs5 = {
//     position: 1,
//     color: ' green',
//     clickMe: function () {
//         var self = this;
//         document.querySelector('.green').addEventListener('click',
//             function () {
//                 var str = 'this box number ' + self.position + ' an it is ' + self.color;
//                 alert(str);
//             });
//     }
// }

// //boxs5.clickMe();


// //ES6

// const boxs6 = {
//     position: 1,
//     color: ' green',
//     clickMe: function () {
        
//         document.querySelector('.green').addEventListener('click',
//             () => {
//                 var str = 'this box number ' + this.position + ' an it is ' + this.color;
//                 alert(str);
//             });
//     }
// }

// boxs6.clickMe()