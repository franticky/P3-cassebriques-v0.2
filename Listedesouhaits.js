function nouveauSouhait(){
    const listeParent = document.getElementById("liste-souhaits")
    let li = document.createElement('li');
    li.className = "element-liste"
    let inputValue = document.getElementById("ajouter-un-souhait").value
    console.log(inputValue);
    let liNode = document.createTextNode(inputValue)
    li.appendChild(liNode)
    if(inputValue === ""){
        alert('tout le monde a des souhaits')
    }else{
        listeParent.appendChild(li)
    }
    document.getElementById("ajouter-un-souhait").value = ""
    let span = document.createElement('span')
    let croix = document.createTextNode('x')
    span.className = "supprimer"

    span.appendChild(croix)
    li.appendChild(span)

    let btnSupprimer = document.getElementsByClassName("supprimer")
    let i
    
    for(i = 0; i < btnSupprimer.length; i++ ){
        btnSupprimer[i].onclick = function(){
            let spanParentLI = this.parentElement
            spanParentLI.style.display = "none"

        }
    }
}
nouveauSouhait()

function tacheBarree(){
    let listeUL = document.getElementById("liste-souhaits")
    listeUL.addEventListener("click", function (event){
        if(event.target.tagName === "LI"){
            event.target.classList.toggle('checked')
        }

    })
}

tacheBarree()

function darkMode(){
    let btnLightnDark = document.body
    btnLightnDark.classList.toggle("dark-mode")
    const toggleIcon = document.getElementById("toggleIcon")
    if(toggleIcon.className === "fa fa-moon-o"){
        toggleIcon.className = "fa"
        toggleIcon.classList.toggle("fa fa-lightbulb-o")
    }else{
        toggleIconclassName = "fa fa-moon-o"
    }
}