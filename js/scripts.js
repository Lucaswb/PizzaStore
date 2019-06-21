


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

function Pizza(meatInput, topInput, crustInput, sauceInput) {
  this.meatInput = meatInput,
  this.topInput = topInput,
  this.crustInput = crustInput,
  this.sauceInput = sauceInput
}
Customer.prototype.addPizza = function(Pizza){
  this.pizzaOrder[Pizza.getName()] = Pizza.getCost()
// this will add the pizza object and price to the customer order
}


//Business logic for the creation of the pizza


//this will create a generic Pizza for the customer to eat and will inform the customer of the cost of the pizza based on his/her selected criteria
Pizza.prototype.getCost = function(){
  var cost = 0.0;
  if (this.meatInput){
    cost+= (this.meatInput.length-1)*1.50 +2.00 // this adds the prices for the meat toppings
  }
  if (this.topInput){
    cost+= (this.length*.50)
  }
  if (this.crustInput==="pan"){
    cost+=2.00
  } else if (this.crustInput==="hand"){
    cost+=1.50
  } else{
    continue // this will be if the customer selects thin crust
  } if (!this.saucInput==="tomato") {
  cost+=.50
  }
}

// will construct a unique name for the pizza
Pizza.prototype.getName = function(){
  return("hi")
}



//User InterFace Logic
$(document).ready(function(){
  $("form#pizzaSubmissions").submit(function(event){
    event.preventDefault();
    alert("hi")
    $("input:checkbox[name=meatType]:checked").each(function(){
      var meatType = $(this).val();
      alert(meatType)
    });
    $("input:checkbox[name=meatType]:checked").each(function(){
      var toppings = $(this).val();
      alert(meatType)
    });
    $("input:checkbox[name=meatType]:checked").each(function(){
      var meatType = $(this).val();
      alert(meatType)
    });
  });
});
