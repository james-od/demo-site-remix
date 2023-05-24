import { useEffect, useState } from "react"
import Post from "./components/Post"

export default function RedditClone(){

  let [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      let response = await fetch('http://www.reddit.com/r/reactjs.json');
      if(response.ok){
        let json = await response.json()
        setData(json?.data?.children)
        console.log(json.data.children)
      }
    }
    fetchData()
  }, [setData])

  return (
    <div>
      <p className="subtitle">
        <ul>
          {data.map(post => <Post title={post.data.title} author={post.data.author} upvote_ratio={post.data.upvote_ratio}/>)}
          
        </ul>
      </p>
    </div>
  )
}