//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

    // 'This' is a placeholder for the object name when it's referencing itself in a function.


  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // 1. This is a global object.
      // 2. This refers to the parent object inside that function.
      // 3. When a function is called with the New operator, this refers to the newly created object inside that function.
      // 4. When a function is called using call or apply, this refers to the first argument passed to call or apply.

  // 3) What is the difference between call and apply?

      // apply vs. call, apply requires the parameters in a array vs. call which takes them in as individual parameters.

  // 4) What does .bind do?

      // bind copies the function call with the paramters into a variable.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
      username: "paul.day",
      email: "paul.day.m@gmail.com",
      getUsername: function() {
        return this.username;
  }
};

console.log(user.getUsername());

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);


//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

Car.prototype.moveCar = function(moveAmt) {
  this.move = moveAmt;
  this.move += 10;
  return this.move;
};

console.log(prius.moveCar(12)); //increments prius' move property by 10. Returns the new move property.
console.log(mustang.moveCar(14)); //increments mustang' move property by 10. Returns the new move property.


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

console.log(prius);


//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

getYear.call(prius);


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)

// undefined.



//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //The browser object.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

setTimeout(getMyUsername.call(myUser), 5000);