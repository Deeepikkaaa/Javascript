let title=document.querySelector("#title");
let para=document.querySelector("#para");

//buttons
let changetext= document.querySelector(".chngbtn");
let addelem=document.querySelector(".addelem");
let rmvelem=document.querySelector(".rmvelem");
let chngcolor=document.querySelector(".chngcolor");
let input=document.querySelector(".input");

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

//2nd day
//adding event listners to input
input.addEventListener("change",()=>{
   console.log("change-",input.value);
});


input.addEventListener("input",()=>{
  console.log("Input-",input.value)
  })
input.addEventListener("keyup",()=>{
  console.log("keyup-",input.value)
  })

input.addEventListener("focus",()=>{
  console.log("Focus-",input.value)
  })

  //Mouse events
  input.addEventListener("mousedown",(event)=>{
    console.log("Mousedown-",event.button);
  })

  //applying mouse events for whole body
  document.body.addEventListener("mousedown",(event)=>{
    let xcod=event.clientX;
    let ycod=event.clientY;
    let cods=`X cod-${xcod}, Y cod -${ycod}`;
    console.log(cors);
  });

