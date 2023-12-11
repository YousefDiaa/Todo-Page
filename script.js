let input = document.getElementById("in")
let btn = document.getElementById("btn")
let bcon = document.getElementById("tt")
let error = document.getElementById("error")
let i = 1
let conol = document.createElement("ol");
btn.addEventListener("click", function test() {
    console.log(i);
    if (input.value == ""){
        
        error.innerText = "Error"
        error.style.color = "blue"
    }
    else{
        error.innerText = ""
    
    
    let condiv = document.createElement("div")
    let con = document.createElement("li")
    let con2 = document.createElement("span")
    
    let text = document.createElement("p")
    let del = document.createElement("img")
    let done = document.createElement("img")
    let line = document.createElement("hr")
    line.style.borderBlockColor = "gold"
    del.src = "gridicons_cross-small (3).svg"
    done.src = "check.png"
    text.innerText = input.value
    let english = /\b[A-Za-z]+\b/
    let arabic = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]+/
    if (english.test(input.value)) {
        condiv.style.direction = "ltr"

    }
    else if (arabic.test(input.value)) {
        condiv.style.direction = "rtl"
        }
    con2.style.display = "inline"
    text.style.display = "inline"
    con.appendChild(text)
    con2.appendChild(done)
    con2.appendChild(del)
    
    

    condiv.classList = "test"
    condiv.appendChild(con)
    conol.appendChild(condiv)
    bcon.appendChild(conol)
    conol.appendChild(line)
    input.value = ""
    condiv.appendChild(con2);
    text.addEventListener("dblclick", function () {
        let newin = document.createElement("input")
        newin.value = text.innerText
        con.replaceChild(newin, text)
        newin.addEventListener("change", function () {
            text.innerText = newin.value
            con.replaceChild(text, newin)
        })
    })
    del.addEventListener("click", function () {
        
        conol.removeChild(condiv)
        conol.removeChild(line)


    })
    done.addEventListener("click", function () {
        text.style.textDecoration = "line-through"
    })
    }
})






