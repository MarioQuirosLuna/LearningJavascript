$(function() {
    const btnStart = $("#button-start");
    const btnStop = $("#button-stop");
    const divClocks = $("#clock");
    let clockTempo;

    btnStop.prop('disabled',true);

    btnStart.on("click", (e) => {
        let clockHour = new Date().toLocaleTimeString();
        divClocks.html('<h3>'+clockHour+'</h3>');
        clockTempo = setInterval(() =>{
            clockHour = new Date().toLocaleTimeString();
            divClocks.html('<h3>'+clockHour+'</h3>');
        },1000);
        btnStart.prop('disabled',true);
        btnStop.prop('disabled',false);
    });

    btnStop.on("click", (e) => {
        clearInterval(clockTempo);
        divClocks.html("");
        btnStart.prop('disabled',false);
        btnStop.prop('disabled',true);
    });
})