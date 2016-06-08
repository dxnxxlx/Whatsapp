var amigos =  [{
			  name:"Laboratoria Perú",
			  src:"image/logocodeacademy.png",
			  mensajes: []
			},{
			  name:"Raymi Saldomando",
			  src:"image/raymi.jpg",
			  mensajes: []
			},{
			  name:"Mariana Costa",
			  src:"image/mariana.jpg",
			  mensajes: []
			},{
			  name:"Ana María Martinez Franklin",
			  src:"image/anamaria.jpg",
			  mensajes: []
			},{
			  name:"Rodulfo Prieto",
			  src:"image/rodulfo.jpg",
			  mensajes: []
			},{
			  name:"Andrea Lamas",
			  src:"image/andrea.jpg",
			  mensajes: []
			},{
			  name:"Maria Paula Rivarola",
			  src:"image/mariapaula.jpg",
			  mensajes: []
			},{
			  name:"Katy Sánchez",
			  src:"image/Katy.jpg",
			  mensajes: []
			},{
			  name:"Aldo Alfaro",
			  src:"image/aldo.jpg",
			  mensajes: []
			},{
			  name:"Raymi II",
			  src:"image/avatar.jpg",
			  mensajes: []
			}];

var chatGuardado = 0;


function writeMessage(){
	var message = document.getElementById('inputMessage');
	var textChat = message.value;
	if(textChat !== ''){
		chat(textChat);
			
	}
	clean();
}

function hourSingleMessage() {
	var fecha = new Date();
	var hour = fecha.getHours();
	//agregar 0 para hora menor que 10
		if(hour<10){
			hour = '0'+hour;
		} else{
			hour
		} 
	var minutes = fecha.getMinutes();
	//agregar 0 para minuto menor que 10
		if(minutes<10){
			minutes = '0'+minutes;
		} else{
			minutes
		}
	var hourMessage = hour +': '+minutes;
	return hourMessage;
}

function clickNuevoAmigo(id){
	var chatAntiguo= document.getElementById('chatLaboratoria');
	chatAntiguo.innerHTML = ' ';
}


$(document).ready(function(){ 
	$(".chat-per").on('click',function(){
		clickNuevoAmigo();
		var miembros= document.getElementById("miembros");
		miembros.innerHTML = "";
		var who = $(this).attr("value");
		var nombre = amigos[who].name;
		var ruta = amigos[who].src;
		//actualiza acceso a nuevo chat
		chatGuardado = who;
		console.log(chatGuardado);
		//muestra datos de chat actual en cabecera
		$("#chatActual").text(nombre);
		$("#imageChatActual").attr("src", ruta); 
		//Inserta historial
		var chatInsertar = document.getElementById('chatLaboratoria');
		for (i=0;i<amigos[chatGuardado].mensajes.length;i++){
			var mensajeInsertar =  amigos[chatGuardado].mensajes[i];
			chatInsertar.appendChild(mensajeInsertar);
		}
	});

});


function chat(texto){
	var boxChat = document.getElementById('chatLaboratoria');
	var boxSingleChat =  document.createElement('div');
	boxSingleChat.className='row globo globogian';
	boxChat.appendChild(boxSingleChat);


	var frase = document.createElement('p');
	frase.className='frase';
	frase.innerHTML=texto;

	var hora = document.createElement('p');
	hora.className='hora2';
	hora.innerHTML=hourSingleMessage();
	//se agrega mensaje y hora en orden
	boxSingleChat.appendChild(frase);
	boxSingleChat.appendChild(hora);
	//guarda mensajes en historial
	amigos[chatGuardado].mensajes.push(boxSingleChat);
	console.log(amigos[chatGuardado].mensajes);
}

function clean() {
	var cajaChat = document.getElementById('inputMessage');
	cajaChat.value = '';
	cajaChat.focus();
}

//Buscador

//limpia contactos
function cleanSearch() {
	var buscar = document.getElementById('search');
	buscar.value = '';
	buscar.focus();
}

function filtrarPorNombre() {
	var lista= document.getElementById('lista');
	lista.innerHTML = ' ';
	cleanSearch();
};

