'use client'
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [products, setProducts] = useState([]);

    useEffect ( () => {
        const fetchData = async () => {
            let data = await fetch('https://dummyjson.com/products')

            data = await data.json();
            console.log(data)
            setProducts(data.products)
        }
        fetchData();
    }, [])

  return (
    <div>
      <h1>this is the product list page</h1>
      {
        products.length > 0 && products.map((item) => (
            <h2 key={item.id}>Name: {item.title}, price: {item.price}</h2>
        ))
      }
    </div>
  )
}

export default Page



//for client side rendering
// async function productList () {
//     let data = await fetch('https://dummyjson.com/products')
//     data = await data.json();
//     return data.products
// }
// export default async function ProductList() {
//     const products = await ProductList();