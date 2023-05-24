import {useContext} from "react";
import { SearchContext } from "..";


export default function SearchBox(){

  let [search, setSearch] = useContext(SearchContext)

  const makeSearch = (val: string) => {
    setSearch(val)
  }

  return (
    <div className="centered-elements">
      <p className="subtitle">Get words that rhyme</p>
      <input  value={search} onChange={e => makeSearch(e.target.value)}/>
    </div>
  )
}