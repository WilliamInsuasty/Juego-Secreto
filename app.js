let numeroSecreto = 0;
let intentos = 0;
//Objetivo de la lista es para alamcenar los numeros que van saliendo y si han salido que no se repita
let ListaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'Vez' : 'Veces'}` );
        //vamos activar el boton nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');    
        }
        intentos++;
        limpiarCaja();
 
    }    
    return;
}

function condicionesDeInicio(){
    // Titulo del HTML
    asignarTextoElemento('h1','Juego del número secreto!');
    // Mensaje del HTML
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //Generamos nuevo numero secreto sin defini la variable osea sin el let porque ya esta definida arriba
    numeroSecreto = generarNumeroSecreto();
    //Reiniciamos los intentos
    intentos = 1;
}

function limpiarCaja (){
   
    document.querySelector('#valorUsuario').value='';
     //tambien se puede de la forma que esta en la linea anterior unificando todo y evitando crear variables
}
    // let valorCaja = document.querySelector('#valorUsuario').value='';
    // valorCaja.value = '';
    
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (ListaNumerosSorteados);
    // preguntamos a la funcion si ya sorteamos todos los numeros
    if (ListaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        // si el numero generado esta incluido en la lista     
        if (ListaNumerosSorteados.includes(numeroGenerado)){
            //aquí esta la recursividad llamamos a la funciona dentro de la misma funcion
            return generarNumeroSecreto();
        }else {
            ListaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function reiniciarJuego (){
    //Limpiar caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //Generar el númoer aleatorio
    //Inicializar intentos
    condicionesDeInicio();
    //Deshabiitar Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesDeInicio();