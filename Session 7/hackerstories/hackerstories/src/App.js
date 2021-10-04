import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import item from './Components/List';

function App() {
  return (
    <div className="App">
      <Search placeholder="Search here" data={item}/>
      <item/>
    </div>
  );
}

export default App;
