  window.onload = ()=>{  
   if(document.location.href.includes("https://www.google.com")||document.location.href.includes("https://www.google.co")) {
    console.log("content script is working");
//    document.querySelector("body").style.background = 'black';
 //   document.querySelector("body").style.color= 'white';
let top_nav = document.querySelectorAll("div");
let cites = document.querySelectorAll("cite");
let inputs = document.querySelectorAll("input");

inputs.forEach(elem => {findAnchors(elem, "#555", "#ccc")})
cites.forEach(elem => {findAnchors(elem, "#222", "#00aaaa")});

//for search bar.
document.querySelectorAll(".RNNXgb").forEach(elem => {
    elem.style.borderRadius = "0px";
})

setTimeout(()=>{
    //for menu on google homepage.

    let imgs = document.querySelectorAll(".c7cjWc");
imgs.forEach(elem => {
    elem.style.background = "none";
});

let imgs2 = document.querySelectorAll(".fWhgmd");
imgs2.forEach(elem => {
    elem.style.background = "none";
});

let menuTabs = document.querySelector(".gb_Vf");
if(menuTabs)
findAnchors(menuTabs, "#aaa", "black");
menuTabs.addEventListener("click", ()=>{

document.querySelectorAll("li").forEach(elem => {findAnchors(elem, "#555", "#ccc")})
});


}, 1000
);

let heading2s = document.querySelectorAll("h2");

heading2s.forEach(e => {e.style.color="darkgrey"});



top_nav.forEach(elem => {findAnchors(elem, "#222", "#aaa")});
   

function findAnchors (elem, backgroundColor, color) {
    if((elem.style || elem.style=="")){
        elem.style.color = color;//"#aaa";
        elem.style.background = backgroundColor;//"#222";
    }

    if(elem.localName === "a"){
        elem.style.color = "#aaaaaa";
        if(elem.childNodes){
            elem.childNodes.forEach(e => findAnchors(e, '#222', '#0055aa'))
        }
    }
  
  else if(elem.childNodes)
      elem.childNodes.forEach(findAnchors, backgroundColor, color);
    
}
}

//imgs.forEach(elem => {elem.style.filter =  "brightness(.8) contrast(1.2)";});
//let imgs = document.querySelectorAll("img");
  }