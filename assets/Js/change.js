const buttons = document.querySelectorAll(".btn");
const input = document.querySelector(".counter");
let Id = document.querySelector(".id");
let basket = document.querySelector(".count");
let baskets = [];

let url = new URL(document.location).searchParams;
let id = url.get("data-id");
Id.innerText = id+50;

input.addEventListener("click",function(){
    localStorage.setItem("SelectValue",input.value);
   
})
basket.innerText = localStorage.getItem("SelectValue");

if(localStorage.getItem("SelectValue") <= 0){
    basket.innerText = 0;
}

for(let btn of buttons){
    btn.addEventListener("click",function(e){
       e.preventDefault();
       let images = document.querySelector("img");
       let name = document.querySelector("h1").innerText;
       let price = document.querySelector(".price").innerText;
       
       let productObject = {
           images,
           name,
           price,
           count : localStorage.getItem("SelectValue"),
       }
       localStorage.setItem("Datas",JSON.stringify(productObject));
       baskets.push(productObject);
       
       
      
    })
}




