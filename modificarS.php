<?php  
session_start();
?>
<!DOCTYPE html>
 <html lang="es">
   <head>
    <meta charset='utf-8'>
    <link rel="stylesheet" href="stylesheet2.css">
        <link rel="stylesheet"  href="estilosBlues.css">
  <link rel="stylesheet" href="fonts.css">
  <link rel="stylesheet" href="style.css">

   </head>
   <body>
   <body background="images/fondo.jpeg" marginheight="75" marginwith="75">
  <header>
    <nav>
      <ul>
        <li><a href="newScore.php"><span class="primero"><i class="icon icon-home3"></i></span>Metrick Maker</a></li>
        <li><a href="#"><span class="tercero"><i class="icon icon-library"></i></span>Scores</a>
          <ul>
            <li><a href="#">Browse</a></li>
            <li><a href="misPartituras.php">my Scores</a></li>
          </ul>
        </li>
        <li><a href="desconectarUser.php"><span class="cuarto"><i class="icon icon-reply"></i></span>Log Out</a></li>
      </ul>
    </nav>
  </header>
        <hgroup>
          <h1> </h1>
        </hgroup>
<?php
$idPa=$_POST['idPa'];
$titulo =$_POST["titulo"];
$composer=$_POST["composer"];
$tempo=$_POST["tempo"];
$tonalidad=$_POST["tonalidad"];
$tituloAnterior=$_POST["tituloAntes"];
$compo=$_SESSION['nombres'];
  $dbconn=pg_connect("host='localhost' port='5432' dbname= 'Metrik_Maker' user='postgres' password='user'")
  or die("Error de conexion: " .pg_last_error());
  echo "<h3>Conexion Exitosa a la base de datos Metrik_Maker PHP -PostgreSQL</h3><hr><br>";  
$result = pg_query($dbconn,"UPDATE partitura SET titulo='$titulo',expresion='$tempo',tonalidad='$tonalidad' WHERE titulo='$tituloAnterior' "); 
if(!$result){
  $errormessage=pg_last_error();
  echo "Error query: " . $errormessage;
  exit();     
  }
echo "el registro fue modificado exitosamente<br>";
pg_close(); 
//*********************************************************************************************

?>       

  </body>
</html>