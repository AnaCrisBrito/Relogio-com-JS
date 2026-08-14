function carregar(){
    var horas = document.getElementById('horas')
    var m = document.getElementById('minutos')
    var s = document.getElementById('segundos')

    var data = new Date()
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var seg = data.getSeconds();

    horas.innerHTML = hora
    m.innerHTML = minutos
    s.innerHTML = seg    
}

setInterval(carregar, 1000);