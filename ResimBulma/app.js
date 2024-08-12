 const formWrapper = document.querySelector(".form-wrapper");
 const form = document.querySelector("#form");
 const searchInput = document.querySelector("#searchInput");
 const buttonWrapper = document.querySelector(".button-wrapper");
 const searchButton = document.querySelector("#searchButton");
 const clearbutton = document.querySelector("#clearButton");
 const imageListWrapper = document.querySelector(".imageList-wrapper");


 runEventListeners();

 function runEventListeners(){
    form.addEventListener("submit" , search);
    clearbutton.addEventListener("click" , clear);

 }

 function clear(){
    searchInput.value = "";
  //  Array.from(imageListWrapper.children).forEach((child)=>child.remove()) alternatifi aşağıda
    imageListWrapper.innerHTML= "";
 }



 function search(e){
    const value = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}` , {
        method : "GET" , 
        headers: {
            Authorization : "Client-ID fe6aWb1sev-uyk59ujKhqw_rcFKiBlrKsnYyQgPyro8 "
        }
    })
    .then((res)=> res.json())
    .then((data)=> {
        Array.from(data.results).forEach((image)=>{
           // console.log(image.urls.small)
            addImageToUI(image.urls.small)
        })
    })  
    .catch((err)=>console.log(err));

    e.preventDefault();
 }



 function addImageToUI(url){
    const div = document.createElement("div");
    div.className="card";
    const img = document.createElement("img");
    img.setAttribute("src" , url);
    img.height="400";
    img.width="400";
    div.appendChild(img);
    imageListWrapper.appendChild(div);    

 }
