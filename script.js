// Random Color when mouse over
let logo = document.getElementById('logo')
let colorMouseOver = () => {
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    logo.style.color = `rgb(${R}, ${G}, ${B})`
};
colorMouseOver();
logo.onmousemove = colorMouseOver;