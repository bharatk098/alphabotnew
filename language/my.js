exports.wait = () => {
	return `\`\`\`[ ! ] Dalam proses...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` Selesai...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Kejayaan Siaran`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` Format yang tidak betul`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` Itu bukan pelekat`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` Balas / tandakan pelekat`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` Pautan ralat`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` Khas Kumpulan`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` Bot Pemilik Khas`
	}
exports.benned = () => {
	return `\`\`\`[ x ]\`\`\` Maaf, Kamu nomor anda di blokir`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` Khusus Admin grup`
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
	return `\`\`\`[ x ]\`\`\` Penggunaan ${prefix + command} teks|jumlah`
	}
exports.botNotAdm = () => {
	return `\`\`\`[ x ]\`\`\` Jadikan bot sebagai admin u/ melakukan perintah ini`
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
	return `\`\`\`[ x ]\`\`\` Hai @${sender.split("@")[0]} kamu belum terdaftar di database, silahkan ketik ${prefix}verify`
	}
exports.enNum = () => {
 return `\`\`\`[ x ]\`\`\`Masukan Angka Dengan Benar`
 }
exports.adminGc = () => {
 return `Karena lu adalah jadi bot gk bakal kick lu`
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
	return `\`\`\`[ ✓ ]\`\`\` ${command} udah on`
	}
exports.anjawaUdhOon = (command) => {
	return `Pilih 1 untuk mengaktifkan, 0 untuk menonaktifkan`
	}