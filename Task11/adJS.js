First Deliverable:

var obj1= {salary: 1000};



var salaryIncrement = function (incrementParam) {

  return this.salary + incrementParam;

}



console.log(salaryIncrement.call(obj1,0.1*obj1.salary));



Second Deliverable: 

var obj1= {salary: 1000};



var salaryIncrement = function (incrementParam1, incrementParam2) {

  return this.salary + incrementParam1 +incrementParam2 ;

}



//console.log(salaryIncrement.call(obj1,0.1*obj1.salary));



var incrmntArray = [100,200];

console.log(salaryIncrement.apply(obj1, incrmntArray));



Third Deliverable

var obj1= {salary: 1000};



var salaryIncrement = function (incrementParam1, incrementParam2) {

  return this.salary + incrementParam1 +incrementParam2 ;

}



//console.log(salaryIncrement.call(obj1,0.1*obj1.salary));



//var incrmntArray = [100,200];

//console.log(salaryIncrement.apply(obj1, incrmntArray));

var bound = salaryIncrement.bind(obj1);

console.log(bound(100,200));



Fourth Deliverable

//Using call to print

let student = {age:20};



let display= function(){

  console.log(this.age);

}

console.log(display.call(student));



//Using bind to print

let student = {age:20};



let display= function(){

  console.log(this.age);

}

let bound = display.bind(student);

console.log(bound());

// Currying using Bind function
//let multiply = function(x, y){
  //  console.log(x*y);
//}

//let mutiplyByTwo = multiply.bind(this,2);
//mutiplyByTwo(8);

//Currying using closure
let multiply = function(x){
    return function(y)
    {
        console.log(x*y);
    }
}
let multiplyByThree = multiply(3);
multiplyByThree(8);