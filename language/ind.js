exports.wait = () => {
	return `\`\`\`[ ! ] Proses kak...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` Selesai...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Sukses Broadcast`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` Format salah, coba liat lagi di menu`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` Itu bukan stiker`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` Reply/tag stiker nya`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` Linknya error`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` Khusus Group`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` Khusus Owner Bot`
	}
exports.benned = () => {
	return `\`\`\`[ x ]\`\`\` Maaf, nomor kamu telah di blokir`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` Khusus Admin grup`
	}
exports.cariCecan = () => {
	return `\`\`\`[ ! ]\`\`\` Mencari cecan`
	}
exports.cariCogan = () => {
	return `\`\`\`[ ! ]\`\`\` Mencari cogan`
	}
exports.pesanBot = () => {
	return `\`\`\`[ x ]\`\`\` Reply pesan botnya`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` Reply fotonya`
	}
exports.tagUser = () => {
	return `\`\`\`[ x ]\`\`\` Tag @user`
	}
exports.noReply = () => {
	return `\`\`\`[ x ]\`\`\` Pesan yang kamu reply tidak mengandung reply`
	}
exports.changeNmGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Sukses  Mengubah Nama Grup`
	}
exports.changeDeskGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Sukses  Mengubah Desk Grup`
	}
exports.spam = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Exampke ${prefix + command} teks|jumlah`
	}
exports.tahta = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Example ${prefix + command} zeeone|ofc`
	}
exports.noteks = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Example ${prefix + command} zeeone`
	}
exports.botNotAdm = () => {
	return `\`\`\`[ x ]\`\`\` Jadikan bot sebagai admin u/ menggunakan perintah ini`
	}
exports.tryAgain = () => {
	return `\`\`\`[ x ]\`\`\` Yah gagal, coba ulangi ^_^`
	}
exports.anlinOn = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink Di Aktifkan`
	}
exports.anlinOff = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink Di Nonaktifkan`
	}
exports.notregis = (prefix, sender) => {
	return `Hai @${sender.split("@")[0]} kamu belum terdaftar di database, silahkan ketik ${prefix}verify\n\nKamu juga bisa daftar dengan cara mengirimkan kode verifikasi dari web api\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `Hai ${pushname} kamu sudah terdaftar di database`
	}
exports.enNum = () => {
 return `\`\`\`[ x ]\`\`\`Masukan Angka Dengan Benar`
 }
exports.adminGc = () => {
 return `Karena lu adalah admin jadi bot gk bakal kick lu`
 }
 exports.izinDt = () => {
 return `Izin diterima`
 }
 exports.anjawaOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Di Aktifkan`
	}
exports.anjawaOff = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Di Nonaktifkan`
	}
exports.anjawaUdhOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} sudah aktif`
	}
exports.anjawaUdhOon = (command) => {
	return `Pilih 1 untuk mengaktifkan, 0 untuk menonaktifkan`
	}
exports.gcOpen = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Berhasil membuka grup`
	}
exports.gcClose = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Berhasil Menutup grup`
	}
exports.nsfwmo= (command) => {
	return `Fitur nsfw belum di aktifkan, hubungi owner bot u/ mengaktifkan`
	}
exports.erorCode = () => {
 return `Kode yang anda masukkan salah silahkan cek kembali\nhttps://api-alphabot.herokuapp.com/api/verification`
 }