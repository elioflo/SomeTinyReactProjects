window.onload = () =>{ 
    let cronometro = document.getElementById('cronometro')
    let btnIniciar = document.getElementById('iniciar')
    let btnAlto = document.getElementById('alto')
    let btnReiniciar = document.getElementById('reiniciar')

    let procesoId = undefined
    let segundos = 0

    const formato = (n) => n<10?`0${n}`:n 
    
    const iniciar = () => {
        if(!procesoId){
            procesoId = window.setInterval(()=>{
                segundos++
                cronometro.innerText = `${formato(Math.floor(segundos/60))}:${formato(segundos%60)}`
            },100)
        }
    }

    const alto = () => {
        window.clearInterval(procesoId)
        procesoId = undefined
    }

    const reiniciar = () => {
        segundos = 0
        cronometro.innerText = `${formato(Math.floor(segundos/60))}:${formato(segundos%60)}`
    }

    btnIniciar.addEventListener('click',iniciar)
    btnAlto.addEventListener('click',alto)
    btnReiniciar.addEventListener('click',reiniciar)
    cronometro.innerText = `${formato(Math.floor(segundos/60))}:${formato(segundos%60)}`
}