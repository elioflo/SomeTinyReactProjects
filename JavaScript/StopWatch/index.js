window.onload = () =>{ 
    let cronometro = document.getElementById('cronometro')
    let btnIniciar = document.getElementById('iniciar')
    let btnAlto = document.getElementById('alto')
    let btnReiniciar = document.getElementById('reiniciar')
    let processId
    let segundos = 0
    const formato = (n) => n<10?`0${n}`:n 
    const iniciar = () => {
        if(!processId){
            console.log('iniciar');
            processId = window.setInterval(()=>{
                cronometro.innerText = `${formato(Math.floor(segundos/60))}:${formato(segundos%60)}`
                segundos++  
                console.log(segundos);
            },100)
        }
    }

    const alto = () => {
        window.clearInterval(processId)
        processId = undefined
    }

    btnIniciar.addEventListener('click',iniciar)
    btnAlto.addEventListener('click',alto)
}