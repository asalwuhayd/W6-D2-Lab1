let myreq = new XMLHttpRequest();
myreq.open("Get","https://fakestoreapi.com/products");
myreq.send();
myreq.onreadystatechange= function () {
 if (this.readyState === 4 && this.status === 200) {
   
    let data = JSON.parse(this.responseText);
    console.log(data);
    
    for (let i = 0; i < data.length; i++) {
      let contianr_ = document.getElementById("contianr")
        let div = document.createElement("div");
        let title_stor = document.createElement("h4")
        let img_stor = document.createElement("img");
        let price_stor = document.createElement("p");
        title_stor.innerHTML= data[i].title;
        price_stor.innerHTML= "price "+ data[i].price+"$";
        img_stor.src= data[i].image
        div.style.cssText ="  height: 45vh;justify-content: center;align-items: center; border: 1px solid; box-shadow: 5px 5px 6px grey; border-radius: 10px; display: flex; flex-direction: column;";
        img_stor.style.cssText = 'height: 200px; object-fit: contain;';
        div.appendChild(title_stor)
        div.appendChild(img_stor)
        div.appendChild(price_stor)
        contianr_.appendChild(div)
        
      }
 }

    
}