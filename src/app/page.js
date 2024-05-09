// 'use client'
// import HomeC from "./components/HomeC";
// import Counter from "./components/Counter";
// import Example from "./components/Example";
// import StyleComponent from "./components/StyleComponent";
// import Link from "next/link";
// export default function Home() {
//   return (
//     <>
//       {/* <HomeC text="Hello from atul'first project" text2="hello atuls"/> */}
//       {/* <Counter/> */}
//       {/* <Example/> */}
//       {/* <StyleComponent/> */}
//     {/* <Link href='/about'>go to about</Link>
//     <Link href='/contact'>go to contact</Link>
//     <Link href='/contact/service'>go to service</Link>
//      */}
//     </>
//   );
// }




'use client'
import Link from "next/link";
import React from "react";

export default function Home(){
  return(
    <>
    <Link href='/ProductList' style={{backgroundColor: ''}}>go to product list page</Link>
    </>
  )
}
