export default async function onGetScore(){
    const response = await fetch('https://api.sheety.co/24ce9b488ad156cfb3b3bfa7e91a4db6/สำเนาของTechCamp #2 |OverallScores/overall',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }) 
    const data = await response.json()
    console.log(data)
}