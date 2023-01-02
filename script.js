let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

const increment = () => {
    count = count + 1
    countEl.textContent = count
}

const save = () => {
    let saveStr = count + " - "
    saveEl.textContent += saveStr
    countEl.textContent = 0
    count = 0
}
