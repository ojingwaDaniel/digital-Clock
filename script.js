let tens = 00; 
let seconds = 00; 
let minutes = 00
  let appendTens = document.getElementById("tens")
  let appendSeconds = document.getElementById("seconds")
  let appendMinutes = document.getElementById('minutes')
  let buttonStart = document.getElementById('button-start');
  let buttonStop = document.getElementById('button-stop');
  let buttonReset = document.getElementById('button-reset');
  let storage;
  function startTime(){
    tens++
    if (tens<= 9) {
        appendTens.innerHTML = '0' + tens
    }
    if (tens > 9) {
        appendTens.innerHTML = tens
        
    }
    if (tens > 99) {
        seconds++

        appendSeconds.innerHTML = '0' + seconds
        tens = 0
        appendTens.innerHTML= '0' + tens
        
    }
    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
    
    }
    if (seconds > 59) {
        minutes++
        appendMinutes.innerHTML = "0" + minutes
        seconds = 0
        tens = 0
        appendSeconds.innerHTML = "0" + seconds
        appendTens.innerHTML = " 0 " + tens


        
    }
    if (minutes > 9) {
        appendMinutes.innerHTML = minutes
        
    }
    
    
  }
buttonStart.onclick = function(){
    clearInterval(storage)
    storage = setInterval(startTime,10)
   
}
buttonStop.onclick = function(){
    clearInterval(storage)
}
buttonReset.onclick = function(){
    clearInterval(storage)
    appendSeconds.innerHTML = '00'
    appendTens.innerHTML = '00'
    appendMinutes.innerHTML = '00'
    
}