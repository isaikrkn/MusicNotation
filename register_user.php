<?php
	$dbconn=pg_connect("host='localhost' port='5432' dbname= 'Metrik_Maker' user='postgres' password='user'")
	or die("Error de conexion: " .pg_last_error());
	echo "<h3>Conexion Exitosa a la base de datos Metrik_Maker PHP -PostgreSQL</h3><hr><br>";			
	//return $dbconn;
	//query


	$_nombre=$_POST['nombre'];
	$_apellidos=$_POST['apellidos'];
	$_ciudad=$_POST['ciudad'];
	$_correo=$_POST['mail'];
	$_pass=$_POST['pass1'];
	$_rpass=$_POST['pass2'];
	$_especialidad=$_POST['especialidad'];

	

	$checkemail=pg_query($dbconn,"SELECT * FROM users WHERE correo='$_correo'");
	$checke_mail=pg_num_rows($checkemail);
		if($_pass==$_rpass){
			if($checke_mail>0){
				echo'<script language="javascript">alert("email ingresado ya existe");</script>';
				echo"<script>location.href='signUp.html'</script>";
			}else{
				$result=pg_query($dbconn,"INSERT INTO users(nombre,apellidos,ciudad,correo,pass,especialidad) VALUES('". $_nombre . "','" . $_apellidos ."','" . $_ciudad ."','" . $_correo ."','".$_pass."','". $_especialidad." ')");
				if(!$result)
				{
					$errormessage=pg_last_error();
					echo "Error query: " . $errormessage;
					exit();
					
				}
				//printf("These values were inserted into the database -%s %s %s", $_nombre,$_correo);

				echo'<script>location.href="index.html"</script>';
				
			}//else si es nuevo usuario
			
			}//if si son iguales pass1 y pass2
			else{
				echo'<script language="javascript">alert("los passwords deben de ser iguales ");</script>';	
				echo'<script>location.href="signUp.html"</script>';
		}// else final
pg_close();
?>
