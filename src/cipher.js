//CIFRADO, ESTE ARCHIVO ES LA LÓGICA DEL PROYECTO//

//La siguiente línea indica que todo lo que está a continuación, es la ventana del DOM que contiene el código de cifrado/descifrado
window.cipher = {
	//Declaro la función encode, donde ingreso los parámetros que ya ingrese en el html (el texto y offset)
	encode: (textCipher, offsetCipher) => {
		//creo variable vacía, que guarda el resultado de las nuevas letras cuando ya sean "transformadas"
		//una función que incluya dentro una isntrución "return" envia un valor de salida cuando se llama a dicha fución
		let result = '';
		/*con el siguiente for (bucle), recorremos el textCipher (osea, el mensaje que ingresa el usuario) y le damos las instruciones de cómo hacerlo
            Primero se le asigna valor al contador (osea que empezará desde cero, lo siguiente será la condición de salida del bucle para posteriormente, indicarle que cada vez
                    que se salte un número, le agregue uno más y sea consecutivo*/
		for (let i = 0; i < textCipher.length; i++) {
			//La siguiente variable, toma cada letra del mensaje que se ingresa, y lo transforma a su equivalente en codigo ASCII
			let transformText = textCipher[i].charCodeAt();
			//con esta condicional, digo que si mi mensaje esta entre el 65 y 90 (código ASCII, A-Z),
			if (transformText >= 65 && transformText <= 90) {
				//A esto último se le aplicará una variable, la cual contiene la formula de Michelle, que da el código ascii transformado (parseInt es para el dígito)
				let cipherMayus = (transformText - 65 + parseInt(offsetCipher)) % 26 + 65;
				//Acá le digo a result que concatene el mensaje, y que fromCharCode transforme en "letras" el mensaje resultante, desde el codigo ASCII
				result += String.fromCharCode(cipherMayus);
			} else if (transformText === 32) {
				result += ' ';
			}
		}
		//Declaro con returns que ese será mi resultado (que viene en forma de "cadena" por el método de la línea anterior), y que se imprima en mi html
		return result;
	},

	//DESCIFRADO; declaro la función decode, ingresando los parámetros correspondientes
	decode: (textDecipher, offsetDecipher) => {
		let resultDecipher = '';
		for (let i = 0; i < textDecipher.length; i++) {
			let transformText = textDecipher[i].charCodeAt();
			if (transformText >= 65 && transformText <= 90) {
				let decipherMayus = (transformText - 90 - parseInt(offsetDecipher)) % 26 + 90;
				resultDecipher += String.fromCharCode(decipherMayus);
			} else if (transformText === 32) {
				resultDecipher += ' ';
			}
		}
		return resultDecipher;
	}
};
