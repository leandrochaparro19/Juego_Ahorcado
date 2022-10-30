function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin="round";
    tablero.fillStyle="#ffffff00";
    tablero.strokeStyle="#f9f3f3";
    
    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(350, 550);
    tablero.lineTo(700, 550);
    tablero.moveTo(450, 550);
    tablero.lineTo(450, 10);
    tablero.lineTo(640, 10);
    tablero.lineTo(640, 50);
    tablero.stroke();
}

function dibujarLineas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin="round";
    tablero.fillStyle="#ffffff00";
    tablero.strokeStyle="#f9f3f3";

    let anchura = 600/palabraSecreta.length;
    for(let i = 0; i<palabraSecreta.length;i++){
        tablero.moveTo(350 + (anchura*i),690);
        tablero.lineTo(400 + (anchura*i),690);
    }

    tablero.stroke();
    tablero.closePath();

}

function escribirLetraCorrecta(index){
    tablero.font='bold 63px Inter';
    tablero.lineWidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle="#F3F5F6";

    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],355 + (anchura*index),670);
    tablero.stroke();
}

function escribirLetraIncorrecta(letra,errorLeft){
    tablero.font='bold 40px Inter';
    tablero.lineWidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle="#F3F5F6";

    tablero.fillText(letra,250 + (40*(10-errorLeft)),770,40);

}

function dibujarPersona(){

    switch(cantErrores){
        case 1://cabeza
            tablero.beginPath();
            tablero.arc(640, 100, 45, 0, 2*Math.PI);
            tablero.stroke();
            tablero.closePath();
            break;
        case 2://cuerpo
            tablero.beginPath();
            tablero.moveTo(640, 145);
            tablero.lineTo(640, 330);
            tablero.stroke();
            tablero.closePath();
            break;
        case 3://brazo
            tablero.beginPath();
            tablero.moveTo(640, 145);
            tablero.lineTo(590, 270);
            tablero.stroke();
            tablero.closePath();
            break;
        case 4://brazo
            tablero.beginPath();
            tablero.moveTo(640, 145);
            tablero.lineTo(690, 270);
            tablero.stroke();
            tablero.closePath();
            break;
        case 5://pierna
            tablero.beginPath();
            tablero.moveTo(640, 330);
            tablero.lineTo(600, 470);
            tablero.stroke();
            tablero.closePath();
            break;
        case 6://pierna
            tablero.beginPath();
            tablero.moveTo(640, 330);
            tablero.lineTo(680, 470);
            tablero.stroke();
            tablero.closePath();
            break;
        default:
            console.log("perdiste");
    }
}

