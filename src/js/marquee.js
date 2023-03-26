let text = "Web Developer";
let time = 300; 
let counter = 0;
let text_written = "";
let text_aux = "";

const write = () => {
    if (counter < text.length){
        text_written += text.charAt(counter);
        document.getElementById("text").innerHTML = text_written;
        counter++;
        setTimeout(write, time);
    } else {
        counter = 0;
        text_written = "";
        text_aux = text;
        setTimeout(deleteText, time);
    }
}
// const deleteText = () => {
//     if (counter < text.length){
//         text_written = text_aux.substring(0, text_aux.length - counter);
//         document.getElementById("text").innerHTML = text_written;
//         counter++;
//         setTimeout(deleteText, time);
//     } else {
//         counter = 0;
//         text_written = "";
//         setTimeout(write, time);
//     }
// }
//Se ejecuta la funcion 2 segundos despues de haberse cargado el DOM por completo:
window.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(write, 2000);
});
