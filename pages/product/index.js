import React from "react";

function Product({products}) {
  return (
    <ul>
        {products.map(item=><li key={item.id}>{item.title} - {item.price}</li>)}
    </ul>
  );
}

export async function getStaticProps(){
    const response = await fetch("http://localhost:3000/products")
    const data = await response.json()

    console.log(data)
    return {
        props:{
            products: data
        },
        revalidate: 5
    }
}

export default Product;
