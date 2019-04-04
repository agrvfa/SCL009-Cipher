         //EL ÍNDEX, ESTE ARCHIVO ES EL CORAZÓN DEL PROYECTO, DONDE TRABAJO CON EL DOM //
//la siguientes líneas, ejecutan el que reconozca el nombre del usuario, y lo imprima, desplegando la intro
//Primero, creo una función llamada ingresar, 
function ingresar(){
  if(userName.value){
//Le entrego valor a "name"
var name=document.getElementById('userName');
//En la siguiente línea, imprimo el mensaje en el HTML, cambiando esa "info" de origen, con el .innerHTML
document.getElementById('mainMenu').innerHTML= '¡' + 'Bienvenidx, ' + name.value + '!';
//Finalmente, llamo por el id a la intro, que se abra solo al meter el nombre y "logearse"
document.getElementById('despliegueIntro').style.display='block'
document.getElementById('login').style.display='none'
 }
}

//CIFRADO
//Luego de rellenar el texto, se hace click en el botón (al que llame con id y asigné evento) para obtener el cifrado (que es ejecutada con todo el código siguiente)
document.getElementById('btnCipher').addEventListener('click',(evento)=>{
  evento.preventDefault();
//Aquí creo una variable para guardar el valor de lo que la persona ingresa en la caja de texto
  let textCipher = document.getElementById('boxCipher').value;
//Ahora, creamos una variable para guardar el valor de lo que la persona ingresa en el offset
  let offsetCipher = document.getElementById('offset1').value;
//Con getElementById, asigno a "resultCipher" que cambie desde html.
//Así, ingreso en el textarea, que está en HTML, el resultado de la función encode presente en el cipher.js (la enlazo on window)
document.getElementById('resultCipher').innerHTML = window.cipher.encode(textCipher, offsetCipher);
})

//DESCIFRADO
//Luego de rellenar el texto, se hace click en el botón (al que llame con id y asigné evento) para obtener el descifrado (que es ejecutada con todo el código siguiente)
document.getElementById('btnDecipher').addEventListener('click',(evento)=>{
  evento.preventDefault();
//Aquí creo una variable para guadar el valor de lo que la persona ingresa en la caja de texto
  let textDecipher = document.getElementById('boxDecipher').value;
//Ahora, creamos una variable para guardar el valor de lo que la persona ingresa en el offset
  let offsetDecipher = document.getElementById('offset2').value;
//Con getElementById, asigno a "resultDecipher" que cambie desde html.
//Así, ingreso en el textarea, que está en HTML, el resultado de la función encode presente en el cipher.js (la enlazo on window)
document.getElementById('resultDecipher').innerHTML = window.cipher.decode(textDecipher, offsetDecipher);
})