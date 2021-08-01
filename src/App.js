import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='main'>
        <header>
          <h2 className='main-header'>React CRUD Operations</h2>
        </header>

        {/* CREATE */}
        <section>
          <div>
            <Route exact path='/create' component={Create} />
          </div>
        </section>

        {/* TODO
          - add modal to confirm update and delete
          - update styles
          - validate form before post/put
        */}

        {/* READ */}
        <section>
          <div>
            <Route exact path='/' component={Read} />
          </div>
        </section>

        {/* UPDATE */}
        <section>
          <div>
            <Route exact path='/update' component={Update} />
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
