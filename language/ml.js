/*
   *
     If you find an error in writing a word / sentence please contact me
   *
*/
exports.wait = () => {
	return `\`\`\`[ ! ] പ്രക്രിയയിൽ...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` പൂർത്തിയായി...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` പ്രക്ഷേപണ വിജയം`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` തെറ്റായ ഫോർമാറ്റ്`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` അതൊരു സ്റ്റിക്കറല്ല`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` സ്റ്റിക്കർ മറുപടി/ടാഗ് ചെയ്യുക`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` അസാധുവായ ലിങ്ക്`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` ഗ്രൂപ്പ് സ്പെഷ്യൽ`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` പ്രത്യേക ഉടമ ബോട്ട്`
	}
exports.benned = () => {
	return `\`\`\`[ x ]\`\`\` ക്ഷമിക്കണം, നിങ്ങളുടെ നമ്പർ തടഞ്ഞു`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` ഗ്രൂപ്പ് അഡ്മിൻ മാത്രം`
	}
exports.pesanBot = () => {
	return `\`\`\`[ x ]\`\`\` ബോട്ട് സന്ദേശത്തിന് മറുപടി നൽകുക`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` ഫോട്ടോയ്ക്ക് മറുപടി നൽകുക`
	}
exports.tagUser = () => {
	return `\`\`\`[ x ]\`\`\` ടാഗുകൾ @user`
	}
exports.noReply = () => {
	return `\`\`\`[ x ]\`\`\` നിങ്ങൾ മറുപടി നൽകിയ സന്ദേശത്തിൽ ഒരു മറുപടി അടങ്ങിയിട്ടില്ല`
	}
exports.changeNmGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` ഗ്രൂപ്പിന്റെ പേരിന്റെ വിജയകരമായ മാറ്റം`
	}
exports.changeDeskGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` ഗ്രൂപ്പ് ഡെസ്ക് വിജയകരമായി മാറ്റി`
	}
exports.spam = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` ഉദാഹരണം ${prefix + command} ടെക്സ്റ്റ് | തുക`
	}
exports.noteks = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` ഉദാഹരണം ${prefix + command} zeeone`
	}
exports.tahta = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` ഉദാഹരണം ${prefix + command} zeeone|ofc`
	}
exports.botNotAdm = () => {
	return `\`\`\`[ x ]\`\`\` ഈ കമാൻഡ് ഉപയോഗിക്കുന്നതിന് ബോട്ട് അഡ്മിൻ ആക്കുക`
	}
exports.tryAgain = () => {
	return `\`\`\`[ x ]\`\`\`  പരാജയപ്പെട്ടു, വീണ്ടും ശ്രമിക്കുക ^_^`
	}
exports.anlinOn = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink സജീവമാക്കി`
	}
exports.anlinOff = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink അപ്രാപ്തമാക്കി`
	}
exports.notregis = (prefix, sender) => {
	return `\`\`\`[ x ]\`\`\` ഹായ് @${sender.split("@")[0]} നിങ്ങൾ ഡാറ്റാബേസിൽ രജിസ്റ്റർ ചെയ്തിട്ടില്ല, ദയവായി ടൈപ്പ് ചെയ്യുക ${prefix}verify\n\nവെബ് എപിഐയിൽ നിന്ന് ഒരു പരിശോധനാ കോഡ് അയച്ചും നിങ്ങൾക്ക് രജിസ്റ്റർ ചെയ്യാം\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `\`\`\`[ x ]\`\`\` ഹായ് ${pushname} നിങ്ങൾ ഇതിനകം ഡാറ്റാബേസിൽ രജിസ്റ്റർ ചെയ്തിട്ടുണ്ട്`
	}
exports.enNum = () => {
 return `\`\`\`[ x ]\`\`\` നമ്പറുകൾ ശരിയായി നൽകുക`
 }
exports.adminGc = () => {
 return `നിങ്ങൾ ഒരു അഡ്മിൻ ആയതിനാൽ, ബോട്ട് നിങ്ങളെ ലോഗ് willട്ട് ചെയ്യില്ല`
 }
 exports.izinDt = () => {
 return `അനുമതി സ്വീകരിച്ചു`
 }
 exports.anjawaOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} വിജയകരമായി സജീവമാക്കി`
	}
exports.anjawaOff = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} വിജയകരമായി നിർജ്ജീവമാക്കി`
	}
exports.anjawaUdhOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} മുമ്പ് സജീവമാക്കിയിട്ടുണ്ട്`
	}
exports.anjawaUdhOon = (command) => {
	return `പ്രവർത്തനക്ഷമമാക്കാൻ 1, പ്രവർത്തനരഹിതമാക്കാൻ 0 തിരഞ്ഞെടുക്കുക`
	}
exports.erorCode = () => {
 return `നിങ്ങൾ നൽകിയ കോഡ് തെറ്റാണ്, വീണ്ടും പരിശോധിക്കുക\nhttps://api-alphabot.herokuapp.com/api/verification`
 }