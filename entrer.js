const email="gibson@mel.com";
const password="heh";
let erreursBloc = document.getElementById("erreurs");

function entrer(){
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;

    if(emailInput === "" || passwordInput === ""){
        erreursBloc.className = "erreurs"
        erreursBloc.className = "tous les champs doivent etre remplis"
        document.getElementById("erreurs").innerHTML="tous les champs doivent etre remplis"        
    }else{
        if(emailInput === email && passwordInput === password){
            document.getElementById("yoat").style.display = "none";
            document.getElementById("zodiaque").classList.add("zodiaque")
                function redirection(){
                    window.location="../exodelenferjtejure/accueil.html"
                }
                    setTimeout(redirection, 6000)
        }else{
            erreursBloc.className = "erreurs"
            erreursBloc.innerHTML = "veillez a bien ecrire votre mél & gibson pliz"
            document.getElementById("erreurs").innerHTML="tous les champs doivent etre remplis" 
        }
    }
}