import {useState} from "react"

type PropTypes = {
  title: string;
  author: string;
  upvote_ratio: number;
}

export default function Post({title, author, upvote_ratio}: PropTypes){

  let [upvoted, setupvoted] = useState(false) 

  return (
    <div style={{marginBottom: "16px"}}>
      <div style={upvoted ? {backgroundColor: "orange", height: "40px", width: "40px"} : {backgroundColor: "grey", height: "40px", width: "40px"}} onClick={() => setupvoted(prev => !prev)}/>
      <p>{title}</p>
      <div style={{display: "flex"}}>
        <div>{author}</div>
        <div>{upvote_ratio}</div>
      </div>
    </div>
  )
}