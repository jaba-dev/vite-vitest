import './App.css'
import Greet from "./components/Greet"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
function App() {
  const person = {
    first: "Mikel",
    last: "Riera"
  }

  const nameList = [
    {
    first: "Theo",
    last: "Winslow"
  },
  {
    first: "Jasper",
    last: "Thornton"
  },
  {
    first: "Aiden",
    last: "Caldwell"
  }
  ]
  return (
    <>
    <h1>hello world</h1>
     <h2>Hello From React TypeScript</h2>
     <Greet name="Rina" messageCount={10} isLoggedIn={false}/>
     <Person first={person.first} last={person.last}/>
     <PersonList people={nameList}/>
    </>
  )
}

export default App
