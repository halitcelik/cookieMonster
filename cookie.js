const cookies = document.cookie;
let box = document.createElement("div");
if (cookies !== '') {
    let splitted = cookies.split(";");
    for(let i = 0, length1 = splitted.length; i < length1; i++){
        let p = document.createElement("p");
        p.textContent = splitted[i]
        box.appendChild(p)
    }
    box.style.position = "absolute"
    box.style.top = "0"
    box.style.right = "0"
    box.style.backgroundColor = "lightgreen"
    box.style.zIndex = "1000000"
    document.body.appendChild(box);
}

