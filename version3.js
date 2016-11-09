//var imageArray=['corchea','semicorchea','fusa','semifusa'];

var myImageArray=new Array(3);
var elem_destino;
var lienzo;
var cont=2;
var notas=new Array();
//******definimos los simbolos musicales globalmente

var numerador;
var denominador;
var compas=new Array();
var newCompasValue= new Array();
var pentagrama=new Array();// estructura dinamica que se llena mietras compas siga lleno
var redonda=new Array(3);
var blanca=new Array(3);
var negra=new Array(3);
var corchea=new Array(3);
var semicorchea=new Array(3);
var fusa=new Array(3);
var semifusa=new Array(3);
var Pauta;//hoja pautada
var objetoActual=null;
var inicioX=0,inicioY=0;
var element;
var xCoor;
var yCoor;
var corchete=new Array();
var defaultNumerador =new Array();
var defaultDenominador=new Array();
var panelOptions;
var divisor;//divide los valores de notas en formas irregulares
var notaValor;
var contador;
var xlinea=20;
var ylinea;
var AllPoints=new Array();//guarda todos los puntos
var AllIds=new Array();
var AllConts=new Array();

function inicio(){
	elem_destino=document.getElementById("lienzo");
	lienzo=elem_destino.getContext("2d");
	elem_destino.addEventListener("dragenter",entrando,false);
	elem_destino.addEventListener("dragover",function(e){e.preventDefault();},false);
	elem_destino.addEventListener("drop",soltado,false);
	elem_destino.addEventListener("dragleave",saliendo,false);
	panelOptions=document.getElementById("score");
	//lienzo2=panelOptions.getContext("2d");
//****************notas**************************
notas=document.querySelectorAll("#score img");
for (var i = 0; i<notas.length; i++) 
{
		notas[i].addEventListener("dragstart",comenzando_arrastrar,false);
	
}

	///*******************tabla de notas y sus valores******************
	
	redonda[0]=4;
	redonda[1]=4;
	redonda[2]=notas[0];

	blanca[0]=1;
	blanca[1]=2;
	blanca[2]=notas[1];

	negra[0]=1;
	negra[1]=4;
	negra[2]=notas[2];

	corchea[0]=1;
	corchea[1]=8;
	corchea[2]=notas[3];

	semicorchea[0]=1;
	semicorchea[1]=16;
	semicorchea[2]=notas[4];

	fusa[0]=1;
	fusa[1]=32;
	fusa[2]=notas[5];

	semifusa[0]=1;
	semifusa[1]=64;
	semifusa[2]=notas[6];

	Pauta=new Image();
	Pauta.src="images/pentagrama.png";
	Pauta.onload=function(){
		lienzo.drawImage(Pauta,0,0,1300,999);
	}
	//llena compas
	//compas[0]=4;
	//compas[1]=4;

/*function actualizar() 
{
	//cx.fillStyle='#f0f0f0';
	//cx.fillRect(0,0,800,800);	
	for(var i=0;i<notas.length;i++)
	{
		//lienzo.fillStyle=objetos[i].color;
		lienzo.drawImage(notas.x,notas[i].y,notas[i].width,notas[i].height);
	}

}*/	

/*panelOptions.onmousedown=function(event)
{ 	
 	event.preventDefault();
 	var id=e.dataTransfer.getData("Text");
 	console.log(id+ " id de dataTransfer");
 	if(id=="elegirCompas"){

		console.log(event.clientX+" coordenada X sobre el objeto******");
		alert("Jola Mundo");
	}
}//onmousedown*/
elem_destino.onmousemove=function(event)
{
	if(objetoActual!=null)
	{
		objetoActual.x=event.clientX-inicioX;
		objetoActual.y=event.clientY-inicioY;
		actualizar();
	}

	xCoor=event.clientX;
	yCoor=event.clientY;
	//console.log(xCoor+" X valor al mover mouse /******* /****/**"); 
	//console.log(yCoor+" Y valor al mover mouse /******* /****/**"); 
};

/*panelOptions.onmouseup=function(event)
{
	event=null;
};*/
	///***************************end of table*********************		
}//funcion inicio
window.addEventListener("load",inicio,false);	
//**************************functions***********************

function Grupo()
{
	document.getElementById("grupo").innerHTML;
	var divisorInicio=prompt("Ingrese primer parametro relacionado");
	var notaValorInicio=prompt("Ingrese segundo parametro relacionado");
	console.log(divisorInicio+":"+notaValorInicio);
	divisor=parseInt(divisorInicio);
	notaValor=parseInt(notaValorInicio);
	contador=divisor;
}

function InsertValues()
{
	document.getElementById("elegirCompas").innerHTML;

	numerador=prompt("Ingrese numerador");
	denominador=prompt("Ingrese denominador");
	console.log(numerador+"/"+denominador);
	compasChange(numerador,denominador);
	//if(numerador=="4"){
		pentagrama[0]=new Image();
		pentagrama[0].src="images/"+numerador+".png";
		pentagrama[0].onload=function()
		{
			lienzo.drawImage(pentagrama[0],20,30,30,30);
			lienzo.drawImage(pentagrama[0],20,120,30,30);
			lienzo.drawImage(pentagrama[0],20,210,30,30);
			lienzo.drawImage(pentagrama[0],20,310,30,30);
			lienzo.drawImage(notas[18],6,30,20,140);
		}
		pentagrama[1]=new Image();
		pentagrama[1].src="images/"+denominador+".png";
		pentagrama[1].onload=function()
		{
			lienzo.drawImage(pentagrama[1],20,50,30,30);
			lienzo.drawImage(pentagrama[1],20,140,30,30);
			lienzo.drawImage(pentagrama[1],20,240,30,30);
			lienzo.drawImage(pentagrama[1],20,330,30,30);
			lienzo.drawImage(notas[18],6,230,20,140);			
		}
		/*pentagrama[0].onload=function()
		{
			lienzo.drawImage(pentagrama[0],20,80,30,30);
		}

		pentagrama[1].onload=function()
		{
			lienzo.drawImage(pentagrama[1],20,100,30,30);
		}**/
	//}
}//InsertValues
function compasChange(numeradorx,denominadory){
	numerador=parseInt(numeradorx);
	denominador=parseInt(denominadory);

	compas[0]=numerador;
	compas[1]=denominador;
}//function compasChangue
//myImageArray[0]=Image(50,50);
//***************************se almacenan las notas en myImageArray
function comenzando_arrastrar(e){
	var elemento=e.target;
	//console.log(elemento+" elemento00");
	e.dataTransfer.setData("Text",elemento.getAttribute("id")); //tenemos el id, lo podemos compartir
	//console.log(elemento.x+" coordenada x aaaaaa");
}
function entrando(e){
	e.preventDefault();
	elem_destino.style.background="rgba(8,252,25,.8)";
	console.log(e.clientX+" coordenada X en canvas");
}
function soltado(e){
	//var cont=0;
	//var img=new Image(); 
	//element=e.target;
	//x=element.x;
	//console.log(x+" coordenada x del elemento");
	///console.log(e.clientX+" coordenada X");
	//console.log(e.clientY+ " coordenadaY");
	//************************************************
	e.preventDefault();
	var id=e.dataTransfer.getData("Text");
	var src=document.getElementById(id).src;//se guarda id
	console.log(id+" este es ID de imagen seleccionada*********");
	//**********************************************
	//console.log(divisor+ " Valor del divior");
	//contador=divior;
	//if(contador>0){ 
	//	console.log(contador + " valor de contador");
	//	if(id=="corchea"){
	//		console.log("eligio corchea");
	//		corchea[1]=negra[1]/3;
	//	}//if si eligio corchea
	//}//if si eligio grupo irregular
	//else//si no eligio grupo
	//{
	//}//else si no eligio grupo

	contador=contador-1;
	pentagrama[cont]=new Image();
	//console.log(cont+"valor en Image()");
	pentagrama[cont].src=src;
	pentagrama[cont].id=id;
	console.log(pentagrama[cont].id+ "  id de imagen sssssss");
	//console.log(cont+"valor en src");
	//for(var i=0;i<compas.length;i++)
	//{	
	xCoor=e.offsetX-18;
	yCoor=e.offsetY-260;
	SavePointToLocalStorage(xCoor,yCoor,id);//manda puntos e ids de las notas
	if(!compas[0]==0)
	{ 	
		pentagrama[cont].onload =llenarCompas(cont,xCoor,yCoor,id);
	//}//for
		console.log(compas[0]+"/"+compas[1]+" valor de compas arriba en el if");
		cont+=1;
	//console.log(cont+"valor fuera de function");
	}//if compas==0
	else
	{
		console.log(numerador+"/"+denominador+" numerado y denominador arriba en else");
		compasChange(numerador,denominador); 
		var linea=new Image();
		linea.src="images/linea.png";
		linea.onload=function() 
		{
			lienzo.drawImage(linea,xCoor+10,35,40,40)
		}
		alert("compas lleno");
		pentagrama[cont].onload =llenarCompas(cont,xCoor+30,yCoor,id);
		cont+=1;
	}//else
	
	//elem_destino.innerHTML="<img src='"+ src+"'>";
	//compas[0]=new Image(50,50);
	//compas[0]=new Image();
	//compas[0]=src;
	//lienzo.drawImage(compas[0],110,100);
	//document.imgDisplay.src = compas[0].src;
	//elem_destino.drawImage(compas[0],10,10);
	//document.write(compas.length);
	//lienzo.drawImage(compas[0],100,100);
}//function soltado
/*function saliendo(e){
	e.preventDefault();
	elem_destino.style.background="#FFFFFF";
}*/
function llenarCompas(cont,x,y,id) 
{
	if(id=="redonda")
	{
		console.log(id+" id de la imagen seleccionada");
		if(redonda[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-redonda[0];//nuevo numerador
			newCompasValue[1]=redonda[1];//nuevo denominador
			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas redonda 1");
			if(newCompasValue[0]<0||newCompasValue[1]<0)
			{
				console.log(compas[0]+"numeradorxxxxxxxxxx anterior");
				console.log(compas[1]+"denominadorxxxxxxxx anterior");
				compas[0]=compas[0];
				compas[1]=compas[1];
				console.log(compas[0]+"/"+compas[1]+" valor de compas cuando este <0 ****");
				//var linea=new Image();
				//linea.src="images/linea.png";
				//linea.onload=function() 
			//	{
			//		lienzo.drawImage(linea,xCoor+10,35,40,40)
			//	}
				alert("compas lleno");	
	
			}//ifcompas menor  a 0		
			else{
				compas[0]=newCompasValue[0];//actualiza valores
				compas[1]=newCompasValue[1];
				lienzo.drawImage(pentagrama[cont],x,y,40,40);
				//pentagrama[cont].id=id;
				console.log(compas[0]+"/"+compas[1]);
			}//else si no es menor a 0
		}//if si los denominadores son iguales
		else
		{
			newCompasValue[1]=compas[1]*redonda[1];
			newCompasValue[0]=redonda[1]*compas[0]-(compas[1]*redonda[0]);
			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas redonda 2");
			if(newCompasValue[0]<0||newCompasValue[1]<0)
			{
				console.log(compas[0]+"numeradorxxxxxxxxxx anterior");
				console.log(compas[1]+"denominadorxxxxxxxx anterior");				
				compas[0]=compas[0];
				compas[1]=compas[1];				
				console.log(compas[0]+"/"+compas[1]+" valor de compas nuevamente****");
				//var linea=new Image();
				//linea.src="images/linea.png";
				//linea.onload=function() 
			//	{
			//		lienzo.drawImage(linea,xCoor+10,35,40,40)
			//	}				
				alert("compas lleno");

			}//ifcompas menor  a 0				
		else{
			for (var i=0;i<2;i++) 
			{
				compas[i]=newCompasValue[i];
				console.log(compas[0]+"/"+compas[1]+" valor de compas si es >0");
			}//for
			lienzo.drawImage(pentagrama[cont],x,y,40,40);
		}//else si no es menor a 0
		}//else	
	}//if si es redonda
	if(id=="blanca")
	{
		console.log(id+" id de la imagen seleccionada");
		if(blanca[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-blanca[0];//nuevo numerador
			newCompasValue[1]=blanca[1];//nuevo denominador
			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" ****valor de compas blanca 1");
			if(newCompasValue[0]<0||newCompasValue[1]<0)
			{
			console.log(compas[0]+"numeradorxxxxxxxxxx anterior");
			console.log(compas[1]+"denominadorxxxxxxxx anterior");				
				compas[0]=compas[0];
				compas[1]=compas[1];
			console.log(compas[0]+"/"+compas[1]+" valor de compas <0");
		//var linea=new Image();
		//linea.src="images/linea.png";
		//linea.onload=function() 
		//{
			//lienzo.drawImage(linea,xCoor+10,35,40,40)
		//}				
				alert("compas lleno");
			}//ifcompas menor  a 0
		else
		{

			compas[0]=newCompasValue[0];//actualiza valores de compas
			compas[1]=newCompasValue[1];
			console.log(compas[0]+"numeradorxxxxxxxxxx despues");
			console.log(compas[1]+"denominadorxxxxxxxx despues");
			lienzo.drawImage(pentagrama[cont],x,y,20,20);				
		}//si no es menor a 0 				
		}     //if si los denominadores son iguales
		else//si lo denominadores son diferentes
		{
		newCompasValue[1]=compas[1]*blanca[1];//nuevo denominador
		newCompasValue[0]=blanca[1]*compas[0]-(compas[1]*blanca[0]);//nuevo numerador
				
		while(newCompasValue[0]%2==0&&newCompasValue[1]%2==0)
		{
			newCompasValue[0]=newCompasValue[0]/2;
			newCompasValue[1]=newCompasValue[1]/2;
		}			
//************************************			
		console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas++++++++++");

		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			console.log(compas[0]+" numerador anterior");
			console.log(compas[1]+" denominador anterior");
				compas[0]=compas[0];
				compas[1]=compas[1];
		//var linea=new Image();
		//linea.src="images/linea.png";
		//linea.onload=function() 
		//{

	//		lienzo.drawImage(linea,xCoor+10,35,40,40)
	//	}			
			alert("compas lleno");
		}//ifcompas menor  a 0	
		else//si no es menor a 0
		{
		for (var i=0;i<2;i++) 
		{
			compas[i]=newCompasValue[i];
		}//for
//debe dibujar en el pentagrama	
			lienzo.drawImage(pentagrama[cont],x,y,20,20);	
		}//else si no es menor a 0						
	}//else	
}//if si es blanca
	if(id=="negra")
	{
		console.log(id+" id de la imagen seleccionada");
		if(negra[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-negra[0];//nuevo numerador
			newCompasValue[1]=negra[1];//nuevo denominador
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];
			alert("compas lleno");
			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		}//ifcompas menor  a 0							
			
		else
		{//else si no es menor a 0
			for (var i=0;i<2;i++) 
			{
				compas[i]=newCompasValue[i];
			}//for
			lienzo.drawImage(pentagrama[cont],x,y,20,20);								
		}//else si compas no es menor a 0
		}     //if si los denominadores son iguales
		else//si los denominadores son diferentes
		{
			newCompasValue[1]=compas[1]*negra[1];
			newCompasValue[0]=negra[1]*compas[0]-(compas[1]*negra[0]);
		
		while(newCompasValue[0]%2==0&&newCompasValue[1]%2==0)
		{
			newCompasValue[0]=newCompasValue[0]/2;
			newCompasValue[1]=newCompasValue[1]/2;
		}

		console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");	
		
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];		
			alert("compas lleno");
		}//ifcompas menor  a 0
		else{ // si el compas no es menor a 0
			for (var i=0;i<2;i++) 
			{
				compas[i]=newCompasValue[i];
			}//for que actualiza compas
		//debe pintar en pentagrama
		lienzo.drawImage(pentagrama[cont],x,y,20,20);			
		}//else si el compas no es menor a0						
		}//else	si denominadores son diferentes
	}//if si es negra
	if(id=="corchea")
	{
		console.log(id+" id de la imagen seleccionada");
		if(corchea[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-corchea[0];//nuevo numerador
			newCompasValue[1]=corchea[1];//nuevo denominador
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0							
		else{//else si el compas no es menor a 0
			compas[0]=newCompasValue[0];//actualiza valores de compas
			compas[1]=newCompasValue[1];			
//			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		//pinta en pentagrama
			lienzo.drawImage(pentagrama[cont],x,y,20,20);
			}//si el compas no es menor a 0
		}//if si los denominadores son iguales
		else//else si los denominadores son diferentes
		{
			newCompasValue[1]=compas[1]*corchea[1];
			newCompasValue[0]=corchea[1]*compas[0]-(compas[1]*corchea[0]);
			while(newCompasValue[0]%2==0&&newCompasValue[1]%2==0)
			{
				newCompasValue[0]=newCompasValue[0]/2;
				newCompasValue[1]=newCompasValue[1]/2;
			}//while
			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
				compas[0]=compas[0];
				compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0									
		else//else si hay espacio en compas todavia
		{
		for (var i=0;i<2;i++) //actualiza compas
		{
			compas[i]=newCompasValue[i];
		}//for		
		//entonces pinta en pentagrama
		lienzo.drawImage(pentagrama[cont],x,y,20,20);
		}//else si compas no es menor a0
		}//else	 si los denominadores son distintos
	}//if si es corchea
	if(id=="semicorchea")
	{
		console.log(id+" id de la imagen seleccionada");
		if(semicorchea[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-semicorchea[0];//nuevo numerador
			newCompasValue[1]=semicorchea[1];//nuevo denominador
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0		
		else//else si el valor de compas es positivo
		{
			compas[0]=newCompasValue[0];//actualiza valores
			compas[1]=newCompasValue[1];
		//pinta en pentagrama	
			lienzo.drawImage(pentagrama[cont],x,y,20,20);	
		}//else si compas >0					
			//console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		}//if si los denominadores son iguales
		else//else si los denominadores son diferentes
		{
			newCompasValue[1]=compas[1]*semicorchea[1];
			newCompasValue[0]=semicorchea[1]*compas[0]-(compas[1]*semicorchea[0]);
		
		while(newCompasValue[0]%2==0&&newCompasValue[1]%2==0)
			{
			newCompasValue[0]=newCompasValue[0]/2;
			newCompasValue[1]=newCompasValue[1]/2;
			}			
			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
			
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0									
		else//else si compas >0
		{
			for (var i=0;i<2;i++) 
			{
				compas[i]=newCompasValue[i];
			}//for de actualizar compas
			lienzo.drawImage(pentagrama[cont],x,y,20,20);	
		}//else si compas>0
		}//else	
	}//if si es semicorchea	
	if(id=="fusa")
	{
		console.log(id+" id de la imagen seleccionada");
		if(fusa[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-fusa[0];//nuevo numerador
			newCompasValue[1]=fusa[1];//nuevo denominador
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0	
		else//else si compas >0
		{
			compas[0]=newCompasValue[0];//actualiza valores
			compas[1]=newCompasValue[1];
			lienzo.drawImage(pentagrama[cont],x,y,40,40);
		}//else si compas >0						
			//console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		}     //if si los denominadores son iguales
		else//si denominadores diferentes
		{
			newCompasValue[1]=compas[1]*fusa[1];
			newCompasValue[0]=fusa[1]*compas[0]-(compas[1]*fusa[0]);
		while(newCompasValue[0]%2==0&&newCompasValue[1]%2==0)
		{
			newCompasValue[0]=newCompasValue[0]/2;
			newCompasValue[1]=newCompasValue[1]/2;
		}
			//console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0	
		else{//else si compas >0
			for (var i=0;i<2;i++) 
			{
				compas[i]=newCompasValue[i];
			}
		lienzo.drawImage(pentagrama[cont],x,y,40,40);	
		}//else si compas>0								
		}//else	si denominadores diferentes
	}//if si es fusa
	if(id=="semifusa")
	{
		console.log(id+" id de la imagen seleccionada");
		if(semifusa[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-semifusa[0];//nuevo numerador
			newCompasValue[1]=semifusa[1];//nuevo denominador
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0					
			//console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		else//si compas>0
		{
			compas[0]=newCompasValue[0];//actualiza valores
			compas[1]=newCompasValue[1];
			//pinta en lienzo pentagrama
		lienzo.drawImage(pentagrama[cont],x,y,20,20);	
		}//else si compas >0
		} //if si los denominadores son iguales
		else//else si denominadores distintos
		{
			newCompasValue[1]=compas[1]*semifusa[1];
			newCompasValue[0]=semifusa[1]*compas[0]-(compas[1]*semifusa[0]);
		while(newCompasValue[0]%2==0&&newCompasValue[1]%2==0)
		{
			newCompasValue[0]=newCompasValue[0]/2;
			newCompasValue[1]=newCompasValue[1]/2;
		}
			//console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0									
		else{//else si compas >0
		for (var i=0;i<2;i++) 
		{
			compas[i]=newCompasValue[i];
		}//for actualiza
		//pinta en pentagrama
		lienzo.drawImage(pentagrama[cont],x,y,20,20);	
		}//else si >0
		}//else	denominadores diferentes
	}//if silencio semifusa					
	//console.log(cont+"valor en function");
//*************silencios***********************

	if(id=="silencioRedonda")
	{
		console.log(id+" id de la imagen seleccionada");
		if(redonda[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-redonda[0];//nuevo numerador
			newCompasValue[1]=redonda[1];//nuevo denominador
			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas redonda 1");
			if(newCompasValue[0]<0||newCompasValue[1]<0)
			{
				console.log(compas[0]+"numeradorxxxxxxxxxx anterior");
				console.log(compas[1]+"denominadorxxxxxxxx anterior");
				compas[0]=compas[0];
				compas[1]=compas[1];
				console.log(compas[0]+"/"+compas[1]+" valor de compas cuando este <0 ****");
				//var linea=new Image();
				//linea.src="images/linea.png";
				//linea.onload=function() 
			//	{
			//		lienzo.drawImage(linea,xCoor+10,35,40,40)
			//	}
				alert("compas lleno");	
	
			}//ifcompas menor  a 0		
			else{
				compas[0]=newCompasValue[0];//actualiza valores
				compas[1]=newCompasValue[1];
				lienzo.drawImage(pentagrama[cont],x,y,20,20);
				console.log(compas[0]+"/"+compas[1]);
			}//else si no es menor a 0
		}//if si los denominadores son iguales
		else
		{
			newCompasValue[1]=compas[1]*redonda[1];
			newCompasValue[0]=redonda[1]*compas[0]-(compas[1]*redonda[0]);
			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas redonda 2");
			if(newCompasValue[0]<0||newCompasValue[1]<0)
			{
				console.log(compas[0]+"numeradorxxxxxxxxxx anterior");
				console.log(compas[1]+"denominadorxxxxxxxx anterior");				
				compas[0]=compas[0];
				compas[1]=compas[1];				
				console.log(compas[0]+"/"+compas[1]+" valor de compas nuevamente****");
				//var linea=new Image();
				//linea.src="images/linea.png";
				//linea.onload=function() 
			//	{
			//		lienzo.drawImage(linea,xCoor+10,35,40,40)
			//	}				
				alert("compas lleno");

			}//ifcompas menor  a 0				
		else{
			for (var i=0;i<2;i++) 
			{
				compas[i]=newCompasValue[i];
				console.log(compas[0]+"/"+compas[1]+" valor de compas si es >0");
			}//for
			lienzo.drawImage(pentagrama[cont],x,y,20,20);
		}//else si no es menor a 0
		}//else	
	}//if si es redonda
	if(id=="silencioBlanca")
	{
		console.log(id+" id de la imagen seleccionada");
		if(blanca[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-blanca[0];//nuevo numerador
			newCompasValue[1]=blanca[1];//nuevo denominador
			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" ****valor de compas blanca 1");
			if(newCompasValue[0]<0||newCompasValue[1]<0)
			{
			console.log(compas[0]+"numeradorxxxxxxxxxx anterior");
			console.log(compas[1]+"denominadorxxxxxxxx anterior");				
				compas[0]=compas[0];
				compas[1]=compas[1];
			console.log(compas[0]+"/"+compas[1]+" valor de compas <0");
		//var linea=new Image();
		//linea.src="images/linea.png";
		//linea.onload=function() 
		//{
			//lienzo.drawImage(linea,xCoor+10,35,40,40)
		//}				
				alert("compas lleno");
			}//ifcompas menor  a 0
		else
		{

			compas[0]=newCompasValue[0];//actualiza valores de compas
			compas[1]=newCompasValue[1];
			console.log(compas[0]+"numeradorxxxxxxxxxx despues");
			console.log(compas[1]+"denominadorxxxxxxxx despues");
			lienzo.drawImage(pentagrama[cont],x,y,20,20);				
		}//si no es menor a 0 				
		}     //if si los denominadores son iguales
		else//si lo denominadores son diferentes
		{
		newCompasValue[1]=compas[1]*blanca[1];//nuevo denominador
		newCompasValue[0]=blanca[1]*compas[0]-(compas[1]*blanca[0]);//nuevo numerador
				
		while(newCompasValue[0]%2==0&&newCompasValue[1]%2==0)
		{
			newCompasValue[0]=newCompasValue[0]/2;
			newCompasValue[1]=newCompasValue[1]/2;
		}			
//************************************			
		console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas++++++++++");

		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			console.log(compas[0]+" numerador anterior");
			console.log(compas[1]+" denominador anterior");
				compas[0]=compas[0];
				compas[1]=compas[1];
		//var linea=new Image();
		//linea.src="images/linea.png";
		//linea.onload=function() 
		//{

	//		lienzo.drawImage(linea,xCoor+10,35,40,40)
	//	}			
			alert("compas lleno");
		}//ifcompas menor  a 0	
		else//si no es menor a 0
		{
		for (var i=0;i<2;i++) 
		{
			compas[i]=newCompasValue[i];
		}//for
//debe dibujar en el pentagrama	
			lienzo.drawImage(pentagrama[cont],x,y,20,20);	
		}//else si no es menor a 0						
	}//else	
}//if si es blanca
	if(id=="silencioNegra")
	{
		console.log(id+" id de la imagen seleccionada");
		if(negra[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-negra[0];//nuevo numerador
			newCompasValue[1]=negra[1];//nuevo denominador
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];
			alert("compas lleno");
			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		}//ifcompas menor  a 0							
			
		else
		{//else si no es menor a 0
			for (var i=0;i<2;i++) 
			{
				compas[i]=newCompasValue[i];
			}//for
			lienzo.drawImage(pentagrama[cont],x,y,20,20);								
		}//else si compas no es menor a 0
		}     //if si los denominadores son iguales
		else//si los denominadores son diferentes
		{
			newCompasValue[1]=compas[1]*negra[1];
			newCompasValue[0]=negra[1]*compas[0]-(compas[1]*negra[0]);
		
		while(newCompasValue[0]%2==0&&newCompasValue[1]%2==0)
		{
			newCompasValue[0]=newCompasValue[0]/2;
			newCompasValue[1]=newCompasValue[1]/2;
		}

		console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");	
		
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];		
			alert("compas lleno");
		}//ifcompas menor  a 0
		else{ // si el compas no es menor a 0
			for (var i=0;i<2;i++) 
			{
				compas[i]=newCompasValue[i];
			}//for que actualiza compas
		//debe pintar en pentagrama
		lienzo.drawImage(pentagrama[cont],x,y,20,20);			
		}//else si el compas no es menor a0						
		}//else	si denominadores son diferentes
	}//if si es negra
	if(id=="silencioCorchea")
	{
		console.log(id+" id de la imagen seleccionada");
		if(corchea[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-corchea[0];//nuevo numerador
			newCompasValue[1]=corchea[1];//nuevo denominador
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0							
		else{//else si el compas no es menor a 0
			compas[0]=newCompasValue[0];//actualiza valores de compas
			compas[1]=newCompasValue[1];			
//			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		//pinta en pentagrama
			lienzo.drawImage(pentagrama[cont],x,y,50,50);
			}//si el compas no es menor a 0
		}//if si los denominadores son iguales
		else//else si los denominadores son diferentes
		{
			newCompasValue[1]=compas[1]*corchea[1];
			newCompasValue[0]=corchea[1]*compas[0]-(compas[1]*corchea[0]);
			while(newCompasValue[0]%2==0&&newCompasValue[1]%2==0)
			{
				newCompasValue[0]=newCompasValue[0]/2;
				newCompasValue[1]=newCompasValue[1]/2;
			}//while
			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
				compas[0]=compas[0];
				compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0									
		else//else si hay espacio en compas todavia
		{
		for (var i=0;i<2;i++) //actualiza compas
		{
			compas[i]=newCompasValue[i];
		}//for		
		//entonces pinta en pentagrama
		lienzo.drawImage(pentagrama[cont],x,y,50,50);
		}//else si compas no es menor a0
		}//else	 si los denominadores son distintos
	}//if si es corchea
	if(id=="silencioSemicorchea")
	{
		console.log(id+" id de la imagen seleccionada");
		if(semicorchea[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-semicorchea[0];//nuevo numerador
			newCompasValue[1]=semicorchea[1];//nuevo denominador
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0		
		else//else si el valor de compas es positivo
		{
			compas[0]=newCompasValue[0];//actualiza valores
			compas[1]=newCompasValue[1];
		//pinta en pentagrama	
			lienzo.drawImage(pentagrama[cont],x,y,20,20);	
		}//else si compas >0					
			//console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		}//if si los denominadores son iguales
		else//else si los denominadores son diferentes
		{
			newCompasValue[1]=compas[1]*semicorchea[1];
			newCompasValue[0]=semicorchea[1]*compas[0]-(compas[1]*semicorchea[0]);
		
		while(newCompasValue[0]%2==0&&newCompasValue[1]%2==0)
			{
			newCompasValue[0]=newCompasValue[0]/2;
			newCompasValue[1]=newCompasValue[1]/2;
			}			
			console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
			
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0									
		else//else si compas >0
		{
			for (var i=0;i<2;i++) 
			{
				compas[i]=newCompasValue[i];
			}//for de actualizar compas
			lienzo.drawImage(pentagrama[cont],x,y,20,20);	
		}//else si compas>0
		}//else	
	}//if si es semicorchea	
	if(id=="silencioFusa")
	{
		console.log(id+" id de la imagen seleccionada");
		if(fusa[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-fusa[0];//nuevo numerador
			newCompasValue[1]=fusa[1];//nuevo denominador
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0	
		else//else si compas >0
		{
			compas[0]=newCompasValue[0];//actualiza valores
			compas[1]=newCompasValue[1];
			lienzo.drawImage(pentagrama[cont],x,y,50,50);
		}//else si compas >0						
			//console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		}     //if si los denominadores son iguales
		else//si denominadores diferentes
		{
			newCompasValue[1]=compas[1]*fusa[1];
			newCompasValue[0]=fusa[1]*compas[0]-(compas[1]*fusa[0]);
		while(newCompasValue[0]%2==0&&newCompasValue[1]%2==0)
		{
			newCompasValue[0]=newCompasValue[0]/2;
			newCompasValue[1]=newCompasValue[1]/2;
		}
			//console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0	
		else{//else si compas >0
			for (var i=0;i<2;i++) 
			{
				compas[i]=newCompasValue[i];
			}
		}//else si compas>0								
		}//else	si denominadores diferentes
	}//if si es fusa
	if(id=="silencioSemifusa")
	{
		console.log(id+" id de la imagen seleccionada");
		if(semifusa[1]==compas[1])
		{
			console.log("denominadores iguales");
			newCompasValue[0]=compas[0]-semifusa[0];//nuevo numerador
			newCompasValue[1]=semifusa[1];//nuevo denominador
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0					
			//console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		else//si compas>0
		{
			compas[0]=newCompasValue[0];//actualiza valores
			compas[1]=newCompasValue[1];
			//pinta en lienzo pentagrama
		lienzo.drawImage(pentagrama[cont],x,y,50,50);	
		}//else si compas >0
		} //if si los denominadores son iguales
		else//else si denominadores distintos
		{
			newCompasValue[1]=compas[1]*semifusa[1];
			newCompasValue[0]=semifusa[1]*compas[0]-(compas[1]*semifusa[0]);
		while(newCompasValue[0]%2==0&&newCompasValue[1]%2==0)
		{
			newCompasValue[0]=newCompasValue[0]/2;
			newCompasValue[1]=newCompasValue[1]/2;
		}
			//console.log(newCompasValue[0]+"/"+newCompasValue[1]+" valor de compas");
		if(newCompasValue[0]<0||newCompasValue[1]<0)
		{
			compas[0]=compas[0];
			compas[1]=compas[1];			
			alert("compas lleno");
		}//ifcompas menor  a 0									
		else{//else si compas >0
		for (var i=0;i<2;i++) 
		{
			compas[i]=newCompasValue[i];
		}//for actualiza
		//pinta en pentagrama
		lienzo.drawImage(pentagrama[cont],x,y,20,20);	
		}//else si >0
		}//else	denominadores diferentes
	}//if silencio semifusa	
//***********************************finaliza silencios	*********************

//console.log(x+"coordenada X al final");
//console.log(y+"coordenada Y al final");
//console.log(xCoor+" X valor al mover mouse FINAALLLLLL"); 
//console.log(yCoor+" X valor al mover mouse FINAALLLLLL"); 
//***********************************borrador***********************
if(id=="borrador")
{
	//pentagrama[cont-1]=null;
	var borra=new Image();
	borra.src="images/borra.png";
	console.log("borrador");
	console.log("elemento borrado");
	pentagrama[cont-1].style.visibility="hidden";
	pentagrama[cont-1]=null;
	compas[0]=numerador;
	compas[1]=denominador;
	console.log(pentagrama[cont-1]);
	lienzo.drawImage(borra,x,y,20,63);
	//lienzo
}
if(id=="corchete"){
		lienzo.drawImage(pentagrama[cont],x,y,20,200);
}
if(id=="sostenido"){
		lienzo.drawImage(pentagrama[cont],x,y,20,20);
}
if(id=="bemol"){
		lienzo.drawImage(pentagrama[cont],x,y,20,20);
}if(id=="natural"){
		lienzo.drawImage(pentagrama[cont],x,y,20,20);
}if(id=="calderon"){
		lienzo.drawImage(pentagrama[cont],x,y,40,40);
}
if(id=="calderon"){
		lienzo.drawImage(pentagrama[cont],x,y,40,40);
}
if(id=="cresc"){
		lienzo.drawImage(pentagrama[cont],x,y,50,50);
}if(id=="forte"){
		lienzo.drawImage(pentagrama[cont],x,y,50,50);
}
if(id=="fp"){
		lienzo.drawImage(pentagrama[cont],x,y,50,50);
}
if(id=="mf"){
		lienzo.drawImage(pentagrama[cont],x,y,50,50);
}
if(id=="mp"){
		lienzo.drawImage(pentagrama[cont],x,y,50,50);
}if(id=="pp"){
		lienzo.drawImage(pentagrama[cont],x,y,50,50);
}
if(id=="segno"){
		lienzo.drawImage(pentagrama[cont],x,y,50,50);
}
if(id=="natural"){
		lienzo.drawImage(pentagrama[cont],x,y,50,50);
}
if(id=="claveSol"){
		lienzo.drawImage(pentagrama[cont],x,y,50,50);
}
if(id=="claveFa"){
		lienzo.drawImage(pentagrama[cont],x,y,50,50);
}
if(id=="claveDo"){
		lienzo.drawImage(pentagrama[cont],x,y,50,50);
}
	//console.log(cont+"valor en lienzo");
	//console.log(compas.length+"valor de length de compas")	//console.log(compas[0].getAttribute("alt")+"valor de id");
}//function llenarCompas

  function SavePointToLocalStorage(x,y,id){
    var newPoint=new Object();
    newPoint.x=x;
    newPoint.y=y;
    AllIds[AllIds.length]=id;
    AllPoints[AllPoints.length]=newPoint;
    var str=JSON.stringify(AllPoints);
    localStorage.setItem("points",str);
  }//SavePointToLocalStorage*/
function loadPoints(){
	var str =localStorage.getItem("points");
   	//debugger;
    if(str!=null){
      AllPoints=JSON.parse(str);
      //inicio();
      for(var i=0;i<AllPoints.length;i++){
        llenarCompas(cont,AllPoints[i].x,AllPoints[i].y,id);
      }
    }

}//function loadPoints 