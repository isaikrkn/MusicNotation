<?php
session_start();
if(!$_SESSION['id_usuario']){
	echo"<script>alert('hello world')</script>";
}else{
	echo'<script>alert("Vew Project");</script>';
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

  	  	float: left;
	width: 1300px;
	height:1200px;
	border: 1px solid #F00;
	margin: auto;
  	position: relative;
  }

  #notas{

  	float: left;
	width: 1300px;
	height:100px;
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

<body background="images/blues.jpeg" marginheight="75" marginwith="75" onload="loadPoints()">
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
						<li><a href="misPartituras.php">mis Partituras</a></li>
					</ul>
				</li>
				<li><a href="desconectarUser.php"><span class="cuarto"><i class="icon icon-reply"></i></span>Log Out</a></li>
			</ul>
		</nav>
	</header>
<p>Nueva Partitura</p>

<script src="version2.js"></script>
<section id="notas">
<img src="images/redonda.png" id="redonda" width="40" height="40" alt="1" name="redonda" X="20" Y="65">
<img src="images/blanca.png" id="blanca" width="20" height="20" alt="2" name="blanca">
<img src="images/negra.png" id="negra" width="20" height="20" alt="64" name="negra">
<img src="images/corchea.png" id="corchea" width="20" height="20" alt="8" name="corchea">
<img src="images/semicorchea.png" id="semicorchea" width="20" height="20" alt="16" name="semicorchea">
<img src="images/fusa.png" id="fusa" width="20" height="20" alt="32" name="fusa">
<img src="images/semifusa.png" id="semifusa" width="20" height="20" alt="64"name="semifusa">
<img src="images/silencioRedonda.png" id="silencioRedonda" width="20" height="20">
<img src="images/silencioBlanca.png" id="silencioBlanca" width="20" height="20">
<img src="images/silencioNegra.png" id="silencioNegra" width="20" height="20">
<img src="images/silencioCorchea.png" id="silencioCorchea" width="60" height="60">
<img src="images/silencioSemicorchea.png" id="silencioSemicorchea" width="15" height="15">
<img src="images/silencioFusa.png" id="silencioFusa" width="20" height="20">
<img src="images/silencioSemifusa.jpeg" id="silencioSemifusa" width="20" height="20">
<img src="images/claveSol.png" id="claveSol" width="20" height="20">
<img src="images/claveFa.png" id="claveFa" width="40" height="40">
<img src="images/claveDo.png" id="claveDo" width="20" height="20">
<img src="images/borrador.png" id="borrador" width="20" height="20">
<img src="images/corchete.png" id="corchete" width="30" height="30">
<img src="images/sostenido.PNG" id="sostenido" width="20" height="20">
<img src="images/bemol.PNG" id="bemol" width="20" height="20">
<img src="images/natural.png" id="natural" width="20" height="20">
<img src="images/calderon.png" id="calderon" width="20" height="20">
<img src="images/cresc.png" id="cresc" width="20" height="20">
<img src="images/forte.png" id="forte" width="20" height="20">
<img src="images/fp.png" id="fp" width="20" height="20">
<img src="images/mf.png" id="mf" width="20" height="20">
<img src="images/mp.png" id="mp" width="20" height="20">
<img src="images/pp.png" id="pp" width="20" height="20">
<img src="images/segno.png" id="segno" width="20" height="20">
<img src="images/sig.png" id="sig" width="30" height="30">
<img src="images/tresillo.png" onclick="Grupo()" id="grupo" width="40" height="40">
<img src="images/elegirCompas.png" onclick="InsertValues()" id="elegirCompas" width="40" height="40">
<img src="images/linea.png" id="linea" width="30" height="30">
<canvas id="lienzo" width="1300" height="1200"></canvas>
</section>

</body>
</html>
