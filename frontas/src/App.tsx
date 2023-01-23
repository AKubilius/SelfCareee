import './App.css';
import AppBar from "./components/AppBar/AppBar"
import Banner from './components/Banner/Banner';
import Paper from './components/Banner/Paper';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <Banner/>
      <Paper/>
    </div>
  );
}

export default App;
