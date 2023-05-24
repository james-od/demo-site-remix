import React from "react";
import RhymesContainer from "./components/RhymesContainer"
import SearchBox from "./components/SearchBox"

import { createContext } from "react";

export const SearchContext = createContext([])

export default function RhymeFinder(){


  let [search, setSearch] = React.useState("")

  return(
    <>
      <SearchContext.Provider value={[search, setSearch]}>
        <SearchBox />
      </SearchContext.Provider>
      <RhymesContainer search={search}/>
    </>

  )
}