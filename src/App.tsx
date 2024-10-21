import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
        <div className="sm:grid sm:grid-cols-1 gap-4 sm: mx-auto">
        <Home />
      </div>
    </div>
  );
}

export default App;
