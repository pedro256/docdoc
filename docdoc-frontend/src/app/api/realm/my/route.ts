import ListProjects from "@/mocks/ListMyRealms"
import { cookies, headers } from "next/headers"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {

    // const headersList = await headers()
    // const referer = headersList.get('Authorization')
    // const e = request.nextUrl.searchParams.get("ea")
    console.log("a")
    return new Promise<any>((resolve)=>{
        setTimeout(()=>{
            resolve(Response.json(ListProjects))
            console.log("b")
        },5000)
    })
    
    
}