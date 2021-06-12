const countDownElement = $('#countdown');


function showCountDown(limitDate,message) {
    let countDownLimit = new Date(limitDate).getTime();

    let tempo = setInterval(() =>{
        let now = new Date().getTime();
        let limitTimeDate = countDownLimit - now;
        let days =  Math.floor(limitTimeDate / (1000 * 60 * 60 * 24));
        let hours = ("0" + Math.floor(limitTimeDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2);
        let minutes = ("0" + Math.floor(limitTimeDate % (1000 * 60 * 60) / (1000 * 60))).slice(-2);
        let seconds = ("0" + Math.floor(limitTimeDate % (1000 * 60) / (1000))).slice(-2);
        countDownElement.html('<h3>'+days+" days "+hours+" hours "+minutes+" minutes "+seconds+" seconds "+'</h3>');

        if(limitTimeDate < 0 ){
            clearInterval(tempo);
            countDownElement.html('<h3>'+message+'</h3>');
        }
    },1000);
}

window.addEventListener("load", () => showCountDown("July 21, 2021","Feliz cumpleaños!!"));