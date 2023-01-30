const popup = document.getElementById("popup");
const popupBtn = document.getElementsById("editBtn");
const clspopupBtn = document.getElementsById("clsBtn");
 
editBtn.addEventListener('click', popp);

function popp() {
    popupBtn.addEventListener('click', ()=>{
        document.getElementsByClassName(".popup_opened");
      })
}