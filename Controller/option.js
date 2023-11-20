
function show(){
    const help_menu = document.getElementById("option__help");
    if (help_menu.classList.contains("visible")){
        help_menu.classList.remove("visible");
    } else {
        help_menu.classList.add("visible");
    }
    
}

const b = document.getElementById('help_button');
b.addEventListener('click',show);


const plus = document.getElementById("plus_dans_html");

plus.addEventListener('click',show);