let saveEl = document.getElementById("savage")
let countId = document.getElementById("count-el")

let count = 0
function increment(){
    count = count + 1
    countId.innerHTML = count
}

function save(){
    let countStr = count + " - "

    saveEl += countStr
    console.log(count)
}
// saveEl.style.color = 'red'