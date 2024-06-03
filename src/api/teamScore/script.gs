function onGetScores(){
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Overall")
  const dataRange = sheet.getDataRange()
  const data = dataRange.getValues()
  // console.log(data)
  //init teams
  var Teams =[]
  for (let i = 3 ; i < data.length ; i++){
    const row = data[i]
    const tempTeams = {
      teamID: row[0],
      teamName: row[1] || null,
      solve1: row[2] || null,
      kahoot1: row[3] || null,
      solve2: row[4] || null,
      kahoot2: row[5] || null,
      solve3: row[6] || null,
      kahoot3: row[7] || null,
      project: row[8] || null,
      summary: row[9] || null,
      percentage: row[10] || null
    };
    Teams.push(tempTeams)
  }
  console.log(Teams)

}