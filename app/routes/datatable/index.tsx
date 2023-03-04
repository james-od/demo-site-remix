import React, { useRef } from "react";
import ReactDOM from "react-dom";
import useTable from "./hooks/useTable";

import { data } from "./data"

const columns = [
  {
    label: "ID"
  },
  {
    label: "Photo Url"
  },
  {
    label: "Notes"
  },
  {
    label: "BirthDate"
  },
  {
    label: "BirthDateIsProtected"
  },
  {
    label: "ParliamentaryNameID"
  },
  {
    label: "PreferredName"
  },
  {
    label: "GenderTypeID"
  },  
  {
    label: "isCurrent"
  },   
]

const paginationConfig = {pageSize: 10}

export default function App() {

  const itemsRef = useRef(null);
  
  const { headers, rows, pagination } = useTable({data, columns, paginationConfig})

  const {pageNumber, prevPage, nextPage, firstPage, finalPage} = pagination

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  console.log(itemsRef)

  return(
    <div>
      <table>
        <thead>
          <tr>
            {headers.map(({label}, index) => <th key={index}>{label}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                  <td key={index} ref={(node) => {
                    const map = getMap();
                    if (node) {
                      map.set(index, node);
                    } else {
                      map.delete(index);
                    }
                  }} onClick={() => getMap().get(index).focus()}>{cell}</td>
              ))}
            </tr>
          )))}
        </tbody>
      </table>
      <div className="pageControls">
        <button onClick={firstPage}>{"<<"}</button>
        <button onClick={prevPage}>{"<"}</button>
        <p className="subtitle">{pageNumber}</p>
        <button onClick={nextPage}>{">"}</button>
        <button onClick={finalPage}>{">>"}</button>
      </div>
    </div>
  )
}
