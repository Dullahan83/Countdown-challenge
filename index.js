/* const input = document.getElementById("chosenDate")
input.addEventListener("change", (e) =>{
    let inputValue = e.target.value
    localStorage.setItem("chosenDate", inputValue)
}) */



let chosenDay = new Date(localStorage.getItem("chosenDate") ? localStorage.getItem("chosenDate") : '2022-07-30');


function countdown(){
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    let now = new Date();
    let timeDiff = chosenDay - now;

    const seconds = Math.floor((timeDiff % minute) / second)
    const minutes = Math.floor(timeDiff % hour / minute)
    const hours = Math.floor(timeDiff % day / hour)
    const days = Math.floor(timeDiff / day)
    if((timeDiff -1) < 0){
        localStorage.clear("chosenDate")
        clearInterval(myInterval)
        /* location.reload(); */
    }
    displayDate(timeDiff, seconds, minutes, hours, days)
}

function displayDate(timeDiff, seconds, minutes, hours, days){
    if(timeDiff > 0){
        if(seconds < 10){
            document.querySelector(".seconds .ten").textContent = "0"
            document.querySelector(".seconds .one").textContent = seconds.toString()[0]
        }
        else{
            document.querySelector(".seconds .ten").textContent = seconds.toString()[0]
            document.querySelector(".seconds .one").textContent = seconds.toString()[1]
        }
    
        if(minutes < 10){
            document.querySelector(".minutes .ten").textContent = "0"
            document.querySelector(".minutes .one").textContent = minutes.toString()[0]
        }
        else{
            document.querySelector(".minutes .ten").textContent = minutes.toString()[0]
            document.querySelector(".minutes .one").textContent = minutes.toString()[1]
        }
    
        if(hours < 10){
            document.querySelector(".hours .ten").textContent = "0"
            document.querySelector(".hours .one").textContent = hours.toString()[0]
        }
        else{
            document.querySelector(".hours .ten").textContent = hours.toString()[0]
            document.querySelector(".hours .one").textContent = hours.toString()[1]
        }
    
        if(days < 10){
            document.querySelector(".days .ten").textContent = "0"
            document.querySelector(".days .one").textContent = days.toString()[0]
        }
        else{
            document.querySelector(".days .ten").textContent = days.toString()[0]
            document.querySelector(".days .one").textContent = days.toString()[1]
        }
    }
    else{
        const cells = document.querySelectorAll(".cell p")
        cells.forEach(cell => {
            cell.textContent = 0
        });
    }
}



countdown()
myInterval = setInterval(countdown, 1000)

/* const button = document.querySelector("#bonus button")
button.addEventListener("click", () => {
    location.reload()
}) */
