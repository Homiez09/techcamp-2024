export default async function onGetScore(){
    const response = await fetch(`${process.env.onGetScoreUrl}`)
    const data = await response.json()
    console.log(data)
}