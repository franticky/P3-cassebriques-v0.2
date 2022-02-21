let tableauArticles = [
    {
        id:1,
        nomArticle: "objet decoratif",
        prixArticle: 42.25,
        disponibilite: true
    },
    {
        id:2,
        nomArticle: "surfin",
        prixArticle: 52,
        disponibilite: true
    },
    {
        id:3,
        nomArticle:"combi",
        prixArticle:83,
        disponibilite:true
    },
    {
        id:4,
        nomArticle:"beach serviette",
        prixArticle:38,
        disponibilite:true

    },
    {
        id:5,
        nomArticle:"matelas gonflable",
        prixArticle:50,
        disponibilite:true
    },
    {
        id:6,
        nomArticle:"flyfoil",
        prixArticle:99,
        disponibilite:false
    },
    {
        id:7,
        nomArticle:"crochets",
        prixArticle:70,
        disponibilite:true
    },
    {
        id:8,
        nomArticle:"attache",
        prixArticle:45,
        disponibilite: true
    },
    {
        id:9,
        nomArticle:"planche",
        prixArticle:123,
        disponibilite:false
    }
];
let carteArticles = document.getElementById("articles");
let panier = [];

function articlesTrouvés(){
    let listeParent = document.getElementById("articlesAfficher");
    let barreRecherche = document.getElementById("trouver")
    let resultLI = document.createElement("li");
    resultLI.className = "carteArticleResultat";
    barreRecherche.addEventListener("input",(event =>{
        let inputValue = event.target.value.toLowerCase();
        console.log(inputValue)

        if(inputValue.length >= 0) {
            let res = tableauArticles.filter(produit =>
                arcticle.nomArticles.toLowerCase().includes(inputValue))
                    for(datas of res){
                        listeParent.innerHTML = datas.nomProduits
                        resultLI.innerHTML = 
                        `
                            <hr>
                            <p>${datas}</p>
                            <h2 class="resultatArticle">Resultat<h2>
                            <hr>
                            <h3 class="titre-article">${datas.nomArticles}</h3>
                        `
                        listeParent.appendChild(resultLI)

                    }else{
                        resultLI.innerHTML = "rien"
                    }
        }
    }))
}

function afficherArticles(){
    tableauArticles.forEach((produit) =>{
        let articleElement = document.createElement("li");
        articleElement.className = "carte-article";
        articleElement.id = `produit${article.id}`;
    })
}