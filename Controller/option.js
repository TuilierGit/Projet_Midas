
function show(my_page){
    const page = document.getElementById(my_page);
    if (page.classList.contains("visible")){
        page.classList.remove("visible");
    } else {
        page.classList.add("visible");
    }
    
}

const b = document.getElementById('option_button');

b.addEventListener('click', function (){
    show("fond_sombre");
    show("option__page");} 
);

document.getElementById('fond_sombre').addEventListener('click',function(){
    show("fond_sombre");
    show("option__page");
});


// const plus = document.getElementById("plus_dans_html");

// plus.addEventListener('click',show);