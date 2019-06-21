var inputtedMeat = [];
//User InterFace Logic
$(document).ready(function(){
  $("form#checkout").submit(function(event){
    event.preventDeafult()
    alert("hi")
    $("input:checkbox[name=meatType]:checked").val().each(function(){
      var meatType = $(this).val()
      alert(meatType)
    })
  })

});
alert("hi")

$(document).ready(function(){
  $("form#pizzaSubmissions").submit(function(event){
    event.preventDefault();
    alert("hi")
    $("#work-responses").show();
    $("input:checkbox[name=meatType]:checked").each(function(){
      var meatType = $(this).val();
      alert(meatType)
    });
  });
});
