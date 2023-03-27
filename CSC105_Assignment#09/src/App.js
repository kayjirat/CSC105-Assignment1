import './App.css';
import Card from './component/Card';
import List from './component/List';
import MyForm from './component/MyForm';
import TypeMe from './component/TypeMe';

function App() {
  return (
    <div className="App">
      <List/>
      <TypeMe/>
      <MyForm/>
    </div>
  );
}

export default App;