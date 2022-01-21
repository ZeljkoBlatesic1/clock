setInterval(setClock, 1000)  /* 1 calls f-tion at intervals (in milliseconds) */

/* UPD - 3.1. get elmnts from HTML */
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

/* 2 define function */
function setClock() {
  
    /* 2.1. get infos of sec,min, hours */
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60 
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 /* for minHand to go slowly from nmbr2nmbr */
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 /* same for hourHand */
    
    /* UPD - 3.2. rotate hand by proper rotate-ration  */
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)    
}

/* 3 Defining rotation */
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

/* 4 always seted on actual time */
setClock()