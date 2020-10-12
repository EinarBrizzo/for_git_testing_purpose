function sumAll (...args) {
    let result = 0
    for (let i of args) {
        result += i
    }
    return result
}

alert(sumAll(19, 23, 21, 1, 99))