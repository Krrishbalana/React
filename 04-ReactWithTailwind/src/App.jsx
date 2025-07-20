import './App.css'
import Card from './components/card'
function App() {
  let user = {
    username: "krish",
    price: "20 $",
    batch: "#01",
  }
  return (
    <>
    <Card myobj = {user}/>
    </>

  )
}

export default App
