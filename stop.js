window.onload = function(){

    var seconds = 00;
    var tens = 00;
    var appendTens = document.querySelector(".tens");
    var appendSeconds = document.querySelector(".seconds");
    var interval;
    document.getElementById("1").addEventListener("click",startTimer);
    document.getElementById("2").addEventListener("click",stopTimer);
    document.getElementById("3").addEventListener("click",resetTimer);


function startTimer(){
    clearInterval(interval);
    interval = setInterval(start, 10);
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
}

function start(){
    tens++;

    if (tens < 9){
        appendTens.innerHTML = "0" + tens;
    }else{
        appendTens.innerHTML = tens;
    }

    if (tens > 99){
        console.log("seconds")
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
}
}
