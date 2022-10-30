let palabras =["ALURA","ESTUDIAR","ONE","HTML","PYTHON","PROGRAMA","REACT","ANGULAR"];
let tablero = document.getElementById("micanvas").getContext("2d");
let palabraSecreta = "";
let letras=[];
let letrasErrores=[];
let errores = 8;
let cantErrores=0;

let letrasEsperadas=new Set();
let letrasIngresadasCorrectamente=new Set();

function escojerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta=palabra;

    for(let i=0;i<palabra.length;i++){
        letrasEsperadas.add(palabra[i]);
    }
}

function comprobarLetra(key){
    let estado = false;
    if(key.charCodeAt()>=65 && key.charCodeAt()<=90  && (key.length==1)){
        letras.push(key);
        estado=true;

        return estado;
    }else{
        return estado;
    }
}

function anadirLetraIncorrecta(){
    errores -= 1;
}


function iniciarJuego(){
    document.getElementById("iniciar_juego").style.display="none";
    document.getElementById("juego").style.display="flex";
    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLineas();

    document.onkeydown = (e) =>{
        let letra= e.key.toUpperCase();

        if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
            if(cantErrores<6){
            for(let i=0;i<palabraSecreta.length;i++){
                if(palabraSecreta[i]===letra){
                    escribirLetraCorrecta(i);
                    letrasIngresadasCorrectamente.add(letra);
                }
            }
            }
            ganaste();
        }else{
            if(letra.charCodeAt()>=65 && letra.charCodeAt()<=90 && (letra.length==1) && cantErrores<6 &&(letrasIngresadasCorrectamente.size!=letrasEsperadas.size)){
            if(letrasErrores.includes(letra)==false){
            letrasErrores.push(letra);
            anadirLetraIncorrecta();
            escribirLetraIncorrecta(letra,errores);
            cantErrores+=1;
            dibujarPersona();
            }
            }
            perdiste();
        
        }        
    }
} 

function resetCanvas() {
    tablero.clearRect(0, 0, 1200,860);
}

function nuevoJuego(){
palabraSecreta = "";
letras=[];
letrasErrores=[];
errores = 8;
cantErrores=0;
letrasEsperadas.clear();
letrasIngresadasCorrectamente.clear();
resetCanvas();
iniciarJuego();
}

function salir(){
    location.reload();
}

function agregarPalabra(){
    document.getElementById("popup").style.display="flex";
}

function cerrarPopUp(){
    document.getElementById("popup").style.display="none";
}

function guardarPalabra(){
    const alerta1 = new bootstrap.Toast(document.getElementById('liveToast1'));
    const alerta2 = new bootstrap.Toast(document.getElementById('liveToast2'));

    let input =document.getElementById("palabraNueva");
    let palabra= input.value.toUpperCase();

    if (/[A-Z]/g.test(palabra) && palabra.length <= 8 && palabra.length > 2) {
        if(palabras.includes(palabra)==false){
        palabras.push(palabra);
        input.value="";
        cerrarPopUp();
        }else{
            alerta2.show();
        }
    } else {
        alerta1.show();
        input.value = "";
    }
    
}

function ganaste(){
    if(letrasIngresadasCorrectamente.size==letrasEsperadas.size){
    document.getElementById('ganador').style.display = 'flex';
    }
}

function perdiste(){
    if(cantErrores==6){
    let mensaje =document.getElementById('palabraSecreta');
    document.getElementById('perdedor').style.display = 'flex';
    mensaje.innerHTML = "La palabra era: " + palabraSecreta;
    }
}

function cerrarAviso(){
    nuevoJuego();
    document.getElementById('perdedor').style.display = 'none';
    document.getElementById('ganador').style.display = 'none';
}