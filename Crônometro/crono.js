var segundo = 00
var minuto = 00
var crono;
var tempo = 100

function iniciar (){
    crono = setInterval(() => { contador(); }, tempo)
    document.querySelector('#bot_start').removeEventListener('click', iniciar)
}
function parar (){
    clearInterval(crono)
    document.querySelector('#bot_start').removeEventListener('click', iniciar)
}
function reset (){
    clearInterval(crono)
    segundo = 00
    minuto = 00
    document.getElementById('contador').innerText = '00:00'
    document.querySelector('#bot_start').removeEventListener('click', iniciar)
}
function contador(){
    segundo++
    if (segundo == 60) {
        segundo = 0
        minuto++
    } if (minuto == 60) {
        minuto = 0
    }
    var formato = (minuto < 10 ? '0'+ minuto : minuto) + ':' + (segundo < 10 ?  '0' + segundo : segundo)
        document.getElementById('contador').innerText = formato     
}