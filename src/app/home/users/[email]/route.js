import React from 'react'
import { User } from '@/app/util/db'
import { NextResponse } from 'next/server'
export function GET (request,content){
    const userdata=User.filter((item)=> item.email==content.params.email);
    return NextResponse.json(userdata)
}