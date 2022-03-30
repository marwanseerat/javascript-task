"use strict";
let text = document.getElementById("dv1");


function changefontfamily() {
    let text = document.getElementById("dv1");
    let font = document.getElementById("font_family");
    text.style.fontFamily =font.value;
}

function changefontsize() {
    let text = document.getElementById("dv1");
    let sizeee = document.getElementById("font_size");
    text.style.fontSize = sizeee.value;
}

function changeitalic () {
    let text = document.getElementById("dv1");
    let gg = document.getElementById("italic");
    text.style.fontStyle =(gg ? "italic" : "normal");
}

function changebold() {
    let text = document.getElementById("dv1");
    let bold_ = document.getElementById("bold");
    text.style.fontWeight = (bold_ ? "bold" : "normal");
    
}

function changeunderline() {
    let text = document.getElementById("dv1");
    let underline_ = document.getElementById("underline");
    text.style.textDecoration = ( underline_? "underline" : "none");

}

