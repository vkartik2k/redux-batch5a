import logo from './logo.svg';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import allReducers from './reducer';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import Name from './components/Name';
import thunk from 'redux-thunk'
import FetchData from './components/FetchData';

const store = createStore(allReducers, applyMiddleware(thunk))

function App() {

  return (
    <Provider store={store} >
      <div className="App">
        
        <Counter/>
        <Name/>
        <FetchData/>
      </div>
    </Provider>
  );
}

export default App;
