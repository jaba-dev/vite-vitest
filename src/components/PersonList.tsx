

type PersonListProps = {
 people: {
  first: string
  last: string
}[]
}

function PersonList(props:PersonListProps) {
  return (
    <div>
     {props.people.map((item,index)=>{
      return <h2 key={index}>{item.first} {item.last}</h2>
     })}
    </div>
  );
}

export default PersonList;
