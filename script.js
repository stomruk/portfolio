let pageIndex = 0
let currentPage = 'profil'
let TurnTo = 'forward'
var page = [
    "url(./frame/1.png)",
    "url(./frame/2.png)",
    "url(./frame/3.png)",
    "url(./frame/4.png)",
    "url(./frame/5.png)",
    "url(./frame/6.png)",
    "url(./frame/7.png)",
    "url(./frame/1.png)",
]
document.getElementById("before").addEventListener("click", e=>{
    TurnTo = 'backward'
    pageIndex = 7
    turnPage()
    hide()
    setTimeout(pageChangeDown, 50)
})
document.getElementById("after").addEventListener("click", e=>{
    TurnTo = 'forward'
    pageIndex = 0
    turnPage()
    hide()
    setTimeout(pageChangeUp, 50)
})
function hide(){
    document.getElementById("pageExperience").style.display = 'none'
    document.getElementById("pageCompetence").style.display = 'none' 
    document.getElementById("pageProfil").style.display = 'none'
    document.getElementById("pageEducation").style.display = 'none'
    document.getElementById("Passion").style.display = 'none'
    document.getElementById("Decouvrir").style.display = 'none'
    document.getElementById("before").style.display = 'none'
    document.getElementById("after").style.display = 'none'
}
function turnPage(){
    document.getElementById("book").style.backgroundImage = page[pageIndex]
    if(TurnTo == 'forward'){
        setTimeout(pageUp, 100)
    }
    else{
        setTimeout(pageDown, 100)
    }
    
}
function pageUp(){
    if (pageIndex <= 7){
        pageIndex ++
        turnPage()
    }
    else{
        document.getElementById("book").style.backgroundImage = page[pageIndex]
        pageStatus()
    }
}
function pageDown(){
    if (pageIndex >= 0){
        pageIndex --
        turnPage()
    }
    else{
        document.getElementById("book").style.backgroundImage = page[pageIndex]
        pageStatus()
    }
}
function pageStatus(){
    if(currentPage == 'profil'){
        document.getElementById("pageProfil").style.display = 'block'
        document.getElementById("pageEducation").style.display = 'block'
        document.getElementById("after").style.display = 'block'
        document.getElementById("before").style.display = 'none'
    }
    else if(currentPage == 'experience'){
        document.getElementById("pageExperience").style.display = 'block'
        document.getElementById("pageCompetence").style.display = 'block' 
        document.getElementById("before").style.display = 'block'
        document.getElementById("after").style.display = 'block'
    }
    else if(currentPage == 'passion'){
        document.getElementById("Passion").style.display = 'block'
        document.getElementById("Decouvrir").style.display = 'block'
        document.getElementById("after").style.display = 'none'
        document.getElementById("before").style.display = 'block'
    }
}
function pageChangeUp(){
    if (currentPage == 'profil'){
        currentPage = 'experience';
    }else if (currentPage == 'experience'){
        currentPage = 'passion';
    }
}
function pageChangeDown(){
    if (currentPage == 'experience'){
        currentPage = 'profil';
    }else if (currentPage == 'passion'){
        currentPage = 'experience';
    }
}
document.getElementById('facebook').addEventListener('mouseover', e=>{
    typeText('facebook')
})
document.getElementById('instagram').addEventListener('mouseover', e=>{
    typeText('instagram')
})
document.getElementById('linkedin').addEventListener('mouseover', e=>{
    typeText('linkedin')
})
document.getElementById('steam').addEventListener('mouseover', e=>{
    typeText('steam')
})
document.getElementById('itch').addEventListener('mouseover', e=>{
    typeText('itch')
})
document.getElementById('discord').addEventListener('mouseover', e=>{
    typeText('discord')
})
function typeText(text){
    document.getElementById('social').innerHTML = text
    document.getElementById(text).addEventListener('mouseout', e=>{
        document.getElementById('social').innerHTML = ''
    })
}