


//this will create a generic customer profile for the order and allow the user to add additional pizzas
function Customer(firstName, lastName, email, address){

  this.pizzaOrder = {}, // this will have the pizza name as the key and the cost as the
  this.firstName = firstName,
  this.lastName = lastName,
  this.email = email,
  this.fullName = function(){
    return this.firstName + " " + this.lastName
  }
}
var customer1 = new Customer()

Customer.prototype.addPizza = function(Pizza){
  this.pizzaOrder[Pizza.getName()] = Pizza.getCost()
// this will add the pizza object and price to the customer order
}


//Business logic for the creation of the pizza
function Pizza(meatInput, topInput, crustInput, sauceInput) {
  this.meatInput = meatInput,
  this.topInput = topInput,
  this.crustInput = crustInput,
  this.sauceInput = sauceInput
}


//this will create a generic Pizza for the customer to eat and will inform the customer of the cost of the pizza based on his/her selected criteria
Pizza.prototype.getCost = function(){
  debugger;
  var cost = 8.0; // the default cost of the pizza
  if (this.meatInput){
    cost+= (this.meatInput.length-1)*1.50 +2.00 // this adds the prices for the meat toppings
  }
  if (this.topInput){
    cost+= (this.topInput.length*.50)
  }
  if (this.crustInput==="pan"){
    cost+=2.00
  } else if (this.crustInput==="hand"){
    cost+=1.50
  } else{
     // this will be if the customer selects thin crust
  } if (!this.saucInput==="tomato") {
  cost+=.50
  }
  return cost
}

// will construct a unique name for the pizza
Pizza.prototype.getName = function(){
  var meatName = ""
  var topName = ""
  var crustName = ""
  var sauceName = this.sauceInput
  if (this.meatInput.length===1){
    meatName = this.meatInput[0]
  } else if (this.meatInput.length===2) {
    meatName = this.meatInput[0] + " and " + this.meatInput[1]
  } else if (this.meatInput.length===3) {
    meatName = this.meatInput[0] + ", " + this.meatInput[1] + ", and "+ this.meatInput[2]
  } else if (this.meatInput.length===4) {
    meatName = this.meatInput[0] + ", " + this.meatInput[1] + ", "+ this.meatInput[2]+", and "+ this.meatInput[3];
  } else {
    // this is incase the user decides not to put any meat on his/her pizza
  }
  if (this.topInput.length===1){
    topName = this.topInput[0]
  } else if (this.topInput.length===2) {
    topName = this.topInput[0] + " and " + this.topInput[1]
  } else if (this.topInput.length===3) {
    topName = this.topInput[0] + ", " + this.topInput[1] + ", and "+ this.topInput[2]
  } else if (this.topInput.length===4) {
    topName = this.topInput[0] + ", " + this.topInput[1] + ", "+ this.topInput[2] + ", and " + this.topInput[3]
  } else {
    // this is incase the user decides not to put any toppings on his/her pizza
  }
  if (this.crustInput==="thin"){
    crustName = "Thin crusted"
  } else if (this.crustInput==="hand"){
    crustName = "Hand Tossed"
  } else {
    crustName = "Stuffed "
  }
  var pizzaName = crustName + " " + meatName + " pizza, topped with " + topName + " with our home made " + sauceName;
  return pizzaName

}



//User InterFace Logic
$(document).ready(function(){
  $("form#pizzaSubmissions").submit(function(event){
    event.preventDefault();
    var meatTypes = [];
    var topTypes = [];


    $("input:checkbox[name=meatType]:checked").each(function(){
      var meatType = $(this).val();
      meatTypes.push(meatType) // this will add the meets chosen to the meat array
    });
    $("input:checkbox[name=topType]:checked").each(function(){
      var topType = $(this).val();
      topTypes.push(topType) // this will add the toppings chosen to the topping array
    });
    var crustType = $("input:radio[name=crustType]:checked").val(); //this will define the crust type
    var sauceType = $("input:radio[name=sauceType]:checked").val();
    // this will define all the input settings for the original order of pizza
    var pizza = new Pizza(meatTypes, topTypes, crustType, sauceType)
    console.log(pizza.getCost())
    console.log(pizza.getName())
  });
});
