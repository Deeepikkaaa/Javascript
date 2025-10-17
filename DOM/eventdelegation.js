let theme=document.querySelector('.Btn-theme');
//target will give the button that was clicked
theme.addEventListener("click",(e)=>{

      if (e.target.classList.contains("dark")) {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "white";}
    else if(e.target.classList.contains("light")){
document.body.style.backgroundColor="white";
document.body.style.color="black";
    }
      else if (e.target.classList.contains("blue")) {
    document.body.style.backgroundColor = "#007bff";
    document.body.style.color = "white";
  } 
  else if (e.target.classList.contains("reset")) {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
  }

})
