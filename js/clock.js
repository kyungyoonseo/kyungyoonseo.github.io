const clock = document.querySelector("#clock");


function sayHello() {
    console.log("hello");
}


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText= `${hours}:${minutes}:${seconds}`
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}
new Date().getHours()
new Date().getMinutes()
new Date().getSeconds()

getClock()
setInterval(getClock,1000);