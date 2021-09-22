exports.wait = () => {
	return `\`\`\`[ ! ] Em processo...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` Finalizado...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Sucesso na transmissão`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` Formato incorreto`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` Isso não é um adesivo`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` Responder / marcar o adesivo`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` Link inválido`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` Especial de Grupo`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` Proprietário Especial Bot`
	}
exports.benned = () => {
	return `\`\`\`[ x ]\`\`\` Desculpe, seu número foi bloqueado`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` Apenas administrador de grupo`
	}
exports.pesanBot = () => {
	return `\`\`\`[ x ]\`\`\` Responder a mensagens de bot`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` resposta com foto`
	}
exports.tagUser = () => {
	return `\`\`\`[ x ]\`\`\` Bandeira @user`
	}
exports.noReply = () => {
	return `\`\`\`[ x ]\`\`\` A mensagem que você respondeu não continha uma resposta`
	}
exports.changeNmGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Mudança bem-sucedida do nome do grupo`
	}
exports.changeDeskGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Mesa de grupo alterada com sucesso`
	}
exports.spam = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Usar ${prefix + command} texto|quantia`
	}
exports.tahta = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Usar ${prefix + command} zeeone|ofc`
	}
exports.noteks = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Usar ${prefix + command} zeeone`
	}
exports.botNotAdm = () => {
	return `\`\`\`[ x ]\`\`\` Faça bot como administrador para usar este comando`
	}
exports.tryAgain = () => {
	return `\`\`\`[ x ]\`\`\` Falha, tente novamente ^_^`
	}
exports.anlinOn = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink ativado`
	}
exports.anlinOff = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink desativado`
	}
exports.notregis = (prefix, sender) => {
	return `\`\`\`[ x ]\`\`\` Oi @${sender.split("@")[0]} você não está registrado no banco de dados, por favor digite ${prefix}verify\n\nVocê também pode se registrar enviando um código de verificação da API da web\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `\`\`\`[ x ]\`\`\` Oi ${pushname} voce ja esta cadastrado no banco de dados`
	}
exports.enNum = () => {
 return `\`\`\`[ x ]\`\`\` Digite os números corretamente`
 }
exports.adminGc = () => {
 return `Porque você é um administrador, o bot não irá desconectá-lo`
 }
 exports.izinDt = () => {
 return `Permissão aceita`
 }
 exports.anjawaOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Ativado com sucesso`
	}
exports.anjawaOff = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Desativar com sucesso `
	}
exports.anjawaUdhOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Já foi ativado antes`
	}
exports.anjawaUdhOon = (command) => {
	return `Escolha 1 para ativar, 0 para desativar`
	}
exports.erorCode = () => {
 return `O código que você digitou está errado, por favor, verifique novamente\nhttps://api-alphabot.herokuapp.com/api/verification`
 }