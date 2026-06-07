import { meanings } from "./Meaning.js";
const textdisplay=document.getElementById("display");
const GntBtn=document.getElementById("GenBtn");
const AnsBtn=document.getElementById("AnsBtn");
let current=null;

function Random_meaning(){
    current=meanings[Math.floor(Math.random()*meanings.length)];
    textdisplay.textContent=current.english;
}
GntBtn.textContent="Generate";
GntBtn.addEventListener("click",Random_meaning);
AnsBtn.textContent="Show Answer";

AnsBtn.addEventListener("click",()=>{
    if(current){
        textdisplay.textContent=`${current.english}-${current.korean}`;
    }
});
