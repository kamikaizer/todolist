import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>TO DO List</h1>
        <TodoWrapper />
      </header>
    </div>
  );
}

export default App;