
let _header = document.getElementById("app_header");
while(_header.firstChild){
  _header.removeChild(_header.firstChild);
}


///////  /////// Global part 


/////// Left part 


// Icone : menu 

let _menu__span = document.createElement("span");
_menu__span.setAttribute("class","material-symbols-outlined");
_menu__span.textContent = "menu";


let _menu = document.createElement("a");
_menu.setAttribute("href", "a_propos.html");
_menu.appendChild(_menu__span);



// Icone : home


let _home__span = document.createElement("span");
_home__span.setAttribute("class","material-symbols-outlined");
_home__span.textContent = "home";


let _home = document.createElement("a");
_home.setAttribute("href", "index.html");
_home.appendChild(_home__span);


// Title 

let _title_page = document.createElement("h2");
let title_loc = document.title;
_title_page.textContent = title_loc;



// Left part : property

let _icons_header_left = document.createElement("div");
_icons_header_left.setAttribute("class","icons-header-left");
_icons_header_left.appendChild(_menu);
_icons_header_left.appendChild(_home);
_icons_header_left.appendChild(_title_page);


///////

/////// Right part 



// Icone :  toggle

let _toggle_on = document.createElement("span");
_toggle_on.setAttribute("class","material-symbols-outlined");
_toggle_on.setAttribute("id","toggle_on");
_toggle_on.textContent = "toggle_on";

let _toggle_off = document.createElement("span");
_toggle_off.setAttribute("class","material-symbols-outlined");
_toggle_off.setAttribute("id","toggle_off");
_toggle_off.textContent = "toggle_off";

let _toggle = document.createElement("div");
_toggle.appendChild(_toggle_on);
_toggle.appendChild(_toggle_off);


// Icone :  option

let _option_button__span = document.createElement("span");
_option_button__span.setAttribute("class","material-symbols-outlined");
_option_button__span.textContent = "more_horiz";

let _option_button = document.createElement("div");
_option_button.setAttribute("id","option_button");
_option_button.appendChild(_option_button__span);

// Icone :  output

let _output_button__span = document.createElement("span");
_output_button__span.setAttribute("class","material-symbols-outlined");
_output_button__span.textContent = "output";


let _output_button = document.createElement("div");
_output_button.appendChild(_output_button__span);

//// Right part : property 

let _icons_header_right = document.createElement("div");
_icons_header_right.setAttribute("class","icons-header-right");
_icons_header_right.appendChild(_toggle);
_icons_header_right.appendChild(_option_button);
_icons_header_right.appendChild(_output_button);



///////

// Global bar : property

let _globalBar = document.createElement("div");
_globalBar.setAttribute("class","app_header-globalBar");
_globalBar.appendChild(_icons_header_left);
_globalBar.appendChild(_icons_header_right);

/////// 

_header.appendChild(_globalBar);

///////  ///////


/*
<header class="app_header">
    <div class="app_header-globalBar">

        <div class="icons-header-left">
            <!-- <a href="index.html"><span class="material-symbols-outlined">home</span></a> -->
            <a href="a_propos.html"><span class="material-symbols-outlined"> menu </span></a>
            <a href="index.html"><span class="material-symbols-outlined">home</span></a>
            <!-- <span class="material-symbols-outlined">arrow_back</span>
            <span class="material-symbols-outlined">arrow_forward</span> -->
            <h2>Mes comptes</h2>
        </div>
        
        <div class="icons-header-right">
            <!-- <a><span class="material-symbols-outlined">search</span></a> -->
            <!-- <a><span class="material-symbols-outlined">settings</span></a> -->
            <div>
                <span class="material-symbols-outlined" id="toggle_on">toggle_on</span>
                <span class="material-symbols-outlined" id="toggle_off">toggle_off</span>
            </div>
            <div id="option_button"><span class="material-symbols-outlined">more_horiz</span></div>
            <div><span class="material-symbols-outlined">output</span></div>
            <!-- <span class="material-symbols-outlined">favorite</span> -->
        </div> 
    </div>
</header>
*/


