// console.log('This is the javascript code where we added main file in index.html file');
// //global rules
// console.log(this);

// console.log(this === window);


// //this in define function


// function myFunc()
// {
//     console.log(this);
// }

// myFunc();



// // use strict mode in define function and this keyword

// function myFunc()
// {
//     'use strict';
//     console.log(this);
// }

// myFunc();


// //'use strict ' is used to avoid bad practise

// function unNamed()
// {
//     this.name = 'Md Jasim uddim';
// }
// unNamed();
// console.log(name);


//Object rules

// const man = {
//     name:'md jasim uddim',
//     age: 25,
//     job: 'student',
//     msg:function(){
//         console.log('My name is '+this.name);
//     },
//     isTrue : function(){
//         console.log(this == man);
//     }
// }
// man.msg();
// man.isTrue();


//object inside object
// var man = {
//     name: 'Md Jasim Uddim',
//     age:25,
//     job: 'Student',
//     anotherMan:{
//         name: 'Md Liton Hossain',
//         msg:function(){
//             console.log('My name is '+this.name);
//         }
//     }
// }

// man.anotherMan.msg();



//call,bind,apply

// var man = {
//     name: 'Md Jasim Uddim',
//     age:25,
//     job: 'Student',
//     anotherMan:{
//         name: 'Md Liton Hossain',
//         msg:function(){
//             console.log('My name is '+this.name);
//         }
//     }
// }

// man.anotherMan.msg.call(man);


//call method

// var man = {
//     name: 'Md Jasim Uddim',
//     age:25,
//     job: 'Student',
//     anotherMan:{
//         name: 'Md Liton Hossain',
//         msg:function(){
//             console.log('My name is '+this.name);
//         }
//     }
// }

// man.anotherMan.msg.call(man);


// direct call using call method 
// var man = {
//     name: 'Md Jasim Uddim',
//     age:25,
//     job: 'Student',
//     anotherMan:{
//         name: 'Md Liton Hossain',
//         msg:function(){
//             console.log('My name is '+this.name);
//         }.call(man)
//     }
// }


// var karim = {
//     name: 'Karim Rahman',
//     dob: 1996,
//     age: function(currentYear) {
//        console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old!');
//     }
//  }

//  karim.age(2022);


//  var rahim = {
//     name: 'Rahim Abdu',
//     dob: 1986
//  }


//  karim.age.call(rahim,2022);

//apply method
// var myCustomObj = {
//     name: 'Zonayed Ahmed',
//     age: 21,
//     job: 'Student',
//     anotherObj: {
//        name: 'Ahmed Zonayed',
//        value: function() {
//           console.log('My name is ' + this.name);
//        }
//     }
//  }

//  myCustomObj.anotherObj.value.apply(myCustomObj);

// var karim = {
//     name: 'Karim Rahman',
//     dob: 1996,
//     age: function(currentYear, msg) {
//        console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old!');
//     }
//  }

//  var rahim = {
//     name: 'Rahim Abdu',
//     dob: 1986
//  }
//  karim.age.apply(rahim,[2018,"welcome !"]);


//bind method
// var myCustomObj = {
//     name: 'Zonayed Ahmed',
//     age: 21,
//     job: 'Student',
//     anotherObj: {
//        name: 'Ahmed Zonayed',
//        value: function() {
//           console.log('My name is ' + this.name);
//        }
//     }
//  }

// var anotherFunc = myCustomObj.anotherObj.value.bind(myCustomObj);
// anotherFunc();


// var karim = {
//     name: 'Karim Rahman',
//     dob: 1996,
//     age: function(currentYear, msg) {
//        console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old!');
//     }
//  }
//  var rahim = {
//     name: 'Rahim Abdu',
//     dob: 1986
//  }
//  var karimInformationDetails = karim.age.bind(rahim,2022);
//  karimInformationDetails('Welcome !');

// var myObj = {
//     name: 'Zonayed Ahmed',
//     age: 21,
//     timer: function() {
//        setTimeout(function() {
//           console.log('My name is ' + this.name);
//        }.bind(myObj), 1000)
//      }
//  }
//  myObj.timer();

// var anotherObj = {
//     name:'Anik hasan',
//     age:21,
//     timer:function(){
//         setTimeout(function(){
//             console.log('My name is '+this.name);
//         }.bind(anotherObj),1000)
//     }
// }

// anotherObj.timer();



