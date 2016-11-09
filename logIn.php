<?php
	$dbconn=pg_connect("host='localhost' port='5432' dbname= 'Metrik_Maker' user='postgres' password='user'")
	or die("Error de conexion: " .pg_last_error());
	echo "<h3>Conexion Exitosa a la base de datos Metrik_Maker PHP -PostgreSQL</h3><hr><br>";			
	//inicia session
	if (!isset($_SESSION)) {
  		session_start();
	}	
	//return $dbconn;
	//query
	$_email=$_POST['email'];
	$_pass=$_POST['pass'];

	/*$query="SELECT * FROM users WHERE correo='$_email'");
	$result=pg_query($dbconn,$query);
	if($f=pg_fetch_array($result)){ 
		if($pass==$f['passadmin']){
			echo'<script>alert("Bienvenido Administrador")</script>';	
		}
	//}*/

	//se realiza consulta	
	$result2=pg_query($dbconn,"SELECT * from users where correo='$_email' and pass='$_pass' ");

	$fila=pg_fetch_array($result2);
	if (!$fila[0]) //opcion1: Si el usuario NO existe o los datos son INCORRRECTOS
	{
		echo"hola";		
		echo '<script language = javascript>
		alert("Usuario o Password errados, por favor verifique.")
		self.location = "logIn.html"
		</script>';
		exit;
	}
	else //opcion2: Usuario logueado correctamente
	{
	//Definimos las variables de sesión y redirigimos a la página de usuario
	$_SESSION['id_usuario'] = $fila['correo'];
	$_SESSION['nombres'] = $fila['nombre'];
	//echo'<script>alert("has sido logiado");</script>';
	header("Location: newScore.php");
	}	

	//printf("These values were inserted into the database -%s %s %s", $_name,$_email);
	pg_close();
?>