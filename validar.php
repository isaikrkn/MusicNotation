<?php
	session_start(); 
?>
<!DOCTYPE html>
<html>
<head>
<head>
	<title>Validando...</title>
	<meta charset="utf-8">
</head>
</head>
<body>
		<?php
			include 'serv.php';
			if(isset($_POST['login'])){
				$usuario = $_POST['user'];
				$pw = $_POST['pw'];
				$log = mysql_query("SELECT * FROM admin WHERE user='$usuario' AND pw='$pw'");
				if (mysql_num_rows($log)>0) {
					$row = mysql_fetch_array($log);
					$_SESSION["user"] = $row['user']; 
				  	echo 'Iniciando sesión para '.$_SESSION['user'].' <p>';
					echo '<script> window.location="panel.php"; </script>';
				}
				else{
					echo '<script> alert("Usuario o contraseña incorrectos.");</script>';
					echo '<script> window.location="index.php"; </script>';
				}
			}
		?>	
</body>
</html>