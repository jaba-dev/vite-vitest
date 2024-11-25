type PersonProps = {
 first: string
 last: string
}
function Person(props: PersonProps) {
  return (
    <div>
     {/* <p>Andy Callahan</p> */}
     <p>person component</p>
     <p>{props.first} {props.last}</p>
    </div>
  )
}

export default Person