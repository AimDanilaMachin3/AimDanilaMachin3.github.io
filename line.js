let line = "Добро пожаловать на мою домашнюю страничку!"
let speed = 200
let i = 0
function m_line() {
if (i++<line.length) {
document.form.ctc.value = line.substring(0, i)
} else {
document.form.ctc.value = " "
i = 0
}
setTimeout('m_line()', speed)
}
