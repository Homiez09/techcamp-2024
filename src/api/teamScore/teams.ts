'use server'
import { Team } from "@/interface/teamScoreDetail"

export default async function onGetScore(){
    //getting data from the API => .env file
    const response = await fetch(`${process.env.OnGetScoreURL}`)
    const data : Team[] = await response.json()

    const sortedTeams = data.sort((a, b) => {
        // Handle null values by treating them as lower than any number
        if (a.summary === null) return 1;
        if (b.summary === null) return -1;
        return b.summary - a.summary;
    });

    return sortedTeams 
}