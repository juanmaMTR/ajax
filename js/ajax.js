/**
 *   Teoría y Ejercicios de AJAX
 *   Ref:https://www.w3schools.com/js/js_ajax_intro.asp
 *   @author Miguel Jaque <mjaque@fundacionloyola.es>
 *   @license GPL-3.0-or-later
 *   Ref: https://spdx.org/licenses/
 *
 *   Ref JSDoc: https://jsdoc.app/
 */
'use strict'

//Por la vía fácil
function cargarFichero(){
  fetch('datos1.txt') //Hacemos la petición
    .then(respuesta => respuesta.text())  //Recibimos un objeto de tipo Response. respuesta.text devuelve una Promise
    .then(texto => document.getElementById('span1').innerHTML = texto)
}

//Con mayor control
function cargarFichero2(){
  const xhttp = new XMLHttpRequest()
  xhttp.onload = function() {
    document.getElementById('span2').innerHTML = this.responseText
    }
  xhttp.open('GET', 'datos1.txt', true)
  xhttp.send()
}

//Detallando el control
function cargarFichero3(){
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    console.log(this.readyState, this.status)
    if (this.readyState == 4 && this.status == 200)
      document.getElementById('span3').innerHTML = this.responseText
  }
  xhttp.open('GET', 'datos1.txt', true)
  xhttp.send()
}


//Enviando datos al servidor por GET
function cargarFichero4(){
  fetch('php/datos_get.php?param=42') //Hacemos la petición
    .then(respuesta => respuesta.text())  //Recibimos un objeto de tipo Response. respuesta.text devuelve una Promise
    .then(texto => document.getElementById('span4').innerHTML = texto)
}

//Enviando datos al servidor por POST
function cargarFichero5(){
  let formData = new FormData()
  formData.append('param1', 42)
  formData.append('param2', 'Miguel')
  let opciones = {
    method: 'POST',
    body: formData
  }
  fetch('php/datos_post.php', opciones)//Hacemos la petición
    .then(respuesta => respuesta.text())  //Recibimos un objeto de tipo Response. respuesta.text devuelve una Promise
    .then(texto => document.getElementById('span5').innerHTML = texto)
}

//Enviando datos al servidor por POST en JSON
function cargarFichero6(){
  let datos = {
    'param1' : 42,
    'param2' : 'Miguel'
  }
  let opciones = {
    method: 'POST',
    body: JSON.stringify(datos),
    headers:{ 'Content-Type': 'application/json'}
  }
  fetch('php/datos_post_json.php', opciones)//Hacemos la petición
    .then(respuesta => respuesta.text())  //Recibimos un objeto de tipo Response. respuesta.text devuelve una Promise
    .then(texto => document.getElementById('span6').innerHTML = texto)
}
function peticionPOSTJSON(){
  let datos={
    'param1':42,
    'param2': 'Juanma'
  }
  let opciones={
    method: 'POST',
    body: JSON.stringify(datos),
    headers:{ 'Content-Type': 'application/json'}
  }
  fetch('php/datos_post_json.php', opciones)
    .then(respuesta=>respuesta.text())
    .then(texto=>document.getElementById('span6').innerHTML=texto)
}

//Control de errores
function cargarFichero7(){
  fetch('php/error.php') //Hacemos la petición
    .then(respuesta => {
      if(respuesta.status!==200)
        throw(respuesta.status)
      else
        respuesta.text()
    })  //Recibimos un objeto de tipo Response. respuesta.text devuelve una Promise
    .then(texto => document.getElementById('span7').innerHTML = texto)
    .catch(error => console.log(error))
}

//Cargando un json
function cargarFichero8(){
  fetch('datos.json') //Hacemos la petición
    .then(respuesta => respuesta.json())  //Recibimos un objeto de tipo Response. respuesta.text devuelve una Promise
    .then(datos => document.getElementById('span8').innerHTML = `${datos.atrib1} sabe que el sentido del Universo es ${datos.atrib2}`)
}

function jsonJson(){
  let datos={
    'param1':42,
    'param2': 'Juanma'
  }
  let opciones={
    method: 'POST',
    body: JSON.stringify(datos),
    headers:{ 'Content-Type': 'application/json'}
  }
  fetch('php/datos_post_json2.php', opciones)
    .then(respuesta=>respuesta.json())
    .then(objeto=>document.getElementById('span9').innerHTML=`${datos.atrib1} sabe que el sentido del Universo es ${datos.atrib2}`)
}
