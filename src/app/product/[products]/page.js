import React from 'react'

const Products = ({ params }) => {
  console.log(params);
  console.log("hello");
  return (
    <>
      <h1>Product Details</h1>
      <h1>Name: {params.products}</h1>
    </>
  )
}

export default Products
