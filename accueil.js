const menuParent=document.getElementById("topNav")

menuParent.innerHTML=
`
<a href="#" class="liens"><i class="fa fa-home" aria-hidden="true"></i>Accueil</a>
<a href="brocs.html" class="liens"><i class="fa fa-gamepad" aria-hidden="true"></i>Brocs</a>
<a href="#" class="liens"><i class="fa fa-music" aria-hidden="true"></i>Piano</a>
<a href="articles.html" class="liens"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Articles</a>
<a href="listedesouhaits.html" class="liens"><i class="fa fa-list-alt" aria-hidden="true"></i>Liste de souhaits</a>
<div id="theSideNav" class="sideNav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><i class="fa fa-window-close-o" aria-hidden="true"></i></a>
    <img src="../exodelenferjtejure/pexels-sebastian-voortman-189349.jpg" alt="beach"/>
</div>
<span onclick="openNav()" class="liens"> NosInfos </span>
<a href="#" class="iconMode" onclick="showHideMenu()"><i class="fa fa-lightbulb-o" aria-hidden="true"></i><i class="fa fa-moon-o" aria-hidden="true"></i></a>
<a href="#" class="iconNav" onclick="showHideMenu()"><i class="fa fa-database" aria-hidden="true"></i></a>

`
function showHideMenu(){
    let open = document.getElementById("topNav");
    if(open.className === "accueilTopNav"){
        open.className += " responsive"
    }else{
        open.className = "accueilTopNav"
    }
}

function topNav(){
    let x = document.getElementById("topNav");
    if(x.className === "accueilTopNav"){
        x.className += " responsive"
    }else{
        x.className = "accueilTopNav"
    }
}

function openNav(){
    document.getElementById("theSideNav").style.width="100%";

}
function closeNav(){
    document.getElementById("theSideNav").style.width = "0px";
}