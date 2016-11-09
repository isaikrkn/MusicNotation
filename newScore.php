
<?php
//Proceso de conexión con la base de datos
  $dbconn=pg_connect("host='localhost' port='5432' dbname= 'Metrik_Maker' user='postgres' password='user'")
  or die("Error de conexion: " .pg_last_error());
  echo "<h3>Conexion Exitosa a la base de datos Metrik_Maker PHP -PostgreSQL</h3><hr><br>";     
//Iniciar Sesión
session_start();

//Validar si se está ingresando con sesión correctamente
if (!$_SESSION){
echo '<script language = javascript>
alert("usuario no autenticado");
self.location = "index.html"</script>';
}
$id_usuario = $_SESSION['id_usuario'];
$user=$_SESSION['nombres'];
$consulta= "SELECT * FROM users WHERE correo='$id_usuario'"; 
$resultado= pg_query($dbconn,$consulta) or die (pg_last_error());
$fila=pg_fetch_array($resultado,NULL, PGSQL_ASSOC);
$apellidos = $fila['apellidos'];
$nombre = $fila['nombre'];
echo"      ";
//echo "<script>alert('$nombre');</script>"; 
echo $apellidos;
echo $user;

?>
<!DOCTYPE html>
<html>
<head>
	<title>MetrickMaker</title>
	<link rel="stylesheet"  href="estilosBlues.css">
	<link rel="stylesheet" href="fonts.css">
</head>
<body background="images/fondo.jpeg" marginheight="75" marginwith="75">
	<header>
		<nav>
			<ul>
				<li><a href="newScore.php"><span class="primero"><i class="icon icon-home3"></i></span>Metrick Maker</a></li>
				<li><a href="#"><span class="segundo"><i class="icon icon-file-text2"></i></span>Create Score</a>
					<ul>
						<li><a href="newScoreB.php">Blues</a></li>
						<li><a href="newScoreJ.php">Jazz</a></li>
						<li><a href="newScoreC.php">Choral</a></li>
						<li><a href="newScoreI.php">Instrument</a></li>
						<li><a href="newScoreS.php">Shymphony</a></li>
					</ul>
				</li>
				<li><a href="#"><span class="tercero"><i class="icon icon-library"></i></span>Projects</a>
					<ul>
						<li><a href="ScoreCreado.php">Browse</a></li>
						<li><a href="misPartituras.php">Partituras</a></li>
					</ul>
				</li>				
				<li><a href="desconectarUser.php"><span class="cuarto"><i class="icon icon-reply"></i></span>Log Out</a></li>
			</ul>
		</nav>
	</header>
<center><img src="images/music.jpeg"></center>	
</body>
</html>