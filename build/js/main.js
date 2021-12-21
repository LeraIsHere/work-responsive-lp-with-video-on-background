// burger
let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// video
$('.dot1').click(function(){
    $('.vid1').css('display', 'block');
    $('.vid2').css('display', 'none');
    $('.vid3').css('display', 'none');
});
$('.dot2').click(function(){
    $('.vid1').css('display', 'none');
    $('.vid2').css('display', 'block');
    $('.vid3').css('display', 'none');
});
$('.dot3').click(function(){
    $('.vid1').css('display', 'none');
    $('.vid2').css('display', 'none');
    $('.vid3').css('display', 'block');
});