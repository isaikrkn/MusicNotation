<?php  
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
		<link rel="stylesheet"  href="estilosBlues.css">
	<link rel="stylesheet" href="fonts.css">
	<link rel="stylesheet" href="style.css">

</head>
<body background="images/blues.jpeg" marginheight="75" marginwith="75">
	<header>
		<nav>
			<ul>
				<li><a href="ScoreCreado.php"><span class="primero"><i class="icon icon-home3"></i></span>Metrick Maker</a></li>
				<li><a href="#"><span class="tercero"><i class="icon icon-library"></i></span>Scores</a>
					<ul>
						<li><a href="#">Browse</a></li>
						<li><a href="misPartituras.php">my Scores</a></li>
					</ul>
				</li>
				<li><a href="logout.php"><span class="cuarto"><i class="icon icon-reply"></i></span>Log Out</a></li>
			</ul>
		</nav>
	</header>
<form action="modificarS.php" method="POST">
<?php
		$idPa=$dato["idP"];
		$title=$dato["title"];
		$compos=$dato["composer"];
		$instru=$dato["instrumento"];
		$num=$dato["numerador"];
		$den=$dato["denominador"];
		$temp=$dato["expresion"];
		$tona=$dato["tonalidad"];
		echo"<center>";
       echo "<b>Title:<b>";
       echo "<br><input type=text name=titulo value=$title ><br>";
       echo "<b>Tempo:<b>";
       echo "<input type=text name=tempo value=$temp ><br>";
       echo "<b>tonalidad:<b>";
  		echo"<input type=text name=tonalidad value=$tona><br>";	 	             
       echo "<b>title: </b>$title<br>";
       echo "<input type=hidden name=tituloAntes value=$title>";


?>
       <input type="submit" name="submit" value="enviar">   
       </center>  
     </form>
</body>
</html>