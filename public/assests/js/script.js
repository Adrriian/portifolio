let btn = document.querySelector(".nav_bar");
btn.addEventListener('click', menu)

function menu(){
    let menu_open = document.querySelector(".menu_open");
    
    if(menu_open.style.display == "flex"){
        menu_open.style.display = "none";
    }else{
        menu_open.style.display = "flex";
    }
}
