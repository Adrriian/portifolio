let btn:Element = document.querySelector(".nav_bar") as HTMLDivElement;
btn.addEventListener('click', menu)

function menu(){
    let menu_open:any = document.querySelector(".menu_open") as HTMLDivElement;

    if(menu_open.style.display == "flex"){
       return menu_open.style.display == "none";
    }
}