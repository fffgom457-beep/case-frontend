const API="https://case-backend-production-b3f2.up.railway.app";
const spinner=document.getElementById("spinner");

async function loadUser(){
 let r=await fetch(API+"/api/user");
 let d=await r.json();
 document.getElementById("balance").innerText=d.balance;

 let inv=document.getElementById("inv");
 inv.innerHTML="";
 d.inventory.forEach(i=>{
   let div=document.createElement("div");
   div.innerText=i.name;
   inv.appendChild(div);
 });
}

async function openCase(){
 let r=await fetch(API+"/api/open-case",{method:"POST"});
 let d=await r.json();

 spinner.innerHTML="";
 for(let i=0;i<20;i++){
   let div=document.createElement("div");
   div.className="item";
   div.innerText="???";
   spinner.appendChild(div);
 }

 spinner.children[15].innerText=d.item.name;
 spinner.style.transform="translateX(-1500px)";

 setTimeout(loadUser,3000);
}

loadUser();
