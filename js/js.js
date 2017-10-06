$(document).ready(function() {
  var arraySeat = new Array(32);
  var seating = $("td");
  console.log(seating);
  $("td").click(redirect);
  // for (var i = 0; i < seating.length; i++) {
  //   seating[i].on("click",redirect,false);
  // }
  var currentCell;
  function redirect(event){
  console.log(event);
      var seat = (event.target.textContent);
      console.log(seat);
      $("#seat").val(seat);
      // var show = $("#show");
      // show.html(seat);
  
      currentCell = event.target;
  
      var num = parseInt (show.textContent);
      var obj = arraySeat[num-1];
      if (obj !== undefined) {
          $("#seat").val(obj.seat);
          $("#name").val(obj.name);
          $("#lastname").val(obj.lastname);
          $("#dni").val(obj.dni);
      }
  }
  $("#reserve").click(reserve);
  function reserve(){
    console.log("reserve");
    console.log(arraySeat);
      var numeroseat = parseInt ($('#seat').val());
     if (numeroseat != '')
      arraySeat[numeroseat-1] = {
          seat: $("#seat").val(),
          name: $("#name").val(),
          lastname: $("#lastname").val(),
          dni: $("#dni").val(),
      }
      console.log(arraySeat);
       //var html = "";      
      //html += s;
      currentCell.style.backgroundColor = 'yellow';
      $("#asiento").val("");
      $("#name").val("");
      $("#lastname").val("");
      $("#dni").val("");
     }
  
  $("#cancel").click(cancel);
   function cancel(){
     var num = parseInt (show.textContent);
     var numeroseat = parseInt (show.textContent);
     var obj = arraySeat[num-1];
     if (obj !== undefined) {
           $("#seat").val("");
           $("#name").val("");
           $("#lastname").val("");
           $("#dni").val("");
           currentCell.style.backgroundColor = 'transparent';
           arraySeat=[];
      }
   }

   $("#toList").click(toList);
   function toList(){
    var html = "";
    for (var i =0; i < arraySeat.length; i++) {
      var data_1 = arraySeat[i];
      if (arraySeat[i] !== undefined){
           
      //alert (data_1);
      var s = "<div class='row text-center'><div class='col-md-4 div1'>" + "<h3 class='seat'>N°asiento:" + data_1.seat+
      "</h3><h3> Nombre: </h3><h4>" +  data_1.name + "</h4>" + "<h3>Apellido: </h3><h4>" + data_1.lastname +"</h4>" + "<h3>DNI: </h3><h4>" + data_1.dni +"</h4>"+
 
      "</div> </div><hr>";
      html += s;
    }
   }
     $('#show2').html(html);
  }
  
  function search(){
    var html = "";
    var searchDni = $("#dni").val();
    for(var i=1; i<arraySeat.length; i++){
      var data_1 = arraySeat[i-1];
      if(arraySeat[i-1]!= undefined && searchDni == data_1.dni){
    var s = "<div>" + 
      "<h1>Nombre: " +  data_1.name + "</h1>" + "<h2> Apellido:" + data_1.lastname +"</h2>" + "<h2>DNI: " + data_1.dni +"</h2>"+
      "</div>";
      html += s;
      }
    }
      $('#show3').html(html);
  }
  
  
});
