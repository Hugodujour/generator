const arr = ["Ton daron", "Ta daronne", "Ton frère", "Ta soeur", "Ton cousin", "Ta cousine", "Ton meilleur pote", "Ta meilleure pote"]
const arr2 = ["effraie", "mange", "pousse", "devient", "boit", "ressemble à", "effraie", "fabrique", "travaille pour", "crache sur", "vole", "colle", "se repose sur", "dort avec"]
const arr3 = ["un canard", "un chien", "un chat", "un poulpe", "un gros thon", "un bol", "un jus de pomme", "Ludo", "40 voleurs", "un magicien", "Larry l'acrobate", "un arbre", "deux francs", "la France", "une tendinite", "un bras en mousse", "sa langue", "son genou", "tes pieds", "toute ta famille"]
const arr4 = ["en Thaïlande.", "!", "en obésité morbide.", "et ça fait peur.", ", perso j'aurais jamais osé.", "et ça me déçoit...", ", wow !", ", ambiance...", "en plastique.", "en bois.", "de toutes ses forces.", "en bonne santé.", "et ça lui plaît.", "sans aucune gêne.", "sans flancher.", ", ça se fait pas...", ", mais a quel prix ?", "de la seconde guerre mondiale.", "devant tout le monde.", "sans aide.", "avec un pote."]
const arrImg = ["img/1.jpg","img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg"]

const rand = (arr) => {
  const max = arr.length
  const min = 0
  const random = Math.floor(Math.random() * (max - min) + min)
  return arr[random]
}

const getArr = () => {
  return `${rand(arr)} ${rand(arr2)} ${rand(arr3)} ${rand(arr4)}`
}


function hey(){
    text.innerHTML = getArr()
}

function getImg(){
  return rand(arrImg)
}

function imge(){
  img.src = getImg()
}

const img = document.getElementById("img")
const text = document.getElementById("text")
const btn = document.getElementById("btn")

btn.addEventListener('click', ()=>{
    hey()
    imge()
})

