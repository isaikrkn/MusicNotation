	
 function validarDatos() {
	var variable = true;
 	var p1= document.getElementById("pass1").value;
 	var p2=document.getElementById("pass2").value;
 	var espacios =false;
 	var cont =0;

 		if(!document.form.nombre.value){
 			alert("Se requiere un Nombre...!");
 			document.form.nombre.value.focus;
 			variable=false;
		}

		else if(!document.form.apellidos.value){
 			alert("Se requiere Apellidos ...!");
 			document.form.apellidos.value.focus;
 			variable=false;
		}

		else if(!document.form.ciudad.value){
 			alert("Se requiere ciudad...!");
 			document.form.ciudad.value.focus;
 			variable=false;
		}

		else if(!document.form.mail.value){

 			alert("email no valido...!");
 			document.form.mail.value.focus;
 			variable=false;

		}

		else if(!document.form.pass.value){
 			alert("El password es requerido...!");
 			document.form.pass.value.focus;
 			variable=false;
		}
			while(!espacios&&(cont<p1.length)){
				if(p1.charAt(cont)==" ")
					espacios=true;
				cont++;
			}
			if(espacios){
				alert("el password no puede contener espacios en blanco");
				document.form.ciudad.value.focus;
				variable =false;
			}
			if(p1.length==0||p2.length==0){
				alert("los campos del password no pueden quedar vacios");
				document.form.ciudad.value.focus;
				variable =false;
			}
			if(p1!=p2&&p1.length>0){
				alert("Los passwords deben de coincidir");
				document.form.ciudad.value.focus;
				variable= false;
			}

 		if (variable) {
 			document.getElementById("form").submit();
 		}
 	}
 	 	window.onload=function(){
 		document.getElementById('boton').onclick=validarDatos;
 	}

