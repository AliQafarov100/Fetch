fetch("https://jsonplaceholder.typicode.com/photos")
.then((response) => response.json())
.then((database) => {
    let container = document.querySelector(".container");
    let row = document.createElement("div");
    row.className = "row justify-content-between";
    
     let lists = [];
    database.forEach((data) => {
        

        let card = document.createElement("div");
        let img = document.createElement("img");
        let strong = document.createElement("strong");
        let cardBody = document.createElement("div");
        let title = document.createElement("h5");
        let paragraph = document.createElement("p");
        let link = document.createElement("a");

        card.className = "card mt-5";
        card.style.width = "18rem";
        img.className = "card-img-top";
        cardBody.className = "card-body";
        strong.className = "data-id";
        title.className = "card-text";
        link.className = "btn btn-primary w-0";

        img.src = `${data.url}`
        strong.innerText = `Id: ${data.id}`
        title.innerText = `Title: ${data.title}`;
        link.innerText = `More detail`;
        link.href = "/change.html";

        cardBody.appendChild(strong);
        cardBody.appendChild(title);
        cardBody.appendChild(paragraph);
        cardBody.appendChild(link);
        card.appendChild(img);
        card.appendChild(cardBody);
        row.appendChild(card);


        link.addEventListener("click",function(){
        
            localStorage.getItem("cardBody");

            let list = {
                card,
                img,
                title,
                link
            }
            lists.push(list);
        })
        localStorage.setItem("cardBoy",1)
    })
    container.appendChild(row);
});

