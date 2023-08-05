let products = [
  { img: "/assests/pexels-aviz-3912486.jpg", name: "Diamond Ring" ,price:"$2340"},
  { img: "/assests/pexels-the-glorious-studio-10983783.jpg", name: "Earrings",price:"$455" },
  { img: "/assests/one.jpg", name: "Diamond Ring" ,price:"$234"},
  { img: "/assests/greengem.jpg", name: "Diamond gem Stone ring",price:"$230" },
  { img: "/assests/ear.jpg", name: "Diamond Earrings" ,price:"$129"},
  { img: "/assests/earring.jpg", name: "Gold Set",price:"$1233" },
  { img: "/assests/kl.jpg", name: "Abigail Necklace " ,price:'$1200'},
  { img: "/assests/gold.jpg", name: "Golden Oval Citrine Gold Ring",price:"$290" },
  { img: "/assests/pexels-meum-mare-17498769.jpg", price: "$500", name: "Gem Pendant" },
  { img: "/assests/pexels-pixabay-265906.jpg", price: "$900", name: "Diamond Ring-II" },
 
];

let showItem = 4;
products.splice(0, showItem).forEach(function (elem) {
  document.querySelector(".jewelry-cards").innerHTML += changehtml(elem);
});
function changehtml(elem) {
  return `
    <div class="jewelry-card">
    <img src="${elem.img}" alt="Jewelry 1">
    <div class="purchase">
        <div class="names">
            <h3>${elem.name}</h3>
        <p>Price:&nbsp; ${elem.price}</p>
        </div>
        <button>Buy Now</button>
    </div>
</div>
    
    
    `;
}
function showNextItem(){
    let endIndex =Math.min(showItem + 2 , products.length);
    for(let i = showItem ; i < endIndex;i++){
        var elem  = products[i];
        document.querySelector(".jewelry-cards").innerHTML += changehtml(elem);
    }
    showItem = endIndex;
    if(showItem>= products.length){
        document.querySelector("#load").setAttribute("disabled","true")
    }
    
}


document.querySelector("#load").addEventListener("click",showNextItem)
