import * as React from 'react';
import './App.css';
import Hello from './components/Hello';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
       <Hello name="Ganesh" enthusiasmLevel={10}/>
      </div>
    );
  }
}

export default App;
