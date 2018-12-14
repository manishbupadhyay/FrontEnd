const products = [
    {name:'iPhone',price:200},
    {name:'Nokia',price:70},
    {name:'Samsung',price:150},
    {name:'Moto',price:98},
    {name:'Xiaomi',price:10}
 ];

 let template = "";

 products.forEach(function(product){

    function discount(){
        if(product.price < 100){
            return `<span> On Sale !! </span>`;
        }
        return ``;
    }

    template += `<div class="product">
    <h1>${product.name}</h1>
    <strong>Price: ${product.price}</strong>
    ${discount()}
    </div>`;

 });

 document.body.insertAdjacentHTML("afterbegin", template);