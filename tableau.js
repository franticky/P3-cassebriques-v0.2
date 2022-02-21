
let ul = document.getElementById("sectionArticles");
let tableauPanier=[];
console.log("Le Panier est vide" + tableauPanier)

function afficherArticle(){
    tableauArticles.map(function(article){
        let li = document.createElement("li");
        li.id = `article-${article.id}`
        li.innerHTML = 
        `
        <p style="color:#F23A29;">Nom de l'article:${article.nomArticle}</p>
        <p style="color:#164059;">Prix de l'article:${article.prixArticle}</p>
        `
        ul.appendChild(li);
        li.addEventListener("click", function(){
            li.style.display = "none";
            tableauPanier.push(article)
            afficherPanier();
        })
    });
}

function afficherPanier(){
    let ajoutDArticleAuPanier = "";
    tableauPanier.forEach(panier => {
        ajoutDArticleAuPanier +=
        `
        <li id="articleSupprime${panier.id}">
        <p style="color:#F23A29;">Nom de l'article:${article.nomArticle}</p>
        <p style="color:#164059;">Prix de l'article:${article.prixArticle}</p>
        </li>
        `
    });
    document.getElementById("lePanier").innerHTML = ajoutDArticleAuPanier
    tableauPanier.forEach(function (supprimerArticle){
        let articleTableau1 = document.getElementById(`article-${supprimerArticle.id}`)
        let articleSupprime = document.getElementById(`articleSupprime${supprimerArticle}`)
        articleSupprime.addEventListener("click", () =>{
            articleTableau1.style.display = "block";
            let indexPanier = tableauPanier.indexOf(supprimerArticle)
            tableauPanier.splice(indexPanier,1)
            articleSupprime.remove();
        });
    });
}