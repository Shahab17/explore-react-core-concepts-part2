 
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick(){
    alert ('Button Clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  // vejailla handler
  const addToFour = (num)=>{
    alert(num + 5)
  }

  return (
    <>
       
      <h2>React Core Concepts 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>


      <button onClick={handleClick}>F*** Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{alert('Third Clicked')}}>Third</button>
      
       {/* veijailla handler */}
      <button onClick={()=> addToFour(5)}>Four</button> 
      
    </>
  )
}

export default App
