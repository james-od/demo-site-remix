import { useState, useMemo, useEffect, useCallback } from "react"

const useTable = ({data, columns, paginationConfig}) => {

  const [pageIndex, setPageIndex] = useState(0)

  const pageMax = Math.round(data.length/paginationConfig.pageSize);

  let headers = useMemo(() => columns.map(column => ({label: column.label})), [columns])

  let rows = data.slice(pageIndex * paginationConfig.pageSize, (pageIndex+1) * paginationConfig.pageSize).map(datum => Object.values(datum))

  const firstPage = () => setPageIndex(0)
  const prevPage = () => setPageIndex(pageIndex => pageIndex > 0 ? pageIndex - 1 : 0)
  const nextPage = () => setPageIndex(pageIndex => pageIndex < pageMax-1 ? pageIndex + 1 : pageMax-1)
  const finalPage = () => setPageIndex(pageMax-1)

  let pagination = {pageNumber: pageIndex+1, prevPage , nextPage, firstPage, finalPage}

  return {headers, rows, pagination}
}

export default useTable