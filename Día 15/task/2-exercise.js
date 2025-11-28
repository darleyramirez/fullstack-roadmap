// 2. Print Current Window Contents

/*
Write a JavaScript program to print the current window contents.  
*/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <h1>Imprimir Pagina</h1>
   <p>Texto de pagina complementaria</p>
   <p>Pruebas de ejercicios, ejercicio 2 de javascrip</p>
   <button onclick="imprimir()">Boton de imprimir</button>
   <script>
            function imprimir(){
            window.print();
            }
  </script>
</body>
</html>
