<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Score</title>

	<link rel="stylesheet" href="index_style.css">
	<script src="validar.js"></script>
	<link rel="stylesheet"  href="estilos.css">
	<link rel="stylesheet" href="fonts.css">
</head>
<meta charset='utf-8'>
<body background="images/fondo.jpeg" marginheight="75" marginwith="75">
	<header>
		<nav>
			<ul>
				<li><a href="newScore.php"><span class="primero"><i class="icon icon-home3"></i></span>Metrick Maker</a></li>
				<li><a href="#"><span class="tercero"><i class="icon icon-library"></i></span>Scores</a>
					<ul>
						<li><a href="misPartituras.php">Partituras</a></li>
					</ul>
				</li>
				<li><a href="desconectarUser.php"><span class="cuarto"><i class="icon icon-reply"></i></span>Log Out</a></li>
			</ul>
		</nav>
	</header>
<section id="formulario">
	<p id="titulo"><font face = "BankGothic Md BT" size="2" color="#565051">New Score</p>
	<form action="createScore.php" method="post" name="form" id="form">
	
	<input type="text" id="titulo" name="titulo" placeholder="Title">
	<input type="text" id="composer" name="composer" placeholder="Composer">
	<p><font face = "BankGothic Md BT" size="2" color="Blank">Instrumentos</p>
						  <select name="idinstru">
							<option value="Piano" id="piano">Piano</option>
							<option value="Harpiscordio" id="arpiscordio">Harpiscordio</option>
							<option value="Clavecin" id="arpiscordio">Clavecin</option>
							<option value="Organo" id="organo">Organo</option>						
							<option value="Guitarra" id="guitarra">Guitarra</option>
							<option value="Arpa" id="arpa">Arpa</option>
							<option value="Laud" id="laud">Laud</option>
							<option value="Citara" id="organo">Citara</option>						
							<option value="Violin" id="violin">Violin</option>
							<option value="Viola" id="viola">Viola</option>
							<option value="Violonchelo" id="cello">Violonchelo</option>
							<option value="Contrabajo" id="contrabajo">Contrabajo</option>
							<option value="Bajo Electrico" id="contrabajo">Bajo Electrico</option>						
							<option value="Trompeta" id="trompeta">Trompeta</option>
							<option value="Trombon" id="trombon">Trombon</option>
							<option value="Tuba" id="tuba">Tuba</option>
							<option value="Saxofón" id="contrabajo">Saxofón</option>
							<option value="Corno Ingles" id="corno Ingles">Corno Ingles</option>
							<option value="Corno Frances" id="corno frances">Saxofón</option>							
							<option value="Bajo Electrico" id="contrabajo">Bajo Electrico</option>						
							<option value="Flauta travesera" id="flauta T">Flauta Travesera</option>
							<option value="Flautin" id="flautin">Flautin</option>
							<option value="Quena" id="quena">Quena</option>
							<option value="Flauta dulce" id="flauta D">Flauta dulce</option>
							<option value="Ocarina" id="ocarina">Ocarina</option>
							<option value="Oboe" id="oboe">Oboe</option>							
							<option value="Clarinete" id="clarinete">Clarinete</option>
							<option value="Fagot" id="fagot">Fagot</option>	
							</select>					
	<input type="number" id="numerador" name="numerador" placeholder="Pulsos en Compas">
	<input type="number" id="denominador" name="denominador" placeholder="Nota Relacionada">
	  <select name="tonalidad">
	    <option value="tonalidad">tonalidad</option>
		<option value="C">C</option>
		<option value="G">G</option>
		<option value="D">D</option>
		<option value="A">A</option>
		<option value="E">E</option>
		<option value="B">B</option>
		<option value="F#">F#</option>
		<option value="Gb">Gb</option>
		<option value="Db">Db</option>
		<option value="Ab">Ab</option>
		<option value="Eb">Eb</option>
		<option value="Bb">Bb</option>
		<option value="F">F</option>
		<option value="Am">Am</option>
		<option value="Em">Em</option>
		<option value="Bm">Bm</option>
		<option value="F#m">F#m</option>
		<option value="C#m">C#m</option>
		<option value="G#m">G#m</option>
		<option value="D#m">D#m</option>
		<option value="Ebm">Ebm</option>
		<option value="Db">Db</option>
		<option value="Ab">Ab</option>
		<option value="Eb">Eb</option>
		<option value="Bbm">Bbm</option>
		<option value="Fm">Fm</option>
		<option value="Cm">Cm</option>
		<option value="Gm">Gm</option>
		<option value="Dm">Dm</option>																				
	  </select>	
	 	<select name="tmark">
		<option value="TempoMarks">Tempo Marks</option>
		<option value="Larghissimo">Larghissimo(24 BPM)</option>
		<option value="Grave">Grave(25-45 BPM)</option>
		<option value="Largo">Largo(40-60 BPM)</option>
		<option value="Lento">Lento:slowly(45-60 BPM)</option>
		<option value="Larghetto">Larghetto (60-66 BPM)</option>
		<option value="Adagio">Adagio(66–76 BPM)</option>
		<option value="Adagietto">Adagietto(72–76 BPM)</option>
		<option value="Andante">Andante(76–108 BPM)</option>
		<option value="Andantino">Andantino(80–108 BPM)</option>
		<option value="Marciamoderato">Marcia moderato</option>
		<option value="Andantemoderato">Andante moderato(92–112 BPM)</option>
		<option value="Moderato">Moderato(108–120 BPM)</option>
		<option value" Allegretto" >Allegretto(112–120 BPM)</option>
		<option value"Allegromoderato">Allegro moderato(116–120 BPM)</option>
		<option valu "Allegro">Allegro (120–168 BPM)</option>
		<option value"Vivace">Vivace(168–176 BPM)</option>
		<option value="Vivacissimo">Vivacissimo(172–176 BPM)</option>
		<option value ="Presto">Presto(168–200 BPM)</option>
		<option value="Prestissimo">Prestissimo(200 BPM and over)</option>
	</select> 
	<input type="submit" value="enviar" id="boton" name="boton">

	</form>
</section>
</body>
</html>