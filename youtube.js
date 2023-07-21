var menuicom=document.querySelector(".menumawa");
var sidebar=document.querySelector('.sidebar');
var main=document.querySelector('.container')
menuicom.onclick=function(){
    sidebar.classList.toggle('small-sidebar');
    main.classList.toggle('big-main')
}
