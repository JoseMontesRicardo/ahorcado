var canvas, lienzo, b, l;

var palabras = ['amada', 'cinco', 'dados'],
	descubrir = [];

b = document.getElementById('boton');
l = document.getElementById('letra');
canvas = document.getElementById('areaDibujo');
lienzo = canvas.getContext('2d');

function Persona () {
	//Propiedades de Persona
	this.vivo = true;
	this.intentos = 4;

	this.humanoide = {
		Cabeza: function () {
			//Cabeza
			lienzo.beginPath();
			lienzo.strokeStyle = "#00A";
			lienzo.lineWidth = 2;
			lienzo.arc(200, 150, 30, (Math.PI*2), false);
			lienzo.closePath();
			lienzo.stroke();
		},
		Cuerpo: function () {
			//Cuerpo
			lienzo.beginPath();
			lienzo.moveTo(200, 180);
			lienzo.lineTo(200, 280);
			lienzo.closePath();
			lienzo.stroke();
		},
		Brazos: function () {
			//Brazos
			lienzo.beginPath();
			lienzo.moveTo(200, 190);
			lienzo.lineTo(160, 230);
			lienzo.moveTo(200, 190);
			lienzo.lineTo(240, 230);
			lienzo.closePath();
			lienzo.stroke();
		},
		Piernas: function () {
			//Piernas
			lienzo.beginPath();
			lienzo.moveTo(200, 280);
			lienzo.lineTo(160, 330);
			lienzo.moveTo(200, 280);
			lienzo.lineTo(240, 330);
			lienzo.closePath();
			lienzo.stroke();
		}
	}
}

function Verdugo () {

	//Verdugo
	lienzo.beginPath();
	lienzo.strokeStyle = "#111";
	lienzo.lineWidth = 5;
	lienzo.moveTo(400, 400);
	lienzo.lineTo(400, 100);
	lienzo.moveTo(403, 100);
	lienzo.lineTo(200, 100);
	lienzo.moveTo(200, 97);
	lienzo.lineTo(200, 120);
	lienzo.closePath();
	lienzo.stroke();
	
	l.focus();
}

function Ejecutado () {
	if (hombre.intentos >= 0){
		hombre.intentos--;
		if (hombre.intentos === 3){
			hombre.humanoide.Cabeza();
		}else if (hombre.intentos === 2){
			hombre.humanoide.Cuerpo();
		}else if (hombre.intentos === 1){
			hombre.humanoide.Brazos();
		}else if (hombre.intentos === 0){
			hombre.humanoide.Piernas();
			b.disabled = true;
			hombre.vivo = false;
			alert('Perdiste :(. F5 para intentar de nuevo');
		}
	}
}

var hombre = new Persona();

var adivinala = document.getElementById('adivinala');

for (var i = 0; i < palabras[0].length; i++){
	descubrir.push("_");
	adivinala.innerHTML = descubrir.join(" ");
}

function Ahorcado () {
	var letra = l.value;
	var activador = false;

	for (var i = 0; i < palabras[0].length; i++){
		if (letra === palabras[0][i]){
			activador = true;
			descubrir[i] = letra.toUpperCase();
			adivinala.innerHTML = descubrir.join(" ");
			if (descubrir.join("") === palabras[0].toUpperCase()){
				b.disabled = true;
				alert('Enhorabuena! Ganaste!');
			}
		}
	}

	if (!activador){
		Ejecutado();
	}

	l.value = "";
	l.focus();
}

b.addEventListener('click', Ahorcado);
Verdugo();