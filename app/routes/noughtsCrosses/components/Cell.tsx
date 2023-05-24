type PropTypes = {
  value: string;
  i: number;
  j: number;
  onClick: () => void;
}
export default function Cell({value, i, j, onClick}: PropTypes){
  return (
    <div onClick={onClick} style={{width: "100px", height: "100px", alignItems: "center"}}>
      {value}
    </div>
  )
}