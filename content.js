    
   if(document.location.href.includes("google.com")) {
    console.log("content script is working");
//    document.querySelector("body").style.background = 'black';
 //   document.querySelector("body").style.color= 'white';
let top_nav = document.querySelectorAll("div");
let cites = document.querySelectorAll("cite");
let inputs = document.querySelectorAll("input");

inputs.forEach(elem => {findAnchors(elem, "#555", "#ccc")})
cites.forEach(elem => {findAnchors(elem, "#222", "#00aaaa")});
document.querySelectorAll(".RNNXgb").forEach(elem => {
    elem.style.borderRadius = "0px";
})

top_nav.forEach(elem => {findAnchors(elem, "#222", "#aaa")});
    findAnchors(top_nav);

function findAnchors (elem, backgroundColor, color) {
    if(elem.style || elem.style==""){
        elem.style.color = color;//"#aaa";
        elem.style.background = backgroundColor;//"#222";
    }

    if(elem.localName === "a"){
        elem.style.color = "#aaaaff";
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