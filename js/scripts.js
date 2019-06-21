


//this will create a generic customer profile for the order and allow the user to add additional pizzas
function Customer(firstName, lastName, email, address){
  this.orderNum
  this.pizzasOrder{
    pizzaOrdered
  }
}
Customer.prototype.addPizza = function(Pizza){
// this will add the pizza object and price to the customer order
}


//Business logic for the creation of the pizza
function Pizza(meatInput, topInput, crustInput, sauceInput) {
  this.meatInput = meatInput,
  this.topInput = topInput,
  this.meatInput = meatInput,
  this.meatInput = meatInput,
}

//this will create a generic Pizza for the customer to eat and will inform the customer of the cost of the pizza based on his/her selected criteria
Pizza.prototype.getCost = function(){
  if thi.s
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
