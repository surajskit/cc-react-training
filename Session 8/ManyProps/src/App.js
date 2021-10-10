import logo from './logo.svg';
import './App.css';

const Details=({name,engine,gearBox,type,bph,torque})=>{
  return(
    <>
    <h1>CarDetails</h1>
    <p>name:{name}</p>
    <p>engine:{engine}</p>
    <p>gearBox:{gearBox}</p>
    <p>type:{type}</p>
    <p>bph:{bph}</p>
    <p>torque:{torque}</p>
    </>
    

  )
}

const List=({spearWheel,seatingCapacity,...other})=>{
  const ignoredProperties=[spearWheel,seatingCapacity]
  console.log(`Ignored Properties are: spearWheel: ${ignoredProperties[0]},seatingCapacity: ${ignoredProperties[1]}`);
  return(
<div>
    <Details {...other}/>
</div>
  )
}

function App() {

  const list ={
    name:'Ferrari Monza SP2',
    engine:' 6.5 L F140 GC V12',
    gearBox:'6-speed Automatic',
    type:'Sports Car',
    spearWheel:'13,572.00 INR',
    seatingCapacity:2,
    bph:600,
    torque:'530 lb-ft'
  }

  return (
    <div className="App">
      <List {...list}/>
    </div>
  );
}

export default App;
