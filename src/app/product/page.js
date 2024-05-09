import React from 'react'
import Link from 'next/link'

const Product = () => {
  return (
    <div>
     <h1>This is Product Page</h1>
    
       <h1>Product List</h1>
       <ul>
        <li>
            <Link href="/product/Apple">Apple</Link>
        </li>
        <li>
            <Link href="/product/Mango">Mango</Link>
        </li>
        <li>
            <Link href="/product/Banana">Banana</Link>
        </li>
        <li>
            <Link href="/product/strawberry">strawberry</Link>
        </li>
       </ul>
    
    </div>
  )
}

export default Product
