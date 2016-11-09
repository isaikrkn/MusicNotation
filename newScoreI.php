<?php
session_start();
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>MetrickMaker</title>
	<link rel="stylesheet"  href="estilosBlues.css">
	<link rel="stylesheet" href="fonts.css">
	<link rel="stylesheet" href="style.css">
	
</head>
<body background="images/fondo.jpeg" marginheight="75" marginwith="75">
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
				<form action="score.php" method="post" name="form">  				
				<input type="submit" value="crear" name="crear" id="crear">	
				</form>				
				<li><a href="desconectarUser.php"><span class="cuarto"><i class="icon icon-reply"></i></span>Log Out</a></li>
			</ul>
		</nav>
	</header>
<center><img src="images/music.jpeg"></center>	
</body>
</html>