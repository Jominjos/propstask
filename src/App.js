
import { useState } from 'react';
import './App.css';
import Dash from './components/dash';
import Main from './components/main';
function App() {
  const [count, setcount]= useState(0)
  return (
    <div className="App">
  
<>
 <div>
  <h1> TASK : Passing props from one component to other</h1>
 </div>
 <Dash count={count}/>
      <Main count={count} setcount={setcount}/>
      

</>

    </div>
  );
}

export default App;
