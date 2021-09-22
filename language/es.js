/*
   *
     If you find an error in writing a word / sentence please contact me
   *
*/
exports.wait = () => {
	return `\`\`\`[ ! ] Proceso...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` Finalizado...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Éxito de la transmisión`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` Formato incorrecto`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` Eso no es una pegatina`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` Responder / etiquetar la pegatina`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` Enlace inválido`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` Especial de grupo`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` Bot propietario especial`
	}
exports.benned = () => {
	return `\`\`\`[ x ]\`\`\` Lo siento, tu número ha sido bloqueado`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` Solo administrador de grupo`
	}
exports.pesanBot = () => {
	return `\`\`\`[ x ]\`\`\` Responder a mensajes de bot`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` respuesta de foto`
	}
exports.tagUser = () => {
	return `\`\`\`[ x ]\`\`\` Etiquetas @user`
	}
exports.noReply = () => {
	return `\`\`\`[ x ]\`\`\` El mensaje al que respondió no contenía una respuesta`
	}
exports.changeNmGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Cambio exitoso de nombre de grupo`
	}
exports.changeDeskGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Escritorio de grupo cambiado con éxito`
	}
exports.spam = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Ejemplo ${prefix + command} texto|Monto`
	}
exports.tahta = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Ejemplo ${prefix + command} zeeone|ofc`
	}
exports.noteks = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Ejemplo ${prefix + command} zeeone`
	}
exports.botNotAdm = () => {
	return `\`\`\`[ x ]\`\`\` Hacer bot como administrador para usar este comando `
	}
exports.tryAgain = () => {
	return `\`\`\`[ x ]\`\`\` Falló, inténtalo de nuevo  ^_^`
	}
exports.anlinOn = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antienlace activado`
	}
exports.anlinOff = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antienlace desactivado`
	}
exports.notregis = (prefix, sender) => {
	return `\`\`\`[ x ]\`\`\` Hola @${sender.split("@")[0]} no está registrado en la base de datos, por favor escriba ${prefix}verify\n\nTambién puede registrarse enviando un código de verificación desde la API web\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `\`\`\`[ x ]\`\`\` Hola ${pushname} ya estás registrado en la base de datos`
	}
exports.enNum = () => {
 return `\`\`\`[ x ]\`\`\` Ingrese los números correctamente`
 }
exports.adminGc = () => {
 return `Como eres administrador, el bot no cerrará tu sesión`
 }
 exports.izinDt = () => {
 return `Permiso aceptado`
 }
 exports.anjawaOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Activado con éxito`
	}
exports.anjawaOff = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Desactivado con éxito`
	}
exports.anjawaUdhOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} previamente activado`
	}
exports.nsfwmo= (command) => {
	return `La función nsfw no se ha activado, comuníquese con el propietario del bot para activarla`
	}
exports.anjawaUdhOon = (command) => {
	return `Elija 1 para habilitar, 0 para deshabilitar`
	}
exports.erorCode = () => {
 return `El código que ingresó es incorrecto, verifique nuevamente\nhttps://api-alphabot.herokuapp.com/api/verification`
 }