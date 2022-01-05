import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

 const [showImage, setShowImage] = useState(false);
 const toggle = () => {
   setShowImage(!showImage);
 }
  
    return (
      <div className="App">
        <header className="App-header">
          <button type="button"onClick={toggle}>
            {this.state.showImage ? 'Esconder' : 'Mostrar' }
            </button>
            
          {this.state.showImage && (
             <img src={logo} className="App-logo" alt="logo" />
          )}
        </header>
      </div>
    );
  }


 

export default App;
