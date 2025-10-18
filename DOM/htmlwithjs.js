let parentelem=document.getElementsByClassName("parentcontainer")[0];
//creating div and adding classs inside the div
let cardcontainer=document.createElement("div");
cardcontainer.classList.add("card-container");

let cardimage=document.createElement("img");
cardimage.classList.add ("image");

cardimage.setAttribute("src","https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Women%27s/Women%27s%20Hiking%20Shirts/smartwool%20hike%20light%20-%20best%20women%27s%20hiking%20shirts%20.jpg");
 cardimage.setAttribute("alt","Topwears");

 let cardtextelem=document.createElement("span");
 cardtextelem.innerText="Hello i am html from js!!";

 
cardcontainer.appendChild(cardimage);
cardcontainer.appendChild(cardtextelem);
parentelem.appendChild(cardcontainer);

// Attach click event to button
document.getElementById("createCardBtn").addEventListener("click", createCard);

 