const body = document.body;

    let div = document.createElement("div");
    div.style.backgroundColor = "red";
    div.style.color = "black";
    div.style.width = "29%";
    div.style.height = "500px";
    div.style.textAlign = "center";
    div.style.justifyContent = "center";
    div.style.padding = "10px";
    div.style.paddingTop = "80px";
    div.alignItems = "center";
    div.style.borderRadius = "10px";
    div.style.margin = "auto";
    body.appendChild(div);

    let heading = document.createElement("h1");
    heading.innerText = "Color Picker";
    div.appendChild(heading);

    let div1 = document.createElement("div");
div1.style.backgroundColor = "white";
div1.style.width = "100%";
div1.style.height = "110px";
div1.style.display = "flex"; 
div1.style.borderRadius = "10px";
div1.style.alignItems = "center"; 
div1.style.justifyContent = "space-around"; 
div.appendChild(div1);


    

let box1 = document.createElement("div");
box1.classList.add("colorbox");
box1.innerText = "#e0e0e0";
box1.style.display = "flex";  
box1.style.justifyContent = "center";  
box1.style.alignItems = "center"; 
box1.style.backgroundColor = "#e0e0e0";
box1.style.width = "100px";
box1.style.height = "100px";
box1.style.margin = "10px";
box1.style.border = "1px solid black";
box1.style.borderRadius = "10px";
div1.appendChild(box1);


let box2 = document.createElement("div");
box2.classList.add("colorbox");
box2.innerText = "#6fcf97";
box2.style.display = "flex";  
box2.style.justifyContent = "center";  
box2.style.alignItems = "center"; 
box2.style.backgroundColor = "#6fcf97";
box2.style.width = "100px";
box2.style.height = "100px";
box2.style.margin = "10px";
box2.style.border = "1px solid black";
box2.style.display = "flex";
box2.classList.add("colorbox"); 
box2.style.border = "1px solid black";
box2.style.borderRadius = "10px";
div1.appendChild(box2);

let box3= document.createElement("div");
box3.classList.add("colorbox");
box3.innerText = "#56ccf2";
box3.style.display = "flex";  
box3.style.justifyContent = "center";  
box3.style.alignItems = "center"; 
box3.style.backgroundColor = "#56ccf2";
box3.style.width = "100px";
box3.style.height = "100px";
box3.style.margin = "10px";
box3.style.border = "1px solid black";

box3.classList.add("colorbox"); 
box3.style.border = "1px solid black";
box3.style.borderRadius = "10px";
div1.appendChild(box3);

let box4 = document.createElement("div");
box4.classList.add("colorbox");
box4.innerText = "#bb6bd9";
box4.style.textAlign = "center";
box4.style.backgroundColor = "#bb6bd9";
box4.style.width = "100px";
box4.style.height = "100px";
box4.style.margin = "10px";
box4.style.border = "1px solid black";
box4.style.display = "flex";  
box4.style.justifyContent = "center";  
box4.style.alignItems = "center"; 
box4.classList.add("colorbox"); 
box4.style.border = "1px solid black";
box4.style.borderRadius = "10px";
div1.appendChild(box4);

let div2 = document.createElement("div");
div2.style.backgroundColor = "black";
div2.style.width = "100%";
div2.style.height = "50px";
div2.innerText = "Color Code";
div2.style.marginTop= "20px";
div2.style.color = "white";
div2.style.textAlign = "center";
div2.style.paddingTop = "10px";
div2.style.borderRadius = "10px";
div2.style.display = "flex";  // Flexbox enable
div2.style.justifyContent = "center";  // Horizontal center
div2.style.alignItems = "center"; 
div.appendChild(div2);


let p=document.createElement("p");
p.innerText="clicking on one of the colors above to change the background color of this page!";
div.appendChild(p);

box1.addEventListener("click", function() {
    div.style.backgroundColor = "#e0e0e0";
    div2.innerText = "#e0e0e0";
});

box2.addEventListener("click", function() {
    div.style.backgroundColor = "#6fcf97";
    div2.innerText = "#6fcf97";
});


box3.addEventListener("click", function() {
    div.style.backgroundColor = "#56ccf2";
    div2.innerText = "#56ccf2";
});


box4.addEventListener("click", function() {
    div.style.backgroundColor = "#bb6bd9";
    div2.innerText = "#bb6bd9";
});






