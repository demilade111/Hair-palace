
const sideNav = document.getElementById("sideNav");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.onclick=function(){
    if(sideNav.style.right=="-250px"){
 sideNav.style.right = "0";
  menu.src="Barber_Shop_img/close.png";
    }else{
        sideNav.style.right = "-250px";
        menu.src="Barber_Shop_img/menu.png";
    }
};
// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});
