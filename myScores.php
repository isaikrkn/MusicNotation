	<?php
	$result3=pg_query($dbconn,"SELECT * FROM partitura");
	if(!$result3){
		$errormessage3=pg_last_error();
		echo "Error query: ".$errormessage3;
		exit();
	}
	$total=pg_num_rows($result3);
	echo"<h2>";
	echo"<table><tr><td> titulo </td><td> composer </td><td> instrumento </td><td> numerador </td><td> denominador </td><td> Tempo </td><td> tonalidad </td></tr>";
	while($dato=pg_fetch_array($result3)){
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
			echo "<td><a href=modificarScore.php?titulo=$title&&composer=$compos&&expresion=$temp&&tonalidad=$tona>modificar</a></td>";			
	
	}//while
		echo"</h2>";
	pg_close();
	?>