import { meanings } from "./Meaning.js";
const meaninglist=document.getElementById("meainglist");
meanings.forEach(item=>{
    const li=document.createElement("li");
    li.textContent=`${item.korean}-${item.english}`;
    meaninglist.appendChild(li);
})