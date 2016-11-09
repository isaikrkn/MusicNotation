<?php
	$dbconn=pg_connect("host='localhost' port='5432' dbname= 'Metrik_Maker' user='postgres' password='user'")
	or die("Error de conexion: " .pg_last_error());
	//echo "<h3>Conexion Exitosa a la base de datos Metrik_Maker PHP -PostgreSQL</h3><hr><br>";
	
	$nombre=$_POST['nombre'];
	$titulo=$_POST['titulo'];
	$composer=$_POST['composer'];
	$idinstru=$_POST['idinstru'];
	$numerador=$_POST['numerador'];
	$denominador=$_POST['denominador'];
	$tempom=$_POST['tmark'];
	$tonalidad=$_POST['tonalidad'];
	//printf("These values were inserted into the database -%s %s %s", $selectOption);
	$query2 ="INSERT INTO partitura(titulo,composer,instrumento,numerador,denominador,expresion,tonalidad)	
	VALUES('".$titulo."','". $composer ." ','". $idinstru ."','". $numerador."','".$denominador."','".$tempom."','".$tonalidad." ')";
	
	$result2=pg_query($dbconn,$query2);
	if(!$result2){
		$errormessage2=pg_last_error();
		echo "Error query: " . $errormessage2;
		exit();
	}else{
		header("Location: ScoreCreado.php");
	}
	pg_close();
?>