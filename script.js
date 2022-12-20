let cont1 = document.getElementById('cont1')
let cant1=0
let tiempo=20

let tiempo1 = setInterval(() => {
    cont1.textContent=cant1+=10

    if (cant1 === 10100){
        clearInterval(tiempo1)
    }
}, '${tiempo}');
