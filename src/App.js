import logo from './logo.svg';
import './App.css';
import { signInWithGoogle } from './firebase';

function App() {

  const handleClick=()=>{
    signInWithGoogle()
  }

  return (
    <div className="App">
     <button onClick={handleClick}> sign In with google</button>
    </div>
  );
}

export default App;
