import { useState, useEffect } from "react"

type Response = {
  word: string;
  numSyllables: number;
  score: number
}

type PropTypes = {
  search: string;
}

export default function RhymesContainer({search}: PropTypes){

  let [response, setResponse] = useState<Response[]>([])

  const queryRhymeApi = async (queryString: string ) => {
    let response = await fetch(`https://api.datamuse.com/words?rel_rhy=${queryString}`)
    let json: any = await response.json()
    setResponse(json)
  }

  useEffect(() => {
    console.log("calling api")
    queryRhymeApi(search)
  }, [search])
  
  return (
    <div>
      {response ? <ul>
          {response.map((row, index) => <li className="subtitle" key={index}>{row.word}</li>)}
        </ul> : null}
    </div>
  )
}