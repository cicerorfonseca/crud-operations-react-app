import './App.css';
import Create from './components/Create';

function App() {
  return (
    <div className='main'>
      <header>
        <h2 className='main-header'>React CRUD Operations</h2>
      </header>
      <section>
        <div>
          <Create />
        </div>
      </section>
    </div>
  );
}

export default App;
