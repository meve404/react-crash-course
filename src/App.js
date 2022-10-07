import { Header } from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  return (
    <div className="container">
      {/* <h2>{x ? name : 'No'}</h2> x ? : == if x then ... */}
      {/* <Header tittle = 'hello'></Header> */}
      <Header></Header>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
