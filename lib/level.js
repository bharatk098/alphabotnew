const fs = require('fs') 
const _level = JSON.parse(fs.readFileSync('./nayla/level.json')) 
const getLevelingXp = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].xp
    }
}
const getLevelingLevel = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].level
    }
}
const getLevelingId = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].id
    }
}
const addLevelingXp = (userid, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].xp += amount
        fs.writeFileSync('./nayla/level.json', JSON.stringify(_level))
    }
}
const addLevelingLevel = (userid, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].level += amount
        fs.writeFileSync('./nayla/level.json', JSON.stringify(_level))
    }
}
const addLevelingId = (userid) => {
    const obj = {id: userid, xp: 1, level: 1}
    _level.push(obj)
    fs.writeFileSync('./nayla/level.json', JSON.stringify(_level))
}

module.exports = {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
}