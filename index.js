let saveEl = document.getElementById("savage")
let countId = document.getElementById("count-el")

let count = 0
function increment(){
    count = count + 1
    countId.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countId.textContent = 0 
    count = 0
}
// saveEl.style.color = 'red'