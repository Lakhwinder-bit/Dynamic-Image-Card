let form = document.querySelector("form");
let input = document.querySelector("input");
let card = document.querySelector(".card")

form.addEventListener("submit",function(deta){
      deta.preventDefault();


  let imgdiv = document.createElement("div");
  imgdiv.classList.add("img-card");

  let divimg = document.createElement("div")
  divimg.classList.add("img-conatiner")

  let img = document.createElement("img")
  img.setAttribute("src",input.value)

  let divtime = document.createElement("div");
  divtime.classList.add("date-time");

  let now = new Date();
  const nowday = ["Sunday","Moday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dayname = nowday[now.getDay()];  //they give me 6 number.
let monthname = months[now.getMonth()];
let years = now.getFullYear(); 
let datename = now.getDate();

let hours = now.getHours();
let minutes = now.getMinutes();

hours = hours % 12;
hours = hours ? hours : 12;

minutes = minutes < 10 ? "0" + minutes : minutes;
let ampm = hours >= 12 ? "PM" : "AM";
let time = hours + ":" + minutes + " " + ampm;

let dmy = (datename+"-"+monthname+"-"+years);


  let pd = document.createElement("pd")
  pd.textContent = dmy;
  let pv = document.createElement("pv")
  pv.textContent = time;

    imgdiv.appendChild(divimg);
   imgdiv.appendChild(divtime);
    
   divimg.appendChild(img);
   divtime.appendChild(pd);
   divtime.appendChild(pv);

   card.appendChild(imgdiv);

 
    if(input.type !== "submit"){
        input.value = "";
    };

     

});