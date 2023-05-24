import { useState } from "react"

export default function TodoApp(){

  let [items, setItems] = useState([])
  let [title, setTitle] = useState('')
  let [category, setCategory] = useState('')
  let [tab, setTab] = useState('all')

  const addItem = () => {
    let currentItems = [...items]
    currentItems.push({title: title, category: category})
    setItems(currentItems)
    setTitle('')
    setCategory('')
  }

  const getRows = () => {
    if(tab === 'all'){
      return items.map(item => <li style={{color: "white"}}>{item.title},{item.category}</li>)
    }else{
      return items.filter(item => item.category === tab).map(item => <li style={{color: "white"}}>{item.title},{item.category}</li>)
    }
  }

  return(
    <>
      <input value={title} onChange={e => setTitle(e.target.value)}/>
      <input value={category} onChange={e => setCategory(e.target.value)}/>
      <div>
        <p style={{color: "white"}} onClick={() => setTab('all')}>
          All
        </p>
        <p style={{color: "white"}} onClick={() => setTab('completed')}>
          Completed
        </p>
        <p style={{color: "white"}} onClick={() => setTab('active')}>
          Active
        </p>        
      </div>
      <button onClick={() => addItem()}>Add item</button>
      <ul>
        {getRows()}
      </ul>
    </>
  )

}