import React,{Component} from 'react';
import FromLogin from './component/FromLogin';
class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <FromLogin/>
        </header>
        
      </div>
    );
  }
}

export default App;
