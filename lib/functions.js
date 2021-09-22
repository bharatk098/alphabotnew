const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')

const wait = async (media) => new Promise(async (resolve, reject) => {
    const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
    const response = await fetch("https://trace.moe/api/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
    if (!response.ok) reject(`Gambar tidak ditemukan!`);
    const result = await response.json()
    try {
    	const { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
    	let belief = () => similarity < 0.89 ? "Saya memiliki keyakinan rendah dalam hal ini : " : ""
    	let ecch = () => is_adult ? "Iya" : "Tidak"
    	resolve({video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief()}
~> Ecchi : *${ecch()}*
~> Judul Jepang : *${title}*
~> Ejaan Judul : *${title_romaji}*
~> Judul Inggris : *${title_english}*
~> Episode : *${episode}*
~> Season  : *${season}*`});
	} catch (e) {
		console.log(e)
		reject(`Saya tidak tau ini anime apa`)
	}
})

const simih = async (text) => {
	try {
		const sami = await fetch(`https://simsumi.herokuapp.com/api?text=${text}`, {method: 'GET'})
		const res = await sami.json()
		return res.success
	} catch {
		return 'Simi ga tau apa yang anda ngomong, bahasa alien yah kak?'
	}
}

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}
var _0x1c17=["\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","\x68\x65\x78","\x69\x73\x41\x64\x6D\x69\x6E","\x6A\x69\x64","\x70\x75\x73\x68","","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\uD83D\uDD50\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E","\uD83D\uDD51\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E","\uD83D\uDD52\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E","\uD83D\uDD53\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E","\uD83D\uDD54\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E","\uD83D\uDD55\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E","\uD83D\uDD56\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E","\uD83D\uDD57\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E","\uD83D\uDD58\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E","\uD83D\uDD59\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E","\uD83D\uDD57\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E","\uD83D\uDD59\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E","\uD83D\uDD51\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E","\uD83D\uDD55\x20\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E"];const generateMessageID=()=>{return randomBytes(10).toString(_0x1c17[1])[_0x1c17[0]]()};const getGroupAdmins=(_0x4e36x3)=>{admins= [];for(let _0x4e36x4 of _0x4e36x3){_0x4e36x4[_0x1c17[2]]?admins[_0x1c17[4]](_0x4e36x4[_0x1c17[3]]):_0x1c17[5]};return admins};const getRandom=(_0x4e36x6)=>{return `${_0x1c17[5]}${Math[_0x1c17[7]](Math[_0x1c17[6]]()* 10000)}${_0x1c17[5]}${_0x4e36x6}${_0x1c17[5]}`};const spinner={"\x69\x6E\x74\x65\x72\x76\x61\x6C":120,"\x66\x72\x61\x6D\x65\x73":[_0x1c17[8],_0x1c17[9],_0x1c17[10],_0x1c17[11],_0x1c17[12],_0x1c17[13],_0x1c17[14],_0x1c17[15],_0x1c17[16],_0x1c17[17],_0x1c17[8],_0x1c17[10],_0x1c17[11],_0x1c17[13],_0x1c17[18],_0x1c17[19],_0x1c17[20],_0x1c17[21]]};let globalSpinner


const getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'black', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
	spins.add(id, {text: text})
	}
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

	}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

const banner = cfonts.render((`Botz - I O|by|zeeone`), {
    font: 'chrome',
    color: 'candy',
    align: 'center',
    gradient: ["red","yellow"],
    lineHeight: 3
  });
  
  
module.exports = { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close }
