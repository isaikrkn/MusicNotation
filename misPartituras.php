<?php
session_start();
if (!isset($_SESSION)) 
{
  	echo "<script>alert('debe iniciar sesion');</script>";
  	echo'<script>location.href="index.html"</script>';
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>ScoreCreado</title>
	<link rel="stylesheet"  href="estilosBlues.css">
	<link rel="stylesheet" href="fonts.css">

<style>
  #lienzo{
  	border: 1px solid #F00;
  }

  #score{
  	float: left;
	width: 1300px;
	height:1200px; 
	border: 1px solid #F00;
	margin: auto;
	position: relative;
  }	

#compas{
	float: left;
	border: 1px;
	margin: auto;
	position: relative;
}

</style>
</head>

<body background="images/blues.jpeg" marginheight="75" marginwith="75">
	<header>
		<nav>
			<ul>
				<li><a href="newScore.php"><span class="primero"><i class="icon icon-home3"></i></span>Metrick Maker</a></li>
				<li><a href="#"><span class="segundo"><i class="icon icon-file-text2"></i></span>Score</a>
					<ul>
						<li><a href="newScoreB.php">Blues</a></li>
						<li><a href="newScoreJ.php">Jazz</a></li>
						<li><a href="newScoreC.php">Choral</a></li>
						<li><a href="newScoreI.php">Instrument</a></li>
						<li><a href="newScoreS.php">Shymphony</a></li>
					</ul>
				</li>
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
<?php
	$dbconn=pg_connect("host='localhost' port='5432' dbname= 'Metrik_Maker' user='postgres' password='user'")
	or die("Error de conexion: " .pg_last_error());
	echo "<h3>Conexion Exitosa a la base de datos Metrik_Maker PHP -PostgreSQL</h3><hr><br>";	
	$correo=$_SESSION['id_usuario']; //correo
	$composer=$_SESSION['nombres'];		
	$result=pg_query($dbconn,"SELECT * FROM partitura");
	//$result3=pg_query($dbconn,"SELECT * FROM partitura where partitura.composer='$composer'");
	if(!$result){
		$errormessage3=pg_last_error();
		echo "Error query: ".$errormessage3;
		exit();
	}
	$dato1=pg_fetch_array($result,1);
	echo "<p> composer";echo $dato1;
	echo "<p>";echo $correo;
	echo "<p>";echo $composer;
	$total=pg_num_rows($result3);

	echo"<h2>";
	echo"<table><tr><td> titulo </td><td> composer </td><td> instrumento </td><td> numerador </td><td> denominador </td><td> Tempo </td><td> tonalidad </td></tr>";
	
	while($dato=pg_fetch_array($result)){
		$idPa=$dato["idP"];
		$title=$dato["titulo"];
		$compos=$dato["composer"];
		$instru=$dato["instrumento"];
		$num=$dato["numerador"];
		$den=$dato["denominador"];
		$temp=$dato["expresion"];
		$tona=$dato["tonalidad"];
			echo"<h3>";
			echo "<tr>";
			echo"<td>" . $idPa."</td>";
			echo"<td>" . $title."</td>";			
			echo"<td>" . $compos."</td>";
			echo"<td>" . $instru."</td>";
			echo"<td>" . $num."</td>";
			echo"<td>" . $den."</td>";
			echo"<td>" . $temp."</td>";
			echo"<td>" . $tona."</td>";			
			echo"</tr>";
			echo "<td><a href=modificarScore.php?titulo=$title&composer=$compos&&expresion=$temp&&tonalidad=$tona>modificar</a></td>";			
	
	}//while
		echo"</h2>";
?>