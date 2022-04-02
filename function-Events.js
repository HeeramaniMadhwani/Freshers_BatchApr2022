<html>
  <head><title>Functions in JS</title></head>
  <body>
  	<script type="text/javascript">
  		function add()
       {
       	  var x=10;
       	  var y=50;
       	  var z=x+y;
       	  document.write("Addition is " +z+ "<br>" );
       }

       function div()
       {
       	 var a=80,b=8;
       	 var c=a/b;
         document.write("Division is " +c);
       }

       function sub()
       {
       	  var n1=Number(prompt("Enter first number "));
       	  var n2=Number(prompt("Enter second number "));
          var sub=n1-n2;
          document.write("Subtraction is " +sub+ "<br>");
       }

       function f1()
       {
       	  var n1=Number(prompt("Enter first number "));
       	  var n2=Number(prompt("Enter second number "));
          var mod=n1%n2;
          document.write("Modulus is " +mod+ "<br>");
       }
    </script>
    <button onclick="add()"> Simply click me to get Addition </button><br><br><br>
    <button onmouseenter="div()">Hover the mouse to get output</button><br><br><br>
    <button ondblclick="sub()"> Double Click to get subtraction </button><br><br><br>
    <button onmouseout="f1()"> Click Me.. And you will get Mod</button>
  </body>
</html>