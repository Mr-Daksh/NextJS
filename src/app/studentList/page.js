import React from 'react'
import Link from 'next/link'
const StudentList = () => {
  return (
    <div>
       <h1>Student list</h1>
       <ul>
        <li>
            <Link href="/studentList/anil">Anil</Link>
        </li>
        <li>
            <Link href="/studentList/sam">Sam</Link>
        </li>
        <li>
            <Link href="/studentList/peter">Peter</Link>
        </li>
        <li>
            <Link href="/studentList/bruce">Bruce</Link>
        </li>
       </ul>
    </div>
  )
}

export default StudentList
