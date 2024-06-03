'use server'
import { Team } from "@/interface/teamScoreDetail"

export default async function onGetScore(){
    //getting data from the API => .env file
    const response = await fetch(`${process.env.OnGetScoreURL}`)
    const data : Team[] = await response.json()
    return data 
}