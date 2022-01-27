import './App.css';
import { CIDRBlock } from './components/cidrBlock/CIDRBlock'

function App() {
  return (
    <div className="App">
     <CIDRBlock cidr="1.2.3.4/10"/>
    </div>
  );
}

export default App;
