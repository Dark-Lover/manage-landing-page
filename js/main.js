import { mainAvatar, mainHeading, mainPara } from "./mainContent.js";
/* Select Slider fields*/
const slide_img=document.querySelector("#my_slide > img");
const slide_name=document.querySelector("#my_slide > h3");
const slide_para=document.querySelector("#my_slide > p");


/* Add event listener to slider btn*/
const radio_btn1 = document.getElementById("t_1");
radio_btn1.addEventListener("click",()=>{
    slide_img.src=`/images/${mainAvatar[0]}`;
    slide_name.innerHTML=`${mainHeading[0]}`;
    slide_para.innerHTML=`${mainPara[0]}`;
})
const radio_btn2 = document.getElementById("t_2");
radio_btn2.addEventListener("click",()=>{
    slide_img.src=`/images/${mainAvatar[1]}`;
    slide_name.innerHTML=`${mainHeading[1]}`;
    slide_para.innerHTML=`${mainPara[1]}`;
})
const radio_btn3 = document.getElementById("t_3");
radio_btn3.addEventListener("click",()=>{
    slide_img.src=`/images/${mainAvatar[2]}`;
    slide_name.innerHTML=`${mainHeading[2]}`;
    slide_para.innerHTML=`${mainPara[2]}`;
})


 const burgerBtn = document.querySelector(".hamburger_btn");
 burgerBtn.addEventListener("click", test_menu);
 const hidden_menu=document.querySelector(".hidden_menu");
 const hidden_blur=document.querySelector(".blur");

 let stat=0;
function test_menu(){
  if(stat==0){
    showMenu();
    stat=1;
  } else if(stat==1){
    closeMenu();
    stat=0;
  }
}
 function showMenu() {
   burgerBtn.src="/images/icon-close.svg";
   hidden_menu.classList.add("show_section");
   hidden_blur.classList.add("show_section");

 }
 function closeMenu() {
  burgerBtn.src="/images/icon-hamburger.svg";
  hidden_menu.classList.remove("show_section");
  hidden_blur.classList.remove("show_section");
 }



