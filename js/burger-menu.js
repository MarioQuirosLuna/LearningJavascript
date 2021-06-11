$(function() {
    // Burger burger implementation
    const burgerMenu = document.getElementById('nav-menu-burger');
    const itemsMenu = document.getElementById('nav-menu');
    var visibilityMenu = false;

    burgerMenu.addEventListener('click',() => {
        if(visibilityMenu){
            itemsMenu.style.width = '0';
            visibilityMenu = false;
        }else{
            itemsMenu.style.width = '30vw';
            itemsMenu.style.overflow = 'hidden';
            visibilityMenu = true;
        }
    });

    let section1 = $('#sectionOne').offset().top;
    let section2 = $('#sectionTwo').offset().top;
    let section3 = $('#sectionThree').offset().top;
    let section4 = $('#sectionFour').offset().top;
    let section5 = $('#sectionFive').offset().top;


    $('#section1').on('click',(e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: section1-100
        },500);
    })
    $('#section2').on('click',(e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: section2-100
        },500);
    })
    $('#section3').on('click',(e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: section3-100
        },500);
    })
    $('#section4').on('click',(e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: section4-100
        },500);
    })
    $('#section5').on('click',(e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: section5-100
        },500);
    })
})