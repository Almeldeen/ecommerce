var count =0;
var cover1=document.getElementById("backcover");
var cover2=document.getElementById("backcover2");
var btnEnvelope =document.getElementById("divenvelope");
var btnFrame =document.getElementById("divframe");
var btnPackaging =document.getElementById("divpackaging");
var btnCounter = document.getElementsByClassName("toCard")[0];
var btncard = document.getElementById("counter");
var vname = document.getElementById("name");
var Sname = document.getElementById("Sname");
var vemail = document.getElementById("Email");
var Semail = document.getElementById("Eemail");
var vmessage = document.getElementById("message");
var Smessage = document.getElementById("Emessage");
var vsub = document.getElementById("submit");
var Ssub = document.getElementById("Esub");

function nextCover(){
  cover1.style.display="none";
  cover2.style.display="block";
}
function backCover(){
    cover2.style.display="none";
    cover1.style.display="block";
    
    
}
function nextCover1(){
    cover1.style.display="none";
    cover2.style.display="block";
  }
  function backCover1(){
      cover2.style.display="none";
      cover1.style.display="block";
      
      
  }
function envelope(){
 btnEnvelope.style.display="block";
 btnFrame.style.display="none";
 btnPackaging.style.display="none";
 btnFlower.style.display="none";
}
function frame(){
  btnEnvelope.style.display="none";
  btnFrame.style.display="block";
  btnPackaging.style.display="none";
  btnFlower.style.display="none";
}
function packaging(){
  btnEnvelope.style.display="none";
  btnFrame.style.display="none";
  btnPackaging.style.display="block";
  btnFlower.style.display="none";
}
function addCount(){

count++;
btncard.innerText=count;
}
function topFunction(){
  
  scroll(0,0)
  
}
vname.addEventListener("input" , function(e){
  if(e.target.value.length >3){
    Sname.style.display="none";
  }if(e.target.value!=NaN){
    Sname.style.display="block";
  }

})
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
vemail.addEventListener("input" , function(e){
   if(e.target.value.match(mailformat)){
    Semail.style.display="none";
   }else{
    Semail.style.display="block";
  }
})
vmessage.addEventListener("input" , function(e){
  if(e.target.value.length >3){
    Smessage.style.display="none";
  }if(e.target.value!=NaN){
    Sname.style.display="block";
  }

})
function submit(){
  if(Semail.style.display=="block" || Sname.style.display=="block" ){
    Ssub.style.display="block";
  }else{
    this.preventDefault();
  }
 
}
