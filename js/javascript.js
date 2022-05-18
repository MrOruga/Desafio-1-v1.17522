var inputEncriptarDesencriptar = document.querySelector(".input_encriptar_desencriptar");
var inputMostrarResultado = document.querySelector(".input_mostrar_resultado");
var botonEncriptar = document.querySelector(".boton_encriptar");
var botonDesencriptar = document.querySelector(".boton_desencriptar");
var botonCopiar = document.querySelector(".boton_copiar");
var opcionEncDesenc;
var botonMenu = document.querySelector(".boton_menu");
var botonCerrar = document.querySelector(".boton_cerrar");

function encriptar() {

  opcionEncDesenc="E";
  comprobarExepciones();
}

function desencriptar() {

  opcionEncDesenc = "D";
  comprobarExepciones();
}

function comprobarExepciones() {
  var comprobarTexto = inputEncriptarDesencriptar.value;

  if (comprobarTexto == "") {

    vaciarCajaTextarea();

  } else if (/[^a-z\s]/.test(comprobarTexto)) {

    alert("Hubo un error al ingresar el mensaje. Recuerda que el programa solo admite LETRAS MINUSCULAS (Elimina mayúsculas, acentos y caracteres especiales por favor). Intenta de nuevo...!!!");

    vaciarCajaTextarea();

  } else {

    if (opcionEncDesenc=="E") {

      encriptador();

    } else if (opcionEncDesenc=="D") {

      desencriptador();
    }
  }
}

function desarmarMensaje() {
  var mensaje = inputEncriptarDesencriptar.value;
  var mensajeDesarmado = mensaje.split("");

  return mensajeDesarmado;
}

function encriptador() {
  var letrasSeparadas = desarmarMensaje();
  var posicion = 0;

  while (posicion <= letrasSeparadas.length) {

    if (letrasSeparadas[posicion] == "a") {

      letrasSeparadas[posicion] = "ai";

    } else if (letrasSeparadas[posicion] == "e") {

      letrasSeparadas[posicion] = "enter";

    } else if (letrasSeparadas[posicion] == "i") {

      letrasSeparadas[posicion] = "imes";

    } else if (letrasSeparadas[posicion] == "o") {

      letrasSeparadas[posicion] = "ober";

    } else if (letrasSeparadas[posicion] == "u") {

      letrasSeparadas[posicion] = "ufat";

    }

    posicion += 1;
  }

  ocultarElementosInicioDer();
  mostrarResultado(letrasSeparadas);
}

function desencriptador() {
  var letrasSeparadas = desarmarMensaje();
  var armandoMensaje = [];
  var posicion = 0;

  while (posicion <= letrasSeparadas.length) {

    if (letrasSeparadas[posicion] == "a") {

      armandoMensaje.push(letrasSeparadas[posicion]);
      posicion += 1;

    } else if (letrasSeparadas[posicion] == "e") {

      armandoMensaje.push(letrasSeparadas[posicion]);
      posicion += 4;

    } else if ((letrasSeparadas[posicion] == "i") || (letrasSeparadas[posicion] == "o") || (letrasSeparadas[posicion] == "u")) {

      armandoMensaje.push(letrasSeparadas[posicion]);
      posicion += 3;

    } else {

      armandoMensaje.push(letrasSeparadas[posicion]);
    }

    posicion += 1;
  }

  mostrarResultado(armandoMensaje);
}

function mostrarResultado(mensajeDesarmado) {
  inputMostrarResultado.value = mensajeDesarmado.join("");
  vaciarCajaTextarea();
}

function copiar() {

  inputMostrarResultado.select();

  document.execCommand("copy");
  
  mostrarAlertaTextoCopiado();

  inputEncriptarDesencriptar.focus();
}

function mostrarAlertaTextoCopiado() {

  document.querySelector(".alerta_copiado").style.display = "inherit";
  document.querySelector(".texto_alerta_copiado").style.display = "inherit";

  setTimeout(function () {

    document.querySelector(".alerta_copiado").style.display = "none";
    document.querySelector(".alerta_copiado").style.display = "none";
  }, 1500);
}

function vaciarCajaTextarea() {
  inputEncriptarDesencriptar.value = "";
  inputEncriptarDesencriptar.focus();
}

function ocultarElementosInicioDer() {

  document.querySelector(".pantalla_inicial_seccion_der").style.display = "none";
  document.querySelector(".pantalla_final_seccion_der").style.display = "inherit";
}

function abrirMenu() {
  document.querySelector(".menu").style.display = "inherit";
}

function cerrarMenu() {
  document.querySelector(".menu").style.display = "none";
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
botonMenu.onclick = abrirMenu;
botonCerrar.onclick = cerrarMenu;