<html>
  <head><title>Objects in JS</title></head>
  <body>
  	<script type="text/javascript">
        var car= 
        {	"model":"1100 ", "name":" BMW"  } ;
        document.write("Model no. " +car.model+ "Car name" +car.name);
        document.write("<br>");
        var student={ "rno":"1", "name":"Mishti", "age":"15" };
        document.write("ROLL NO: " + student["rno"] + "<br>NAME: " +student["name"] + "<br>AGE: " + student["age"]);
        document.write("<br>Function inside Objects<br>");
        var person= { "fname" : "Dhruv " , "lname" : " Sinha" , 
        "func" : function() 
                 {
                 	return this.fname + this.lname;
                 }
         }
         document.write(person.func());
  	</script>
  </body>
</html>