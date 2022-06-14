
const minutes = document.querySelector('.min')
const seconds = document.querySelector('.sec')
const dSeconds = document.querySelector('.msec')


const stopWatch = ()=>{
    let dSec = parseInt(dSeconds.textContent++)
    if (dSec === 99){
        dSeconds.textContent = 00
        let sec = parseInt(seconds.textContent++)
        if(sec === 59){
            seconds.textContent = 00;
            let min  = parseInt(minutes.textContent++)
            
        }
    }
  

}

//  section BTN

const startBtn = document.querySelector('.btn-1');
const stopBtn = document.querySelector('.btn-2');
const resetBtn = document.querySelector('.btn-3');


startBtn.addEventListener('click',()=>{
    const startStopWatch = setInterval(stopWatch,10)
    console.log('strat counter')

    
    stopBtn.addEventListener('click',()=>{
    
    
        clearTimeout(startStopWatch)
    
        console.log('stop counter')
    })

    resetBtn.addEventListener('click',()=>{
        clearTimeout(startStopWatch)
        minutes.textContent = '00';
        seconds.textContent = '00';
        dSeconds.textContent = '00';
        console.log(dSeconds.textContent)
        
        console.log('reset counter')
    })
})


