import React from 'react'
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <p>Hello, this is a routing example in a service.</p>
      <Link href='/about'>
        <button>ABOUT</button>
      </Link>
    </div>
  )
}

export default Page
