let title=document.querySelector("#title");
let para=document.querySelector("#para");

//buttons
let changetext= document.querySelector(".chngbtn");
let addelem=document.querySelector(".addelem");
let rmvelem=document.querySelector(".rmvelem");
let chngcolor=document.querySelector(".chngcolor");

function showmsg(){
    console.log("Text Changed");
    changetext.innerText="Text changed";
}
changetext.addEventListener("click",showmsg);
    
//changing text of paragraph
changetext.addEventListener(("click"),()=>{
    para.innerText="The paragraph has been changed";
})

//adding element in paragraph
addelem.addEventListener(("click"),()=>{
    para.innerHTML="<span> A new elem in paragraph added!</span>";
})

//removing paragraph
rmvelem.addEventListener(("click"),()=>{
    para.remove();
});

//changing paragraph text color
chngcolor.addEventListener(("click"),()=>{
    para.style.color="Green";
})