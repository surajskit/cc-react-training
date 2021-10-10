import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import dataList from './components/lists';


function App() {
  return (
    <div>
<Search data={dataList}/>
    </div>
  );
}

export default App;
