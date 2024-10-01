let ul=document.querySelector("ul");
function add(){
    let input=document.querySelector("input");
    let item=document.createElement("li");
    item.innerHTML=input.value+"<span>\u00d7</span>";
    ul.append(item);
    input.value="";
}

ul.addEventListener("click",function(event){
    if(event.target.tagName=="LI"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName=="SPAN"){
        event.target.parentElement.remove();
    }
},false);
