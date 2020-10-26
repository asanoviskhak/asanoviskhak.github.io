
var txt = {
    "hello": "",
    "welcome": '',
    "portfolio": "If you want to see my works, please go to Portfolio ...",
    "contact": "And if you want to contact me, just go to Contact page",
    "enjoy":"Follow me on social pages below ;)"
}
var i = 0; 
var i2 = 0, i3=0, i4=0;
var b=false, c=false;

function typeWriter(speed=75) {
    if (i < txt["hello"].length) {
        document.getElementById("main_title").innerHTML += txt["hello"].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function clear(){
    document.getElementById("main_title").innerHTML = " ";
}

function typeWriter2(speed=75) {
    if (i2 < txt["welcome"].length) {
        document.getElementById("main_title").innerHTML += txt["welcome"].charAt(i2);
        i2++;
        setTimeout(typeWriter2, speed);
    }
}

function typeWriter3(speed=50) {
    if (!b){
        document.getElementById("main_title").classList.add("smaller");
        b=true;
    }
    if (i3 < txt["portfolio"].length) {
        document.getElementById("main_title").innerHTML += txt["portfolio"].charAt(i3);
        i3++;
        setTimeout(typeWriter3, speed);
    }
}

function typeWriter4(speed=50) {
    if (!b){
        document.getElementById("main_title").classList.add("smaller");
        b=true;
    }
    if (!c){
        document.getElementById("main_title").innerHTML +="<br />";
        document.getElementById("main_title").innerHTML +="<br />";
        c=true;
    }
    if (i4 < txt["contact"].length) {
        document.getElementById("main_title").innerHTML += txt["contact"].charAt(i4);
        i4++;
        setTimeout(typeWriter4, speed);
    }
}
function typeWriter5() {
    document.getElementById("main_title").innerHTML = txt["enjoy"];
}

function start(){
    setTimeout(typeWriter, 1500);
    setTimeout(clear, 4500);
    setTimeout(typeWriter2, 5500);
    setTimeout(clear, 10500);
    setTimeout(typeWriter3, 11500);
    setTimeout(typeWriter4, 15500);
    setTimeout(typeWriter5, 20500);
}
start();



