exports.wait = () => {
	return `\`\`\`[ ! ] В процессе...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` Законченный...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Успешная трансляция`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` Неправильный формат`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` Это не наклейка`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` Ответить / отметить стикер`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` Неправильная ссылка`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` Специальная группа`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` Специальный бот-владелец`
	}
exports.benned = () => {
	return `\`\`\`[ x ]\`\`\` Извините, ваш номер заблокирован`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` Только администратор группы`
	}
exports.pesanBot = () => {
	return `\`\`\`[ x ]\`\`\` Ответить на сообщения бота`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` фото ответ`
	}
exports.tagUser = () => {
	return `\`\`\`[ x ]\`\`\` Теги  @user`
	}
exports.noReply = () => {
	return `\`\`\`[ x ]\`\`\` Сообщение, на которое вы ответили, не содержало ответа`
	}
exports.changeNmGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Успешное изменение названия группы`
	}
exports.changeDeskGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Успешно измененный групповой стол`
	}
exports.spam = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Пример ${prefix + command} текст|количество`
	}
exports.tahta = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Пример ${prefix + command} zeeone|ofc`
	}
exports.noteks = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Пример ${prefix + command} zeeone`
	}
exports.botNotAdm = () => {
	return `\`\`\`[ x ]\`\`\` Сделайте бота администратором, чтобы использовать эту команду`
	}
exports.tryAgain = () => {
	return `\`\`\`[ x ]\`\`\` Ошибка, попробуйте еще раз ^_^`
	}
exports.anlinOn = () => {
	return `\`\`\`[ ✓ ]\`\`\` Антилинк активирован`
	}
exports.anlinOff = () => {
	return `\`\`\`[ ✓ ]\`\`\` Антиссылка отключена`
	}
exports.notregis = (prefix, sender) => {
	return `\`\`\`[ x ]\`\`\` Привет @${sender.split("@")[0]} вы не зарегистрированы в базе данных, пожалуйста, введите ${prefix}verify\n\nВы также можете зарегистрироваться, отправив проверочный код из веб-API.\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `\`\`\`[ x ]\`\`\` Привет ${pushname} вы уже зарегистрированы в базе`
	}
exports.enNum = () => {
 return `\`\`\`[ x ]\`\`\` Вводите числа правильно`
 }
exports.adminGc = () => {
 return `Поскольку вы являетесь администратором, бот не выйдет из системы`
 }
 exports.izinDt = () => {
 return `Разрешение принято`
 }
 exports.anjawaOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command}  Успешно активирован`
	}
exports.anjawaOff = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Успешно деактивирован`
	}
exports.anjawaUdhOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} ранее активированный`
	}
exports.anjawaUdhOon = (command) => {
	return `Выберите 1, чтобы включить, 0, чтобы отключить`
	}
exports.erorCode = () => {
 return `Вы ввели неверный код, пожалуйста, проверьте еще раз\nhttps://api-alphabot.herokuapp.com/api/verification`
 }