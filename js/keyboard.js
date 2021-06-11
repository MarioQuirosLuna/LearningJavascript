$(function() {
    let x = 0, y = 0;
    const ball = document.querySelector("#ball");
    const stage = document.querySelector("#stage");
    let limitsBall;
    let limitsStage;

    function shortcuts(e){
        if(e.key === "a" && e.altKey){
            alert("Press: alt + a = alert");
        }
        if(e.key === "a" && e.ctrlKey){
            confirm("Press: control + a = confirm");
        }
        if((e.key === "a" || e.key === "A") && e.shiftKey){
            prompt("Press: shift + a = promp");
        }
    }

    function moveBall(e){
        limitsBall = ball.getBoundingClientRect();
        limitsStage = stage.getBoundingClientRect();
        switch(e.keyCode){
            case 37:
                //left
                if(limitsBall.left-10 > limitsStage.left) {
                e.preventDefault();
                    x--;
                }
                break;
            case 38:
                //up
                if(limitsBall.top > limitsStage.top) {
                    e.preventDefault();
                    y--;
                }
                break;
            case 39:
                //rigth
                if(limitsBall.right < limitsStage.right){
                    e.preventDefault();
                    x++;
                }
                break;
            case 40:
                //down
                if(limitsBall.bottom < limitsStage.bottom) {
                    e.preventDefault();
                    y++;
                }
                break;
            default:
                break;
        }
        ball.style.transform = "translate("+x*10+"px,"+y*10+"px)";
    }

    document.addEventListener("keydown",(e) => {
        shortcuts(e);
        moveBall(e);
    });
});