const menuIcon = document.getElementById("shopingcart");
const menuActiveicon = document.getElementById("shopingcart1");
const shopinbox =document.getElementById("shopingcartdiv");



menuIcon.addEventListener('click',(e)=>{
   menuActiveicon.style.display ="inline-block";
   menuIcon.style.display="none";
   shopinbox.style.display="inline-block";
});

menuActiveicon.addEventListener('click',(e)=>{
    menuActiveicon.style.display ="none"
    menuIcon.style.display="inline-block";
    shopinbox.style.display="none" 
 });




 