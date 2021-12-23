const entrada = document.querySelector(".entrada__input");
const btn_leer = document.querySelector(".btn-leer");
const btn_grabar = document.querySelector(".btn-grabar");
const salida_contenido = document.querySelector("#salida-contenido");

const reconocimiento_voz = window.SpeechRecognition || window.webkitSpeechRecognition;
const reconocimiento = new reconocimiento_voz();
reconocimiento.lang = "es";

/* lectura del texto  */
btn_leer.addEventListener("click", () => {
    const locutor = new SpeechSynthesisUtterance();
    const voz = window.speechSynthesis;
    locutor.text = entrada.value;
    voz.speak(locutor);
})


/* reconocimiento de voz */
reconocimiento.onstart = () => {
    salida_contenido.innerHTML = "Estamos grabando la voz";
}

reconocimiento.onresult = (e) => {
    /* console.log(e);
    console.log(e.results[0][0].transcript); */

    let arreglo_palabras = e.results[0][0].transcript.split(" ");

    //console.log(arreglo_palabras);

    if (arreglo_palabras.includes("oscuro")) {
        document.body.style = "background-color: black;";
        document.querySelector("p").style = "color: white;";
    } else {
        console.log("NO dijiste oscuro");
    }

    salida_contenido.innerHTML = e.results[0][0].transcript;

    // para que repita la voz
    //leer(e.results[0][0].transcript);


    // decir algo de a cuerdo a alguna condición
    /* const mensaje = e.results[0][0].transcript;
    const voz = new SpeechSynthesisUtterance;
    if (mensaje.includes("cosa")) {
        voz.text = "dijiste cosa";
    } else {
        voz.text = mensaje;
    } 
    window.speechSynthesis.speak(voz);
    */
}

/* const leer = (mensaje) => {
    const voz = new SpeechSynthesisUtterance();
    voz.text = mensaje;
    window.speechSynthesis.speak(voz);
} */

btn_grabar.addEventListener("click", () => {
    reconocimiento.start();
})