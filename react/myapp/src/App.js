import Ninjas from './ninja'

function App() {
  return (
    <div className="App">
     <h1> My first react app</h1>
     <p>Welcome</p>
     <Ninjas name="karyango" age='25' city='kigali'/>
     <Ninjas name="NINJA" age='95' city='Kiramuruzi'/>
    </div>
  );
}

export default App;
