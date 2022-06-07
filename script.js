const popUp = document.querySelector("#stats");
const magic = document.querySelector("#magic");
const save = document.querySelector("#save");
const mark = document.querySelector( ".fa-xmark")
popUp.addEventListener("click",()=>{
    magic.style.display="block";
    
});
save.addEventListener("click",()=>{
    
    magic.style.display="none"
})
mark.addEventListener("click",()=>{
    
    magic.style.display="none"
})