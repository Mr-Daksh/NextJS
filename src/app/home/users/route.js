// import {NextResponse} from "next/server"

// export function GET (response){

//     return NextResponse.json({name:"Atul",age:22})
// }

import { User } from "@/app/util/db"; 
import { NextResponse } from "next/server";

export function GET(){

    const data=User;
    return NextResponse.json(data,{status:200})
}