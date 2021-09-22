// if there is a mistake in writing a sentence please let me know 🛐
exports.wait = () => {
	return `\`\`\`[ ! ] Wait a minute...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` Done...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Broadcast success`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` Wrong format, see instructions in menu`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` That's not a sticker`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` Reply/tag the sticker`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` Invalid link`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` Group special features`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` Special Owner Bot`
	}
exports.benned = () => {
	return `\`\`\`[ x ]\`\`\` Sorry, your number has been blocked`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` Group admin only`
	}
exports.pesanBot = () => {
	return `\`\`\`[ x ]\`\`\` Reply to the bot message`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` Reply photo`
	}
exports.tagUser = () => {
	return `\`\`\`[ x ]\`\`\` Tag @user`
	}
exports.noReply = () => {
	return `\`\`\`[ x ]\`\`\` The message you replied to did not contain a reply`
	}
exports.changeNmGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Successful Change of Group Namep`
	}
exports.changeDeskGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Successfully Changed Group Desk`
	}
exports.spam = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Example ${prefix + command} text|amount`
	}
exports.tahta = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Example ${prefix + command} zeeone|ofc`
	}
exports.noteks = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Example ${prefix + command} zeeone`
	}
exports.botNotAdm = () => {
	return `\`\`\`[ x ]\`\`\` Make bot as admin to use this command`
	}
exports.tryAgain = () => {
	return `\`\`\`[ x ]\`\`\` Well failed, try again ^_^`
	}
exports.anlinOn = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink Activated`
	}
exports.anlinOff = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink Disabled`
	}
exports.notregis = (prefix, sender) => {
	return `\`\`\`[ x ]\`\`\` Hello @${sender.split("@")[0]} you are not registered in the database, please type ${prefix}verify\n\nYou can also register by sending a verification code from web api\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `\`\`\`[ x ]\`\`\` Hello ${pushname} you are already registered in the database`
	}
exports.enNum = () => {
 return `\`\`\`[ x ]\`\`\` Enter Numbers Correctly `
 }
exports.adminGc = () => {
 return `Because you are admin a bot won't let you out `
 }
 exports.izinDt = () => {
 return `Permission accepted`
 }
 exports.anjawaOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} activated `
	}
exports.anjawaOff = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} disabled`
	}
exports.anjawaUdhOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} been active before`
	}
exports.anjawaUdhOon = (command) => {
	return `Choose 1 to enable, 0 to disable`
	}
exports.erorCode = () => {
 return `The code you entered is wrong, please check again\nhttps://api-alphabot.herokuapp.com/api/verification`
 }