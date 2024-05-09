import React from 'react'

const Student = ({ params }) => {
    console.log(params);
    return (
        <>
            <h1>Student details</h1>
            <h1>Name: {params.student}</h1>
        </>
    )
}

export default Student
