function clock(){
    let now = new Date()
    let hour = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let time = document.querySelector('.digitalClock')
    let  session = 'PM'
    if (hour >12 ) {
        hour = hour % 12 || 12
        session = 'PM'
    }else{
        session = 'AM'
    }
        
    if (hour == 0) {
        hour = 12
    }
     
    hour = (hour < 10) ? `0${hour}` : hour;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    
   
    time.innerHTML = `${hour} : ${minutes} : ${seconds} ${session}`
    setInterval(clock,1000)
}
clock()