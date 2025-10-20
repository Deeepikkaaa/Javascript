let button=document.querySelector(".button");

button.addEventListener(("click"),(e)=>{
   

let url=document.createElement("a");
url.setAttribute("href","https://github.com/Deeepikkaaa?tab=repositories");
 if(e.target.classList.contains("button")){    

alert("URL search value is: " + url.search);
    };
   
})
